import styled from 'styled-components'

export const Cadastro = styled.div`
    max-width: 350px;
    margin: 0 auto;
    padding: 60px 0;
`

export const MainCadastro = styled.div``


export const HeaderCadastro = styled.header`
    padding-bottom: 40px;
    text-align: center;
`

export const FormCadastro = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 6px;
    padding-bottom: 20px;

    input{
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors["lightGray"]};
        padding: 14px;
    }

    button{
        position: absolute;
        top: 40%;
        right: 4%;
        background-color: ${({ theme }) => theme.colors["black"]};
        border: 1px solid ${({ theme }) => theme.colors["black"]};
        color: ${({ theme }) => theme.colors["white"]};
        border-radius: 4px;
        padding: 2px;
        transition: background-color 0.3s;

        &:hover {
        background-color: ${({ theme }) => theme.colors["gray"]};
        border: 1px solid ${({ theme }) => theme.colors["gray"]};
        }
    }

    span{
        color: ${({ theme }) => theme.colors["base-error"]};
    }
`

export const FooterCadastro = styled.footer`
    display: flex;
    flex-direction: column;

    button{
        padding: 14px;
        font-weight: 700;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors["black"]};
        color: ${({ theme }) => theme.colors["white"]};
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s;

        &:hover {
        background-color: ${({ theme }) => theme.colors["gray"]};
        border: 1px solid ${({ theme }) => theme.colors["gray"]};
        }
    }

`

export const Acessar = styled.div`
    a {
        margin-left: 8px;
        color: ${({ theme }) => theme.colors["black"]};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
        color: ${({ theme }) => theme.colors["lightGray"]};
    }
}
`