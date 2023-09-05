import imgBg from '../../assets/background-login.png'
import styled from 'styled-components'
export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`
export const Form = styled.form`
  padding: 8.1rem 13.6rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > h2 {
    font-size: 2.4rem;
    margin-top: 8.4rem;
    margin-bottom: 4.8rem;
  }
  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    display: block;
    margin-top: 8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
export const Background = styled.div`
  flex: 1;

  background: url(${imgBg}) no-repeat center center;
  background-size: cover;
`
