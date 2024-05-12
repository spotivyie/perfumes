import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"


export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors["white"]};
    color: ${({ theme }) => theme.colors["black"]};
    border: 1px solid ${({ theme }) => theme.colors["base-hover"]};
    border-radius: 6px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    margin: 4px;

    img {
        width: 100%;
        height: 350px;
        display: block;
        object-fit: cover;
        margin-top: 10px;
    }

    @media (max-width: ${breakpoints.phone}){
        img{
            padding: 0px;
        }
    }
`

export const Name = styled.div`
    font-size: 14px;
    margin: 20px 10px;
    text-align: center;
    height: 20px;

    @media (max-width: ${breakpoints.tablet}){
        padding: 0px 39px;
    }

    @media (max-width: ${breakpoints.phone}){
        padding: 40px 0px;
    }
`

export const AddCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

export const Descricao = styled.p`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;

    @media (max-width: ${breakpoints.phone}) {
        margin-top: 30px;
    }
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors["black"]};
    border: 1px solid ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["white"]};
    font-weight: bold;
    padding: 8px;
    margin-top: 20px;
    border-radius: 6px;
    font-size: 8px;
    cursor: pointer;

    h1 {
        font-size: 14px;
    }
`