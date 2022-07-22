import { Editor } from '@tinymce/tinymce-react'
import { FormEvent, useRef, useState } from 'react'

import { Button } from '../components/Button'
import { DropImage } from '../components/DropImage'
import { FileSelected } from '../components/FileSelected'
import { Input } from '../components/Input'
import { DefaultLayout } from '../layouts/DefaultLayout'

import { CreatePublicationContainer, FormContainer, InputGroup } from '../styles/pages/createPublication'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function CreatePublication() {
  const [banner, setBanner] = useState<File | null>(null)
  const editorRef = useRef<any>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log(editorRef.current?.())
  }

  function handleChangeImage(image: File) {
    setBanner(image)
  }

  function handleDeleteImageSelected() {
    setBanner(null)
  }

  return (
    <DefaultLayout>
      <CreatePublicationContainer>
        <h1>
          Criar <span>publicação</span>
        </h1>

        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="title">
              Título<span>*</span>
            </label>

            <Input id="title" placeholder="Iniciando no javascript com.." />
          </InputGroup>

          <InputGroup>
            <label htmlFor="subtitle">Subtítulo</label>

            <Input id="subtitle" placeholder="como funciona o ES6.." />
          </InputGroup>

          <InputGroup>
            <label>
              Banner<span>*</span>
            </label>

            <DropImage onChangeImage={handleChangeImage} />

            {banner && (
              <FileSelected
                name={banner.name}
                onDelete={handleDeleteImageSelected}
              />
            )}
          </InputGroup>

          <InputGroup>
            <label>
              Conteúdo<span>*</span>
            </label>

            <Editor
              apiKey="qhq3eshbwm8qjodb61oo1f5gp3ynzh1flldd1q18pvb0dvp6"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'print',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'paste',
                  'code',
                  'help',
                  'wordcount',
                  'list',
                ],
                toolbar:
                  'undo redo | formatselect |' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                link_context_toolbar: true,
              }}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="role">
              Categoria<span>*</span>
            </label>

            <select>
              <option value="skdjskduiwue8373847">React js</option>
            </select>
          </InputGroup>

          <Button type="submit" title="Registrar usuário" />
        </FormContainer>
      </CreatePublicationContainer>
    </DefaultLayout>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})