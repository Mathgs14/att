import React, { useEffect, useState } from 'react';

const Home = () => {
    // Estado para armazenar a lista de produtos e o estado de carregamento
    const [products, setProducts] = useState([]); // Lista de produtos
    const [loading, setLoading] = useState(true); // Estado de carregamento

    // Efeito para carregar os produtos quando o componente for montado
    useEffect(() => {
        // Função para buscar a lista de produtos do servidor
        const fetchProducts = async () => {
            try {
                // Realiza uma requisição para a rota que retorna a lista de produtos
                const response = await fetch('http://localhost:3000/api/listProduct');
                // Converte a resposta para JSON
                const data = await response.json();
                // Define os produtos no estado e indica que a carga foi concluída
                setProducts(data);
                setLoading(false);
                // Chama a função para tratar o resultado da busca
                handleSearchResult(data);
            } catch (error) {
                // Em caso de erro, chama a função para tratar o erro
                console.error('Erro ao buscar produtos:', error);
                handleSearchError(error);
            }
        };

        // Chama a função para buscar os produtos
        fetchProducts();
    }, []); // O array vazio como segundo argumento garante que o efeito só seja executado uma vez

    // Função para tratar o resultado da busca
    const handleSearchResult = (data) => {
        if (data.length === 0) {
            console.log('Nenhum produto encontrado.');
        } else {
            console.log('Produtos encontrados:', data);
        }
    };

    // Função para tratar o erro da busca
    const handleSearchError = (error) => {
        console.error('Erro na busca:', error);
    };

    // Função para renderizar a lista de produtos ou uma mensagem de aviso
    const renderProducts = () => {
        if (loading) {
            return <p>Carregando produtos...</p>;
        } else if (products.length === 0) {
            return <p>Nenhum produto disponível no momento.</p>;
        } else {
            return (
                <ul>
                    {/* Mapeia os produtos para renderizá-los */}
                    {products.map((product) => (
                        <li key={product._id}>
                            <p>Nome: {product.name}</p>
                            <p>Preço: {product.preco}</p>
                            <p>Data de Validade: {product.validade}</p>
                            <p>Categoria: {product.categoria}</p>
                            <p>Código do Produto: {product.codigoProduto}</p>
                        </li>
                    ))}
                </ul>
            );
        }
    };

    // Renderiza o componente
    return (
        <div>
            <h1>Lista de Produtos</h1>
            {renderProducts()} {/* Renderiza a lista de produtos */}
        </div>
    );
};

export default Home; // Exporta o componente Home como padrão