import { PerfumeCard, Menu } from "../PerfumeCard"
import { DrinkList } from "./styles"

export type Props = {
    menu: Menu[]
}

export const Product = ({ menu }: Props) => {

    return (
        <DrinkList>
            {menu.map((perfumes) => (
                <PerfumeCard 
                    key={perfumes.id} 
                    perfume={perfumes} 
                />
            ))}
        </DrinkList>
    )
}
