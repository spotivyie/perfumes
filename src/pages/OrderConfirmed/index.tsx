import { RegularText, TitleText } from "../../components/Typography"
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles"
import { InfoWithIcon } from "../../components/InfoWithIcon"
import { useTheme } from "styled-components"
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../CompleteOrder"
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions"
import { useEffect } from "react"
import { Header } from "../../components/Header"

interface LocationType {
    state: OrderData
}

export function OrderConfirmedPage() {
    const { colors } = useTheme()

    const { state } = useLocation() as unknown as LocationType

    const navigate = useNavigate()

    useEffect(() => {
        if (!state) {
        navigate("/")
        }
    }, [])

    if (!state) return <></>

    return (
        <div>
        <Header />
            <OrderConfirmedContainer className="container">
            <OrderDetailsContainer>
            <div>
                <TitleText size="l">Pedido confirmado !</TitleText>
                <RegularText size="l" color="subtitle">
                Agora é só aguardar que logo a bebida chegará até você.
                </RegularText>
            </div>

            <section>
                <div>
                <InfoWithIcon
                    icon={<MapPin weight="fill" />}
                    iconBg={colors["peach"]}
                    text={
                    <RegularText>
                        Entrega em <strong>{state.street}</strong>, {state.number}
                        <br />
                        {state.district} - {state.city}, {state.uf}
                    </RegularText>
                    }
                />
                </div>

                <div>
                <InfoWithIcon
                    icon={<Clock weight="fill" />}
                    iconBg={colors["black"]}
                    text={
                    <RegularText>
                        Previsão de entrega
                        <br />
                        até <strong>13 dias</strong>
                    </RegularText>
                    }
                />
                </div>

                <div>
                <InfoWithIcon
                    icon={<CurrencyDollar weight="fill" />}
                    iconBg={colors["green"]}
                    text={
                    <RegularText>
                        Pagamento realizado
                        <br />
                        <strong>{paymentMethods[state.paymentMethod].label}</strong>
                    </RegularText>
                    }
                />
                </div>
            </section>
                <div>
                <p>
                    Se você optou pelo pagamento com cartão de crédito, a liberação do
                    código de ativação ocorrerá após a aprovação da transação pela
                    operadora do cartão. Você receberá o código no e-mail cadastrado
                    em nossa loja.
                </p>
                <br/>
                <p>
                    Pedimos que verifique sua caixa de entrada e a pasta de spam para
                    garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
                    necessite de mais informações, por favor, entre em contato conosco
                    através dos nossos canais de atendimento ao cliente
                </p>
                <br/>
                <p>
                    Agradecemos por escolher a LOGO e esperamos que desfrute da sua 
                    bebida!
                </p>
                </div>
            </OrderDetailsContainer>
        </OrderConfirmedContainer>
        </div>
    )
}
