import styled from "styled-components"
import { breakpoints } from "../../styles/global"

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${({ theme }) => theme.colors["black"]};
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        section {
        display: block;

        div{
            margin-bottom: 20px;

            p{
            padding-bottom: 20px;
            }
        }
        }
    }
`

export const OrderDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px;
    position: relative;
    background: ${({ theme }) => theme.colors["base-background"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        min-width: 0rem;
    }
`