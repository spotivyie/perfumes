import styled from "styled-components"
import { breakpoints } from "../../../../../styles/global"

export const OurPerfumesContainer = styled.section`
    padding: 60px 100px 80px 100px;
    background-color: ${({ theme }) => theme.colors["white"]};
    
    h3{
        line-height: 130%;
        color: ${({ theme }) => theme.colors["black"]};
        font-size: 30px;
        text-align: center;
    }

    p{
        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color: ${({ theme }) => theme.colors["base-label"]};
    }

    @media (max-width: ${breakpoints.tablet}){
        padding: 20px 60px 80px 60px;
    }

    @media (max-width: ${breakpoints.phone}){
        padding: 40px 0px;
    }
`

export const PerfumesList = styled.div`
`

export const Vendidos = styled.div`
    padding-top: 2rem;
    max-width: 1224px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}){
        padding-top: 4rem;
    }

    @media (max-width: ${breakpoints.phone}){
        padding: 40px 12px;
    }
`