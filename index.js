const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8000;

app.use(express.json());

// Function to simulate an asynchronous operation with a delay
const simulateAsyncOperation = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};

// Endpoint for fetching data from an external API
app.get("/fetch-data", async (req, res) => {
    try {
        await simulateAsyncOperation();
        // Make a GET request to the external API (JSONPlaceholder in this case)
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Extract the data from the response
        const externalData = response.data;

        // Respond with the fetched data
        res.json(externalData);
    } catch (error) {
        console.error("Error fetching data from external API:", error.message);
        // Handle specific error cases, if needed
        if (error.code === 'ECONNABORTED') {
            res.status(504).json({ error: 'Gateway Timeout', message: 'The external API request timed out' });
        } else {
            res.status(500).json({ error: 'Internal Server Error', message: 'Error fetching data from external API' });
        }

    }
});

// Endpoint for processing the fetched data
app.get("/process-data", async (req, res) => {
    try {
        await simulateAsyncOperation();
        // Make a GET request to the external API (JSONPlaceholder in this case)
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Extract the data from the response
        const externalData = response.data;

        // Handle specific error cases in data processing
        if (!externalData.completed) {
            throw new Error("Data processing error: Task is not completed.");
        }
        await simulateAsyncOperation();

        // Transform the data (example: add a new property)
        const transformedData = {
            ...externalData,
            newProperty: "Added during transformation",
        };

        // Respond with the processed data
        res.json(transformedData);
    } catch (error) {
        console.error("Error processing data:", error.message);
        // Handle specific error cases, if needed
        if (error.message === 'Data processing error: Task is not completed.') {
            res.status(400).json({ error: 'Bad Request', message: 'The task is not completed' });
        } else {
            res.status(500).json({ error: 'Internal Server Error', message: 'Error processing data' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
