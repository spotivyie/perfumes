import * as S from './styles'
import { ShoppingCart, UserCircle } from "@phosphor-icons/react"
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Menu } from '../../pages/Home/components/PerfumeCard'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
    const { cartQuantity } = useCart()
    // const [perfumes, setPerfumes] = useState<Menu[]>([])
    const [isCategoryOpen, setCategoryOpen] = useState(false)

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    // useEffect(() => {
    //     fetch('https://api-phi-one-85.vercel.app/whisky')
    //     .then((res) => res.json())
    //     .then((res) => setPerfumes(res))
    // }, [])

    return (
        <S.HeaderContainer>
            <div className="container">
                <div>
                <S.Category onClick={() => setCategoryOpen(!isCategoryOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </S.Category>

                <S.NavMobile className={isCategoryOpen ? 'is-open' : ''}>
                    <S.Todos className="container">
                        <S.Perfumes>
                            <NavLink to="/todos">
                                <p>Todos os perfumes</p>
                            </NavLink>
                        </S.Perfumes>
                        <S.Perfumes>
                            <NavLink to="/femininos">
                                <p>Perfumes femininos</p>
                            </NavLink>
                        </S.Perfumes>
                        <S.Perfumes>
                            <NavLink to="/masculinos">
                                <p>Perfumes masculinos</p>
                            </NavLink>
                        </S.Perfumes>
                    </S.Todos>
                </S.NavMobile>
                </div>

                <div>
                    <NavLink to="/">
                        <h1>LOGO</h1>
                    </NavLink>
                </div>

                <S.LoginCart>
                    <S.Login onClick={goToLogin}>
                        <UserCircle size={28}  />
                    </S.Login>

                    <NavLink to="/completeOrder">
                        <S.HeaderButton>
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={24} />
                        </S.HeaderButton>
                    </NavLink>
                </S.LoginCart>
            </div>
        </S.HeaderContainer>
    )
}
