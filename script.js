document.getElementById('calculateBtn').addEventListener('click', async () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const response = await fetch('http://localhost:9999/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2 })
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Result: ${data.result}`;
});
