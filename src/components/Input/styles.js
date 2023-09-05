import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 16px;
  border-radius: 10px;
  > svg {
    margin-right: 16px;
  }
  > input {
    width: 100%;
    height: 56px;
    padding: 20px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
