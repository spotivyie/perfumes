import { useEffect, useState } from "react"
import { PerfumesList, OurPerfumesContainer, Vendidos } from "./styles"
import { Menu } from "../../PerfumeCard"
import { Product } from "../../Product"

export function OurPerfumes() {
    const [perfumes, setPerfumes] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-perf.vercel.app/perfumes')
        .then((res) => res.json())
        .then((res) => setPerfumes(res))
    }, [])

    return (
        <OurPerfumesContainer>
            <Vendidos>
                <h3>
                    A mistura perfeita
                </h3>
                <p>compre nossa ampla seleção de aromas</p>

                <PerfumesList>
                    <Product menu={perfumes} />
                </PerfumesList>
            </Vendidos>
        </OurPerfumesContainer>
    )
}


