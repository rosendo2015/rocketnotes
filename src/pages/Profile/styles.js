import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > button {
      background: none;
      border: 0;
    }
  }
`
export const Form = styled.form`
  max-width: 34rem;
  margin: -8.4rem auto;
  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
  > label {
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0.7rem;
    bottom: 0.7rem;
    cursor: pointer;
    input {
      display: none;
    }
    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
  label:hover {
    filter: brightness(0.9);
  }
`
