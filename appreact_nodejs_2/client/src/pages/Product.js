import { useState } from 'react';
import './product.css'; // Importa o arquivo CSS para estilos específicos deste componente

function App() {
    // Define estados para armazenar os dados do produto
    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');
    const [validade, setValidade] = useState('');
    const [categoria, setCategoria] = useState('');

    // Função assíncrona para lidar com a criação de um produto
    async function createProduct(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

        // Envia uma requisição para o servidor para criar um novo produto
        const response = await fetch('http://localhost:3000/api/createProduct', {
            method: 'POST', // Método POST
            headers: {
                'Content-Type': 'application/json', // Tipo de conteúdo JSON
            },
            body: JSON.stringify({
                name, // Nome do produto
                preco, // Preço do produto
                validade, // Data de validade do produto
                categoria, // Categoria do produto
            })
        });

        // Analisa a resposta JSON da requisição
        const data = await response.json();

        console.log(data); // Log dos dados da resposta
    }

    // Renderiza o componente de criação de produto
    return (
        <div className="container mt-5"> {/* Contêiner principal com margem superior */}
            <h1 className="text-center">Create Product</h1> {/* Título do formulário */}
            <form onSubmit={createProduct}> {/* Formulário de criação de produto */}
                {/* Campo de entrada para o nome do produto */}
                <div className="form-group">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Nome'
                    />
                </div>
                {/* Campo de entrada para o preço do produto */}
                <div className="form-group">
                    <input
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        type='number'
                        className="form-control"
                        placeholder='Preço'
                    />
                </div>
                {/* Campo de entrada para a data de validade do produto */}
                <div className="form-group">
                    <input
                        value={validade}
                        onChange={(e) => setValidade(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Data de Validade'
                    />
                </div>
                {/* Campo de entrada para a categoria do produto */}
                <div className="form-group">
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Categoria do Produto'
                    />
                </div>
                {/* Botão de envio do formulário */}
                <button type="submit" className="btn btn-primary btn-block">Criar Produto</button>
            </form>
        </div>
    );
}

export default App; // Exporta o componente App como padrão
