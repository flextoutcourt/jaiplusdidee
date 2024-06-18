import { BrowserRouter } from "react-router-dom";
import AgentRoutes from "../../agents/routes/AgentRoutes";
import AuthRoutes from "../../auth/routes/AuthRoutes";
import PusherProvider from "../../pusher/providers/PusherProvider";
import NavbarProvider from "../providers/NavbarProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CivilianRoutes from "../../Civilian/routes/CivilianRoutes";

const Router = () => {
    return(
        <NavbarProvider>
            <ToastContainer />
            <PusherProvider>
                <BrowserRouter>
                    <AuthRoutes/>
                    <AgentRoutes/>
                    <CivilianRoutes />
                </BrowserRouter>
            </PusherProvider>
        </NavbarProvider>
    )
}

export default Router;