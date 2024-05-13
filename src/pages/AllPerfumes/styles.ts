import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const Perfumes = styled.div`
    max-width: 1224px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 100px;

    @media (max-width: ${breakpoints.tablet}){
        padding: 40px 20px 100px 20px;
    }

    @media (max-width: ${breakpoints.phone}){
        padding: 40px 12px;
    }
`
