import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { ButtonText } from '../../components/ButtonText'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLinks, setNewLinks] = useState('')

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState('')

  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }
  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLinks])
    setNewLinks('')
  }
  function handleDeleteLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }
  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags])
    setNewTags('')
  }
  function handleDeleteTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }
  async function handleNewNote() {
    if (!title) {
      return alert('O campo título não pode ficar em branco')
    }
    if (!description) {
      return alert('O campo descrição não pode ficar em branco')
    }
    if (newTags) {
      return alert(
        'Tag digitada e não adicionada clique no icone + para efetivar a adição da nova tag ou limpe o campo tag',
      )
    }
    if (newLinks) {
      return alert(
        'Link digitado e não adicionado clique no icone + para efetivar a adição do novo link ou limpe o campo link',
      )
    }
    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })
    alert('Nova nota criada com sucesso.')
    navigate(-1)
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title='Voltar' onClick={handleBack} />
          </header>
          <Input
            placeholder='Título'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          ></Input>
          <Textarea
            placeholder='Observações'
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          ></Textarea>

          <Section title='Minnas notas'>
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleDeleteLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder='Novo link'
              value={newLinks}
              onChange={(e) => setNewLinks(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title='Marcadores'>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder='Nova tag'
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title='Salvar' onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
