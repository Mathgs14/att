// Importa o mongoose para interagir com o MongoDB
const mongoose = require('mongoose');
// Importa a função uuidv4 de uuid para gerar IDs únicos
const { v4: uuidv4 } = require('uuid');

// Define o esquema para o modelo Product
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nome do produto, obrigatório
    preco: { type: String, required: true }, // Preço do produto, obrigatório
    validade: { type: String, required: true }, // Data de validade do produto, obrigatória
    categoria: { type: String, required: true }, // Categoria do produto, obrigatória
    codigoProduto: { type: String, default: uuidv4, unique: true } // Código do produto, gerado automaticamente com uuidv4, único
},
{ collection: 'product-data' }); // Define o nome da coleção no banco de dados como 'product-data'

// Cria o modelo ProductModel a partir do esquema ProductSchema
const ProductModel = mongoose.model('ProductModel', ProductSchema);

// Exporta o modelo ProductModel para ser usado em outros arquivos
module.exports = ProductModel;