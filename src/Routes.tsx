import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "./DefaultLayout"
import { HomePage } from "./pages/Home"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"
import Login from "./pages/Login"
import Cadastrar from "./pages/Login/components/Cadastrar"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />

                {/* <Route path="/todos" element={< />} />
                <Route path="/femininos" element={< />} />
                <Route path="/masculinos" element={< />} /> */}
            </Route>
        </Routes>
    )
}
