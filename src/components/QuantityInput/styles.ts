import styled, { css } from "styled-components"
import { breakpoints } from "../../styles/global"

export interface QuantityInputContainerProps {
    size: "medium" | "small"
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
    align-items: center;
    border-radius: 6px;
    display: flex;
    justify-content: center;

    input {
        width: 20%;
        text-align: center;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors["base-title"]};

        &:focus {
        outline: none;
        }
    }

    ${({ size }) =>
        size === "medium" &&
        css`
        padding: 0.5rem;

        @media (max-width: ${breakpoints.phone}) {
            padding: 0rem;
        }
        `}

    ${({ size }) =>
        size === "small" &&
        css`
        padding: 0.3rem 0.5rem;

        @media (max-width: ${breakpoints.phone}) {
            padding: 0rem;
        }
        `}
`

export const IconWrapper = styled.button.attrs({
    type: "button",
    })`
    width: 1.375rem;
    height: 1.375rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors["black"]};
    transition: 0.4s;

    &:disabled {
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        color: ${({ theme }) => theme.colors["black"]};
    }
`