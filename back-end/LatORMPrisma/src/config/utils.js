const {PrismaClient} = require('@prisma/client');
// import prisma

const prisma = new PrismaClient();
// inisialisasi instance prisma

module.exports = prisma;
