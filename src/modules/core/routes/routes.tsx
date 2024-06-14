import { BrowserRouter, Route, Routes } from "react-router-dom"
import AgentRoutes from "../../agents/routes/AgentRoutes"
import AuthRoutes from "../../auth/routes/AuthRoutes";
import NavbarProvider from "../providers/NavbarProvider";

const Router = () => {
    return(
        <NavbarProvider>
            <BrowserRouter>
                <AuthRoutes/>
                <AgentRoutes/>
            </BrowserRouter>
        </NavbarProvider>
    )
}

export default Router;