import styled from 'styled-components'

export const HeaderBar = styled.header`
    background-color: ${({ theme }) => theme.colors["white"]};
    padding: 50px;
    text-align: center;

    h1 {
        color: ${({ theme }) => theme.colors["black"]};
    }
`

export const HeaderRow = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
`
