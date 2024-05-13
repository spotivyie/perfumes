import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "./DefaultLayout"
import { HomePage } from "./pages/Home"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"
import Login from "./pages/Login"
import Cadastrar from "./pages/Login/components/Cadastrar"
import { Perfumes } from "./pages/AllPerfumes/Perfumes"
import { PerfumesFeminino } from "./pages/AllPerfumes/PerfumesFem"
import { PerfumesMasculinos } from "./pages/AllPerfumes/PerfumesMasc"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />

                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/femininos" element={<PerfumesFeminino />} />
                <Route path="/masculinos" element={<PerfumesMasculinos />} />
            </Route>
        </Routes>
    )
}
