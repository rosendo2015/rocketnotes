import { RxEnvelopeClosed, RxLockClosed } from 'react-icons/rx'
import { FiUser } from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  function handleSingUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos...')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possivel cadastrar.')
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          icon={FiUser}
          placeholder='Nome'
          type='text'
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          icon={RxEnvelopeClosed}
          placeholder='E-Mail'
          type='text'
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          icon={RxLockClosed}
          placeholder='Password'
          type='password'
        />
        <Button onClick={handleSingUp} title='Cadastrar' />
        <Link to='/'>Voltar para o login</Link>
      </Form>
    </Container>
  )
}
