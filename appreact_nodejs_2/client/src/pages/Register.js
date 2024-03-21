import { useState } from 'react';

function App() {
  // Define estados para armazenar os dados do usuário
  const [name, setName] = useState(''); // Nome do usuário
  const [email, setEmail] = useState(''); // Email do usuário
  const [cpf, setCpf] = useState(''); // CPF do usuário
  const [password, setPassword] = useState(''); // Senha do usuário

  // Função assíncrona para lidar com o registro de usuário
  async function registerUser(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário

    // Envia uma requisição para o servidor para registrar um novo usuário
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST', // Método POST
      headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo JSON
      },
      body: JSON.stringify({
        name, // Nome do usuário
        email, // Email do usuário
        cpf, // CPF do usuário
        password, // Senha do usuário
      })
    });

    // Analisa a resposta JSON da requisição
    const data = await response.json();

    console.log(data); // Log dos dados da resposta
  }

  // Renderiza o componente de registro de usuário
  return (
    <div>
      <h1>Register</h1> {/* Título do formulário */}
      <form onSubmit={registerUser}> {/* Formulário de registro de usuário */}
        {/* Campo de entrada para o nome do usuário */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
        />
        <br />
        {/* Campo de entrada para o email do usuário */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <br />
        {/* Campo de entrada para o CPF do usuário */}
        <input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          type='text'
          placeholder='CPF'
        />
        <br />
        {/* Campo de entrada para a senha do usuário */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <br />
        {/* Botão de envio do formulário */}
        <input type='submit' value='Register' />
      </form>
    </div>
  );
}

export default App; // Exporta o componente App como padrão