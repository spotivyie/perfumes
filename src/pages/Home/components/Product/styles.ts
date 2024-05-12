import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const DrinkList = styled.div`
    margin: 0 auto;
    width: 100%;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem; 

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${breakpoints.phone}){
        grid-gap: 6px;
        row-gap: 6px;
    }
`
