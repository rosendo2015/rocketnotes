import { Container, Brand, Menu, Content, Search, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelecteds] = useState([])

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagsSelecteds([])
    }
    const alreadySelected = tagsSelected.includes(tagName)
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelecteds(filteredTags)
    } else {
      setTagsSelecteds((prevState) => [...prevState, tagName])
    }
  }

  function handleDetail(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`,
      )
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText
            title='Todos'
            onClick={() => handleTagSelected('all')}
            $isactive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>
      <Search>
        <Input
          placeholder='Pesquisar pelo título'
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Section title='Minhas Notas'>
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetail(note.id)}
            />
          ))}
        </Section>
      </Content>
      <NewNote to='/new'>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
