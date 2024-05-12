import { CreditCard, FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react"
import * as S from './styles'

export function Footer () {
    return (
        <S.Footer>
            <S.FooterRedes>
                <S.AtendimentoRede>
                <S.Rede>
                    <div>
                        <Phone size={32} />
                        <h1>Atendimento</h1>
                    </div>
                    <p>Segunda a sexta: 8h às 18h30</p>
                    <p>atendimento@atendimento.com</p>
                    <p>(99) 99999-9999</p>
                    <p>Localizado no estado, cidade,<br/>bairro, numero</p>
                    <S.Image>
                        <div>
                            <InstagramLogo size={32} />
                        </div>
                        <div>
                            <FacebookLogo size={32} />
                        </div>
                    </S.Image>
                </S.Rede>
                <S.Rede>
                    <div>
                        <CreditCard size={32} />
                        <h1>Formas de pagamento</h1>
                    </div>
                        <p>cartão de crédito</p>
                        <p>cartão de débito</p>
                        <p>boleto</p>
                        <p>pix</p>
                </S.Rede>
                    <div>
                    </div>
                </S.AtendimentoRede>
            </S.FooterRedes>
                <span></span>
                <S.Vindo>
                    <p>Copyright© 2024 LOGO - Todos os direitos reservados</p>
                </S.Vindo>
        </S.Footer>
    )
}
