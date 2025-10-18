const express = require('express');
const axios = require('axios');
const app = express();

app.get('/me', async (req, res) => {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        const catFact = response.data.fact;
        
        res.json({
            status: "success", 
            user: {
                email: "aliyuIbrahim@example.com", 
                name: "Aliyu Ibrahim", 
                stack: "Node.js/Express"
            }, 
            fact: catFact,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.json({
            status: "success", 
            user: {
                email: "aliyuIbrahim@example.com", 
                name: "Aliyu Ibrahim", 
                stack: "Node.js/Express"
            }, 
            fact: "The cat fact api fails!!!!",
            timestamp: new Date().toISOString()
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});