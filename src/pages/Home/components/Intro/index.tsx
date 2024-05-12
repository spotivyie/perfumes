import * as S from './styles'
import introImg from "../../../../assets/dior.jpg"

export function Intro() {

    return (
        <S.IntroContainer>
            <S.IntroContent className="container">
                <div>
                    <section>
                        <S.IntroTitle size="xl">
                            Encontre o perfume perfeito para qualquer hora do dia
                        </S.IntroTitle>
                    </section>
                </div>
    
                <img src={introImg} />
            </S.IntroContent>
        </S.IntroContainer>
    )
}
