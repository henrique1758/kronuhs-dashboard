import Link from 'next/link'
import { PencilSimpleLine, Trash, UserPlus } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { api } from '../services/api'

import { Heading, TableContainer, UsersContainer } from '../styles/pages/users'
import { withSSRAuth } from '../utils/withSSRAuth'

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    api.get('/dashboard/users')
      .then(res => setUsers(res.data))
  }, [])

  return (
    <DefaultLayout>
      <UsersContainer>
        <h1>
          <span>Usuários</span> do painel
        </h1>

        <Heading>
          <h3>
            Todos os usuários <strong>(09)</strong>
          </h3>

          <Link href="/add-user">
            <a className="addUserButton">
                <UserPlus size={20} />
                Adicionar usuário
            </a>
          </Link>
        </Heading>

        <TableContainer>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Criado em</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users?.map(user => (
              <tr key={user.id}>
                <td>
                  <img src="/leo.png" alt="léo" />
                </td>

                <td>{user.firstName} {user.lastName}</td>

                <td>{user.email}</td>

                <td>{String(user.createdAt)}</td>

                <td>
                  <button className="buttonPencil" type="button">
                    <PencilSimpleLine size={24} />
                  </button>
                </td>

                <td>
                  <button className="buttonTrash" type="button">
                    <Trash size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </UsersContainer>
    </DefaultLayout>
  )
}


export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
}, {
  roles: [
    {
      name: 'admin'
    }
  ]
})