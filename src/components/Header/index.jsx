import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import avatarPlaceholder from '../../assets/user-image.png'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()
  function handleSignOut() {
    navigation('/')
    signOut()
  }
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Profile to='/profile'>
        <img src={avatarUrl} alt='photo do usuário' />
        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
