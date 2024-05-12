import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"
import { TitleText } from "../../../../components/Typography"

export const IntroContainer = styled.section`
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;


    @media (max-width: ${breakpoints.tablet}){
        height: 28rem;
    }

    @media (max-width: ${breakpoints.phone}){
        height: 30rem;
    }
`

export const IntroContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    img{
        width: 500px;
        height: 660px;
        border-radius: 0px 100px 0px 100px;
    }

    section{
        margin-right: 100px;
        font-family: ${({ theme }) => theme.fonts.regular};
        
        p{
            font-size: 40px;
        }
    }

    @media (max-width: ${breakpoints.tablet}){
        display: block;

        img{
            display: none;
        }

        section{
            margin-right: 0px;
            text-align: center;
        }
    }

    @media (max-width: ${breakpoints.phone}){
        section{
            margin: 0 20px;
        }
    }
`

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors["black"]};
`