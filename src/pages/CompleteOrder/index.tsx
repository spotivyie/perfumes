import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { SelectedPerfumes } from "./components/SelectedPerfumes"
import * as S from './styles'
import { useForm, FormProvider } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { Header } from "../../components/Header"

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    cardOwner: zod.string().min(1, "Informe o Nome do titular"),
    cpfCardOwner: zod.string().min(1, "Informe o CPF do titular"),
    cardDisplayName: zod.string().min(1, "Informe o Nome no Cartão"),
    cardNumber: zod.string().min(1, "Informe o Número do Cartão"),
    expiresMonth: zod.string().min(1, "Informe o Mês de Expiração"),
    expiresYear: zod.string().min(1, "Informe o Ano de Expiração"),
    cardCode: zod.string().min(1, "Informe o CVV"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
        return { message: "Informe o método de pagamento" }
        },
    }),
    })

    export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

    type ConfirmOrderFormData = OrderData

    export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
        paymentMethod: undefined,
        },
    })

    const { handleSubmit } = confirmOrderForm

    const navigate = useNavigate()
    const { cleanCart } = useCart()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
        state: data,
        })
        cleanCart()
    }

    return (
        <FormProvider {...confirmOrderForm}>
        <Header />
            <S.CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedPerfumes />
            </S.CompleteOrderContainer>
        </FormProvider>
    )
}
