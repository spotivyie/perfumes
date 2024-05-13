import { useEffect, useState } from "react"
import { Product } from "../../Home/components/Product"
import { Header } from "../../../components/Header"
import { Menu } from "../../Home/components/PerfumeCard"

import * as S from '../styles'

export function Perfumes() {
    const [perfumes, setPerfumes] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-perf.vercel.app/perfumes')
        .then((res) => res.json())
        .then((res) => setPerfumes(res))
    }, [])

    return (
            <>
                <Header />

                <S.Perfumes>
                    <Product menu={perfumes} />
                </S.Perfumes>
            </>
    )
}


