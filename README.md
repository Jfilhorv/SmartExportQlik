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
  
<img width="183" height="666" alt="Screenshot 2026-06-04 at 10 04 23 am" src="https://github.com/user-attachments/assets/bf44281a-2db7-445f-8048-641d35252902" />

<img width="147" height="25" alt="Screenshot 2026-06-04 at 10 04 02 am" src="https://github.com/user-attachments/assets/cc16f738-3581-44b8-8d03-2a8e6b583e90" />

<img width="272" height="153" alt="Screenshot 2026-06-04 at 10 03 50 am" src="https://github.com/user-attachments/assets/e1756977-2385-4c0e-b9fe-93c258b3e974" />
