define([
    "jquery",
    "qlik",
    "css!./css/SmartExportContainers",
    "./Properties"
], function ($, qlik, cssContent, properties) {
    'use strict';

    function exportObject(app, objectId) {
        app.getObject(objectId).then(function(model) {
            model.exportData({fileType: 'OOXML'}).then(function(reply) {
                var url = reply.qUrl;
                // Qlik returns a relative URL — make it absolute
                if (url.indexOf('http') === -1) {
                    url = window.location.origin + url;
                }
                window.open(url);
            }).catch(function(err) {
                console.error('SmartExport exportData error:', err);
                alert('Export failed. Check browser console for details.');
            });
        }).catch(function(err) {
            console.error('SmartExport getObject error:', err);
            alert('Object not found. Check the Object ID in properties.');
        });
    }

    function buildTabPicker(app, tabs, bgColor, fgColor) {
        if (document.getElementById('seTabModal')) document.getElementById('seTabModal').remove();

        var tabButtons = tabs.map(function(tab) {
            return '<button class="se-tab-btn" data-id="' + tab.id + '" style="' +
                'background:' + bgColor + ';color:' + fgColor + ';' +
                'border:none;border-radius:6px;padding:10px 24px;margin:6px;' +
                'font-size:14px;font-weight:600;cursor:pointer;">' +
                tab.label + '</button>';
        }).join('');

        var html = '<div id="seTabModal" style="' +
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(0,0,0,0.5);z-index:9999;' +
            'display:flex;align-items:center;justify-content:center;">' +
            '<div style="background:#fff;border-radius:10px;padding:30px;min-width:300px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.2);">' +
            '<h3 style="margin-bottom:20px;color:#333;font-size:16px;">Select table to export</h3>' +
            tabButtons +
            '<br><button id="seTabClose" style="margin-top:16px;background:none;border:1px solid #ccc;border-radius:6px;padding:8px 16px;cursor:pointer;color:#888;font-size:13px;">Cancel</button>' +
            '</div></div>';

        $(document.body).append(html);

        document.getElementById('seTabClose').onclick = function() {
            document.getElementById('seTabModal').remove();
        };

        $('.se-tab-btn').on('click', function() {
            var objectId = $(this).data('id');
            document.getElementById('seTabModal').remove();
            exportObject(app, objectId);
        });
    }

    return {
        initialProperties: { version: 2.0, showTitles: false },
        definition: properties,
        paint: function ($element, layout) {
            var app = qlik.currApp();
            var buttonLabel = layout.buttonLabel || 'Export';
            var bgColor = (layout.iconbackground && layout.iconbackground.color) || '#2a9d8f';
            var fgColor = (layout.iconcolor && layout.iconcolor.color) || '#FFFFFF';

            var tabs = [];
            if (layout.tab1id) tabs.push({ label: layout.tab1label || 'Tab 1', id: layout.tab1id });
            if (layout.tab2id) tabs.push({ label: layout.tab2label || 'Tab 2', id: layout.tab2id });
            if (layout.tab3id) tabs.push({ label: layout.tab3label || 'Tab 3', id: layout.tab3id });
            if (layout.tab4id) tabs.push({ label: layout.tab4label || 'Tab 4', id: layout.tab4id });

            if (tabs.length === 0) {
                $element.html('<div style="padding:16px;color:#e74c3c;font-size:13px;">Set at least one Object ID in properties.</div>');
                return qlik.Promise.resolve();
            }

            var html = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;pointer-events:none;">' +
                '<button id="SE_trigger" style="' +
                'background:' + bgColor + ';color:' + fgColor + ';' +
                'border:none;border-radius:8px;padding:10px 20px;' +
                'font-size:14px;font-weight:600;cursor:pointer;' +
                'display:flex;align-items:center;gap:8px;' +
                'box-shadow:0 2px 6px rgba(0,0,0,0.15);pointer-events:all;">' +
                '<i class="lui-icon lui-icon--export"></i> ' + buttonLabel +
                '</button></div>';

            $element.html(html);

            document.getElementById('SE_trigger').onclick = function () {
                if (tabs.length === 1) {
                    exportObject(app, tabs[0].id);
                } else {
                    buildTabPicker(app, tabs, bgColor, fgColor);
                }
            };

            return qlik.Promise.resolve();
        }
    };
});
