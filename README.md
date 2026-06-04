# Smart Export Containers

A Qlik Sense extension that adds an export button for tables and pivot tables, including objects inside containers.

## How it works

Uses the Qlik native `exportData()` API — no DOM scraping, no size limits.

## Installation

1. Download the ZIP
2. Go to Qlik Cloud Management Console → Extensions → Import
3. Upload the ZIP

## Usage

1. Add the **Smart Export Containers** object to your sheet
2. In the properties panel, enter the **Object ID** of each table you want to export (up to 4)
3. To find the Object ID: right-click the table → Developer → Object ID
4. Click the Export button on the sheet to download as Excel

## Features

- Works inside containers
- Up to 4 configurable tables
- Tab picker when multiple tables are configured
- Configurable button label and colors
- Uses Qlik native export — no file size issues
