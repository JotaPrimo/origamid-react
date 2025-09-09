import React, { useEffect, useState } from 'react';
import { buscarTodos } from '../services/user-random';

interface User {
  email: string;
  nome: string;
  login: Login;
}

interface Login {
  uuid: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    const listagemUsers = await buscarTodos();
    setUsers(listagemUsers);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nome</td>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.login.uuid}>
            <td>{u.email}</td>
            <td>{u.nome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
