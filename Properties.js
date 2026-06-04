define([], function () {
    return {
        type: "items",
        component: "accordion",
        items: {
            settings: {
                uses: "settings",
                items: {
                    Options: {
                        label: "Export Settings",
                        type: "items",
                        items: {
                            Tab1Label: { ref: "tab1label", label: "Tab 1 - Label", type: "string", defaultValue: "Tab 1" },
                            Tab1Id: { ref: "tab1id", label: "Tab 1 - Object ID", type: "string", defaultValue: "" },
                            Tab2Label: { ref: "tab2label", label: "Tab 2 - Label", type: "string", defaultValue: "Tab 2" },
                            Tab2Id: { ref: "tab2id", label: "Tab 2 - Object ID", type: "string", defaultValue: "" },
                            Tab3Label: { ref: "tab3label", label: "Tab 3 - Label (optional)", type: "string", defaultValue: "" },
                            Tab3Id: { ref: "tab3id", label: "Tab 3 - Object ID (optional)", type: "string", defaultValue: "" },
                            Tab4Label: { ref: "tab4label", label: "Tab 4 - Label (optional)", type: "string", defaultValue: "" },
                            Tab4Id: { ref: "tab4id", label: "Tab 4 - Object ID (optional)", type: "string", defaultValue: "" },
                            ButtonLabel: { ref: "buttonLabel", label: "Button Label", type: "string", defaultValue: "Export" },
                            ButtonBackground: {
                                ref: "iconbackground", label: "Button background color",
                                type: "object", component: "color-picker",
                                defaultValue: { color: "#2a9d8f" }
                            },
                            ButtonColor: {
                                ref: "iconcolor", label: "Button text color",
                                type: "object", component: "color-picker",
                                defaultValue: { color: "#FFFFFF" }
                            }
                        }
                    }
                }
            }
        }
    }
});
