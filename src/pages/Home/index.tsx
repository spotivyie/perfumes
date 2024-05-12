import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import Vendidos from "../../components/Vendidos"
import { Intro } from "./components/Intro"
import { OurPerfumes } from "./components/Perfumes/OurPerfumes"
import { PerfumesFem } from "./components/Perfumes/PerfumesFem"
import { PerfumesMasc } from "./components/Perfumes/PerfumesMasc"

export function HomePage() {
    return (
        <div>
            <Header />
            <Intro />

            <OurPerfumes />
            <Vendidos />
            <PerfumesFem />
            <PerfumesMasc />

            <Footer />
        </div>
    )
}