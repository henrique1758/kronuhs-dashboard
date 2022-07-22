import { useState } from 'react'

import { Button } from '../components/Button'
import { DropImage } from '../components/DropImage'
import { FileSelected } from '../components/FileSelected'
import { Input } from '../components/Input'
import { DefaultLayout } from '../layouts/DefaultLayout'

import { api } from '../services/api'

import { AddUserContainer, FormContainer, InputGroup } from '../styles/pages/addUser'
import { withSSRAuth } from '../utils/withSSRAuth'

interface Category {
  id: string
  name: string
}

export default function AddUser() {
  const [photo, setPhoto] = useState<File | null>(null)
  const [allRoles, setAllRoles] = useState<Category[]>([
    {
      id: 'ksjdsdksjkdsd',
      name: 'editor',
    },
  ])
  const [selectedRole, setSelectedRole] = useState('')


  function handleChangeImage(photo: File) {
    setPhoto(photo)
  }

  function handleDeleteImageSelected() {
    setPhoto(null)
  }

  return (
    <DefaultLayout>
      <AddUserContainer>
        <h1>
          Adicionar <span>usuário</span>
        </h1>

        <FormContainer>
          <InputGroup>
            <label htmlFor="firstName">Primeiro Nome</label>

            <Input id="firstName" placeholder="Jhon.." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="lastName">Último Nome</label>

            <Input id="lastName" placeholder="doe.." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">E-mail</label>

            <Input id="email" placeholder="jhondoe@gmail.com" />
          </InputGroup>

          <InputGroup>
            <label htmlFor="photo">Foto</label>

            <DropImage onChangeImage={handleChangeImage} />

            {photo && (
              <FileSelected
                name={photo.name}
                onDelete={handleDeleteImageSelected}
              />
            )}
          </InputGroup>

          <InputGroup>
            <label htmlFor="role">Cargo</label>

            <select onChange={(e) => setSelectedRole(e.target.value)}>
              {allRoles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </InputGroup>

          <Button type="submit" title="Registrar usuário" />
        </FormContainer>
      </AddUserContainer>
    </DefaultLayout>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})