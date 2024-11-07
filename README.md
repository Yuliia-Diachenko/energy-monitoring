# Web service for additional monitoring of data objects energy industry.

## Description

This project is a backend for monitoring energy resources. It provides a REST API for managing energy consumption data, connecting to a MongoDB database, and generating API documentation.


1. **Clone the repository:**

```sh git clone https://github.com/Yuliia-Diachenko/energy-monitoring ```

2. **Install dependencies:**

```sh npm install ```

## Usage

### Development

 1. **Start the local development server:**

 ```sh npm run dev ```

 2. **Start the MongoDB server:**

 Ensure the MongoDB server is running and the connection is configured in `src/config.js`.

 3. **Generate API documentation:**

 ```sh npm run build-docs ```

### Production

1. **Start in production mode:**

```sh npm start ```

## API Documentation

 The documentation can be viewed at `/api-docs` after the server is running.
 The documentation is generated using [Redocly](https://redocly.com/).

## Project Structure - `src/` - main project code - `docs/` - API documentation


## The database created in Mongodb has the following endpoints:

 - For Green Plants collection
       - GET: /green                         - to receive all Green Plants
       - GET: /green/:greenPlantId           - to receive Green Plant by id
       - POST: /green                        - to add a new Green power plant
       - DELETE: /green/:greenPlantId        - to delete Green Plant by id
       - PUT: /green/:greenPlantId           - to upsert Green Plant by id
       - PATCH: /green/:greenPlantId         - to update Green Plant by id

 - For Thermal Plants collection
       - GET: /thermal                       - to receive all Thermal Plants
       - GET: /thermal/:thermalPlantId       - to receive Thermal Plant by id
       - POST: /thermal                      - to add a new Termal power plant
       - DELETE: /thermal/:thermalPlantId    - to delete Thermal Plant by id
       - PUT: /thermal/:thermalPlantId       - to upsert Thermal Plant by id
       - PATCH: /thermal/:thermalPlantId     - to update Thermal Plant by id

## Contributing

We welcome contributions to the project! Please create pull requests and open issues for discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details. ---

## Contact
 - **Author:** Yuliia Diachenko
 - **Email:**  y.diachenko@meta.ua
 - **GitHub:** https://github.com/Yuliia-Diachenko

## Swagger docs
https://energy-monitoring.onrender.com/api-docs
