import * as S from './styles'

import { RegularText } from "../../../../components/Typography"
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"
import { QuantityInput } from "../../../../components/QuantityInput"

export interface Menu {
    id: number
    name: string
    image: string
    price: number
}

export interface PerfumesProps {
    perfume: Menu
}

export const PerfumeCard = ({ perfume }: PerfumesProps) => {
    const [quantity, setQuantity] = useState(1)

    function handleIncrease() {
        setQuantity((state) => state + 1)
    }

    function handleDecrease() {
        setQuantity((state) => state - 1)
    }

    const { addPerfumeToCart } = useCart()

    function handleAddToCart() {
        const perfumeToAdd = {
        ...perfume,
        quantity,
        }
        addPerfumeToCart(perfumeToAdd)
    }

    const formattedPrice = formatMoney(perfume.price)

    return (
        <S.Card>
            <img src={perfume.image} />
            <S.Name>{perfume.name}</S.Name>

            <S.Descricao>
                <RegularText>R$</RegularText>
                <p>{formattedPrice}</p>
            </S.Descricao>

            <S.AddCartWrapper>
                <QuantityInput
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    quantity={quantity}
                />
                <S.Button onClick={handleAddToCart}>
                    <h1>Adicionar ao carrinho</h1>
                </S.Button>
            </S.AddCartWrapper>
        </S.Card>
    )
}

export default PerfumeCard