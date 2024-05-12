import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const Footer = styled.footer`
    display: block;
    margin: 0.5rem;

    span {
        border: 1px solid ${({ theme }) => theme.colors["lightGray"]};
        display: block;
        margin-bottom: 0.5rem;
    }

    p{
        padding: 10px;
    }
`
export const FooterRedes = styled.div`
    max-width: 1224px;
    margin: 0 auto;
`

export const AtendimentoRede = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5em;
    padding-top: 2.5em;

    @media (max-width: ${breakpoints.phone}) {
        display: block;
        padding-left: 10px;
    }
`

export const Vindo = styled.div`
    text-align: center;
`

export const Rede = styled.div`
    div{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
    }

    h1{
        font-size: 20px;
        padding-left: 10px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        div{
            padding: 0 10px;
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        div{
            padding-top: 40px;
            padding-bottom: 10px;
        }
    }
`

export const Image = styled.p`
    display: flex;

    div{
        cursor: pointer;
        padding-right: 6px;
    }

    @media (max-width: ${breakpoints.phone}) {
        justify-content: start;
    }
`
