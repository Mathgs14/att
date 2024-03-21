// Importa o mongoose para interagir com o MongoDB
const mongoose = require('mongoose');

// Define o esquema para o modelo User
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nome do usuário, obrigatório
    email: { type: String, required: true, unique: true }, // Email do usuário, obrigatório e único
    cpf: { type: String, required: true, unique: true }, // CPF do usuário, obrigatório e único
    password: { type: String, required: true }, // Senha do usuário, obrigatória
}, { collection: 'user-data' }); // Define o nome da coleção no banco de dados como 'user-data'

// Cria o modelo UserModel a partir do esquema UserSchema
const UserModel = mongoose.model('UserModel', UserSchema);

// Exporta o modelo UserModel para ser usado em outros arquivos
module.exports = UserModel;