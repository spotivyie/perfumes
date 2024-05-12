import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const Row = styled.div`
    display: flex;
    column-gap: 14px;
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const InputGroup = styled.div`
    flex: auto;

    label {
        font-size: 16px;
        margin: 18px 0;
        display: block;
        font-weight: 400;
    }

    select {
        width: 24%;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.colors["base-button"]};
        background: ${({ theme }) => theme.colors["base-input"]};
    }

    @media (max-width: ${breakpoints.phone}) {
        select {
            width: 60%;
        }
    }
`