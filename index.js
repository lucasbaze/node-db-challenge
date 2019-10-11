const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//
//Custom Routes
const projectRoutes = require('./routes/projectRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const taskRoutes = require('./routes/taskRoutes');

//
//Initialize server
const server = express();

//
//setup middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));

//
//Inital get for testing
server.get('/', (req, res) => {
    res.send('Server is running!');
});

//
//Route Handlers
server.use('/api/projects', projectRoutes);
server.use('/api/resources', resourceRoutes);
server.use('/api/tasks', taskRoutes);

//
//Error handler
server.use((err, req, res, next) => {
    res.status(400).json(err);
});

//
//Initialize PORT
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
