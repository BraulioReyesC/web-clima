require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/location', async (req, res) => {
    const city_name =req.query.city_name;
    const API_KEY= process.env.API_KEY
    try {   
        const response = await axios.get( `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${API_KEY}`, {});
        res.json(response.data);
    } catch (error) {
        console.error('Error haciendo el llamado a la API /api/location:', error);
        res.status(500).send('Error en el servidor');
    }
});

app.get('/api/weather', async (req, res) => {
    const lat =req.query.lat;
    const lon =req.query.lon;
    const units =req.query.units;
    const API_KEY= process.env.API_KEY
    try {   
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&lang=sp`, {});
        res.json(response.data);
    } catch (error) {
        console.error('Error haciendo el llamado a la API /api/weather:', error);
        res.status(500).send('Error en el servidor');
    }
});

app.get('/api/forecast', async (req, res) => {
    const lat =req.query.lat;
    const lon =req.query.lon;
    const units =req.query.units;
    const API_KEY= process.env.API_KEY
    try {   
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&lang=sp`, {});
        res.json(response.data);
    } catch (error) {
        console.error('Error haciendo el llamado a la API /api/forecast:', error);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
