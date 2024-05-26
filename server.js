const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3001;

// Middleware для обработки JSON
app.use(express.json());

// Определение API с помощью Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My Express API with autogenerated swagger doc',
        },
        servers: [
            {
                url: 'http://localhost:3001',
            },
        ],
    },
    apis: ['./server.js'], // Путь к файлам с аннотациями Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Получить данные
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
app.get('/api/data', (req, res) => {
    res.json(['data1', 'data2', 'data3']);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
