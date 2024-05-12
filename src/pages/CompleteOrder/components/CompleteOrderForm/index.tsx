import { TitleText } from "../../../../components/Typography"
import { SectionTitle } from "../SectionTitle"
import * as S from './styles'
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react"
import { useTheme } from "styled-components"
import { AddressForm } from "./AdressForm"
import { PaymentMethodOptions } from "./PaymentMethodOptions"
import { useState } from "react"
import { Payment } from "../Payment"

export function CompleteOrderForm() {
    const { colors } = useTheme()
    const [payWithCard, setPayWithCard] = useState(false)

    return (
        <S.CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>
            <S.FormSectionContainer>
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine color={colors["green"]} size={22} />}
                />

                <AddressForm />
            </S.FormSectionContainer>
            <S.FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={colors["green"]} size={22} />}
                />
                
                <div onClick={() => setPayWithCard(true)}>
                    <PaymentMethodOptions />
                </div>
                {payWithCard ? (
                    <Payment />
                ): (
                    <span></span>
                )}
            </S.FormSectionContainer>
        </S.CompleteOrderFormContainer>
    )
}
