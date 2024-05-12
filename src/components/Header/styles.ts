import styled from "styled-components"
import { breakpoints } from '../../styles/global'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    h1 {
        color: ${({ theme }) => theme.colors["black"]};
    }

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: ${breakpoints.tablet}){
        padding: 0 20px;
    }
`

export const Category = styled.div`
    width: 32px;
    padding-left: 10px;

    span {
        height: 2px;
        display: block;
        width: 100%;
        background-color: ${({ theme }) => theme.colors["black"]};
        margin-bottom: 4px;
    }
`

export const LoginCart = styled.div`
    display: flex;
`

export const Login = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-right: 20px;

    p{
        margin: 6px;
    }

    @media (max-width: ${breakpoints.phone}) {
        p{
            display: none;
        }
    }
`

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    cursor: inherit;
    background: ${({ theme }) => theme.colors["white"]};
    
    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${({ theme }) => theme.colors["white"]};
        background: ${({ theme }) => theme.colors["black"]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
    }
`

export const NavMobile = styled.div`
    display: none;
    padding: 10px 0;
    margin-top: 20px;

    &.is-open {
        display: block;
        width: 100%;
        padding: 10px;
        position: absolute;
        background: ${({ theme }) => theme.colors["white"]};
        top: 1;
        left: 0;
    }
`
export const Todos = styled.div`
    margin-bottom: 20px;
`

export const Perfumes = styled.div`
    padding: 16px 0;

    p{
        color: ${({ theme }) => theme.colors["black"]};
    }
`