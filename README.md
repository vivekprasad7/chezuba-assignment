# UI for Minizuba - Order Lines API

![image](https://github.com/vivekprasad7/chezuba-assignment/assets/26505800/eae9616e-9a0c-45b7-9e50-090bf8600ee1)

## Overview

This project aims to build a user interface for accessing the Minizuba Order Lines API. The application provides a user-friendly interface to view and manage order lines, making it easier for the supervisor to navigate the API and streamline the packaging process.

## Implemented Features

- Packaging orders displayed in a list view, sorted by OrderLineID.
- Filter orderlines by quantity.
- Grouping by OrderID and UserID.
- Rich and responsive UI design.
- Color-coded package types for easy identification.
- Unit test cases for quality assurance.

## Setting Up Locally

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd minizuba-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## About the API

The application fetches orderlines data from the Minizuba Order Lines API using the following endpoint:

**Request URL:** `https://minizuba-fn.azurewebsites.net/api/orderlines`

**Request Method:** `GET`

**Parameters:**
- `typeID` (required): ID of the packaging type (values range from 1 to 14).
- `quantity` (optional): Number of items ordered under one orderline.

**Response Format:**
Results are ordered in ascending order of OrderLineID.

Sample Response:
```json
[{
  "OrderLineID": 307,
  "OrderID": 151,
  "StockItemID": 200,
  "Description": "Black and yellow heavy despatch tape 48mmx100m",
  "PackageTypeID": 1,
  "Quantity": 96,
  "UnitPrice": 4.1
}]
```

