import { useState } from 'react';

function App() {
    // Define estados para armazenar o email e a senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função assíncrona para lidar com o envio do formulário de login
    async function loginUser(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Envia uma requisição para o servidor para autenticar o usuário
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST', // Método POST
            headers: {
                'Content-Type': 'application/json', // Tipo de conteúdo JSON
            },
            body: JSON.stringify({
                email, // Email do usuário
                password, // Senha do usuário
            }),
        });

        // Analisa a resposta JSON da requisição
        const data = await response.json();

        // Verifica se o usuário foi autenticado com sucesso
        if (data.user) {
            alert('Login successful'); // Alerta de login bem-sucedido
            window.location.href = '/home'; // Redireciona para a página de home
        } else {
            alert('Please check your email and password'); // Alerta se o login falhar
        }
        console.log(data); // Log dos dados da resposta
    }

    // Renderiza o componente de login
    return (
        <div>
            <h1>Login</h1>
            {/* Formulário de login */}
            <form onSubmit={loginUser}>
                {/* Campo de entrada para o email */}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email'
                />
                <br />
                {/* Campo de entrada para a senha */}
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                />
                <br />
                {/* Botão de envio do formulário */}
                <input type='submit' value='Login' />
            </form>
        </div>
    );
}

export default App; // Exporta o componente App como padrão