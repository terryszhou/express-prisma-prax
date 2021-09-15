const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    res.json({message: 'alive'});
});

app.get('/quotes', async (req, res) => {
    const currentPage = req.query.page || 1;
    const listPerPage = 5;
    const offset = (currentPage - 1) * listPerPage;
    const allQuotes = await prisma.quote.findMany({
        include: { author: true },
        skip: offset,
        take: listPerPage,
    });
    res.json({
        data: allQuotes,
        meta: { page: currentPage }
    });
});

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
});