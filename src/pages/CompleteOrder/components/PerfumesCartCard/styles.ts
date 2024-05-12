import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const PerfumesCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        }
    }

    > p {
        align-self: flex-start;
        font-weight: 700;
        padding-left: 10px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        >p {
        text-align: end;
        }
    }

    @media (max-width: ${breakpoints.phone}) {
        display: block;
        align-items: center;
        text-align: center;

        > div {
        display: block;
        align-items: center;
        gap: 1.25rem;
    
        img {
            width: 4rem;
            height: 4rem;
            margin-bottom: 20px;
        }
        }

        >p {
        text-align: center;
        padding-top: 20px;
        }
    }
`

export const ActionsContainer = styled.div`
    margin-top: 0.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > div {
        max-width: 4.5rem;
        height: 100%;
    }

    @media (max-width: ${breakpoints.phone}) {
        justify-content: center;
        margin-top: 10px;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    height: 100%;
    border: none;
    background: ${({ theme }) => theme.colors["base-button"]};
    padding: 0 0.5rem;
    border-radius: 6px;
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme.colors["black"]};
    }

    &:hover {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }
`
