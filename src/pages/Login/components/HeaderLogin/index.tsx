import { Link } from 'react-router-dom'

import * as S from './styles'

const HeaderLogin = () => {
    return (
        <S.HeaderBar>
            <S.HeaderRow>
                <Link to="/" className="link">
                    <h1>LOGO</h1>
                </Link>
            </S.HeaderRow>
        </S.HeaderBar>
    )
}

export default HeaderLogin
