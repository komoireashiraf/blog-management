const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use('/api', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
