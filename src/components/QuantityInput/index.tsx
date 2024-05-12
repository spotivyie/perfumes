import * as S from './styles'
import { Minus, Plus } from "@phosphor-icons/react"

interface QuantityInputProps {
    size?: "medium" | "small"
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export function QuantityInput({
    onIncrease,
    onDecrease,
    quantity,
    size = "medium",
    }: QuantityInputProps) {
    return (
        <S.QuantityInputContainer size={size}>
        <S.IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
            <Minus size={24} weight="fill" />
        </S.IconWrapper>
            <input type="number" readOnly value={quantity} />
        <S.IconWrapper onClick={onIncrease}>
            <Plus size={24} weight="fill" />
        </S.IconWrapper>
        </S.QuantityInputContainer>
    )
}
