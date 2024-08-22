const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const port = 9999;

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Function to find the first prime number greater than a given number
function nextPrime(n) {
    let num = n + 1;
    while (true) {
        if (isPrime(num)) return num;
        num++;
    }
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// POST endpoint to calculate the sum and add the next prime number
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    const maxNum = Math.max(num1, num2);
    const prime = nextPrime(maxNum);
    const result = sum + prime;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});