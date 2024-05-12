import * as S from './styles'
import { useFormContext } from "react-hook-form"
import { maskCPF, maskCardNumber, maskCVV, maskExpire } from '../../../../utils/mask/insputMask'
import { useCart } from '../../../../hooks/useCart'
import { useEffect, useState } from 'react'
import { formatMoney } from '../../../../utils/formatMoney'
import { Input } from "../../../../components/Input"

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

type Installment = {
    quantity: number
    amount: string
    formattedAmount: string
}

export function Payment() {
    const { register, formState } = useFormContext()
    const { errors } = formState as unknown as ErrorsType
    const [ installments, setInstallments ] = useState<Installment[]>([])
    
    const { cartItemsTotal, cartQuantity } = useCart()
    const PRICE = 13.5

    const cartTotal = PRICE + cartItemsTotal
    
    useEffect(() => {
        const calculateInstallments = () => {
            const installmentsArray: Installment[] = []
        
            for (let i = 1; i <= 6; i++) {
                installmentsArray.push({
                quantity: i,
                amount: formatMoney(cartTotal / i),
                formattedAmount: formatMoney(cartTotal / i),
                })
            }
        
            return installmentsArray
            }
        
            if (cartTotal > 0) {
                setInstallments(calculateInstallments())
            }
        }, [cartTotal])
    

    return (
        <>
            <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Nome do titular do cartão"
                        type="text"
                        className="cardOwner"
                        {...register("cardOwner")}
                        error={errors.cardOwner?.message}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="CPF do titular do cartão"
                        type="tel"
                        className="cpfCardOwner"
                        {...register("cpfCardOwner")}
                        error={errors.cpfCardOwner?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCPF(value)
                        }}
                    />
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Nome no cartão"
                        type="text"
                        className="cardDisplayName"
                        {...register("cardDisplayName")}
                        error={errors.cardDisplayName?.message}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="Número do cartão"
                        type="tel"
                        className="cardNumber"
                        {...register("cardNumber")}
                        error={errors.cardNumber?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCardNumber(value)
                        }}
                    />
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Mês de expiração"
                        type="text"
                        className="expiresMonth"
                        {...register("expiresMonth")}
                        error={errors.expiresMonth?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskExpire(value)
                        }}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="Ano de expiração"
                        type="text"
                        className="expiresYear"
                        {...register("expiresYear")}
                        error={errors.expiresYear?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskExpire(value)
                        }}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="CVV"
                        type="text"
                        className="cardCode"
                        {...register("cardCode")}
                        error={errors.cardCode?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCVV(value)
                        }}
                    />
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor="installments">Parcelamento</label>
                    <select name="installments" id="installments">
                        {installments.map((installment) => (
                            <option  
                                value={installment.quantity}
                                key={installment.quantity}>
                                    {installment.quantity}x de{' '}
                                    {installment.formattedAmount}
                            </option>
                        ))}
                    </select>
                </S.InputGroup>
            </S.Row>
        </>
    )
}
