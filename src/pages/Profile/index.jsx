/* eslint-disable no-undef */
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import avatarPlaceholder from '../../assets/user-image.png'
import { FiArrowLeft, FiLock, FiUser, FiCamera } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
export function Profile() {
  const { user, updateProfile } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt='imagem de usuário' />
          <label htmlFor='avatar'>
            <FiCamera />
            <input id='avatar' type='file' onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          icon={FiUser}
          placeholder='Nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={TfiEmail}
          placeholder='E-mail'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder='Senha atual'
          type='password'
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder='Senha nova'
          type='password'
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
