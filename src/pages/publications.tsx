import Link from 'next/link'
import { NotePencil, PencilSimpleLine, Trash } from 'phosphor-react'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Heading, TableContainer, PublicationsContainer, Badge } from '../styles/pages/publications'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Publications() {
  const isDraft = false

  return (
    <DefaultLayout>
      <PublicationsContainer>
        <h1>Publicações</h1>

        <Heading>
          <h3>
            Todas as publicações <strong>(09)</strong>
          </h3>

          <Link href="/create-publication">
            <a className="addUserButton">
                <NotePencil size={20} />
                Criar publicação
            </a>
          </Link>
        </Heading>

        <TableContainer>
          <thead>
            <tr>
              <th>Estágio</th>
              <th>Título</th>
              <th>Criado por</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
              <th>Url</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Badge isDraft={isDraft}>
                  {isDraft ? 'Rascunho' : 'Publicado'}
                </Badge>
              </td>

              <td>
                <span title="Redux: principles" className="title">
                  Redux: principles
                </span>
              </td>

              <td className="authorBox">
                <img src="/leo.png" alt="léo" />

                <span title="Henrique Monteiro" className="authorName">
                  Henrique Monteiro
                </span>
              </td>

              <td>30/09/2021</td>

              <td>07/12/2021</td>

              <td>
                <a
                  href="http://localhost:3000/post/redux-principles"
                  target={'_blank'}
                  rel="noreferrer"
                  title="http://localhost:3000/post/redux-principles"
                >
                  http://localhost:3000/post/redux-principles
                </a>
              </td>

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
          </tbody>
        </TableContainer>
      </PublicationsContainer>
    </DefaultLayout>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})