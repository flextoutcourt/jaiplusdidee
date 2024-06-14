import { Route, Routes } from "react-router-dom"
import MainLayout from "../../core/components/layouts/Main";
import AuthenticationForm from "../components/AuthenticationForm";
import ForgottenForm from "../components/ForgottenForm";
import NewForm from "../components/NewForm";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path={'/'}>
                <Route index element={<MainLayout title='Login' noBackups><AuthenticationForm /></MainLayout>} />
                <Route path="auth">
                    <Route path="forgot" element={<MainLayout title="Forgotten Password" noBackups><ForgottenForm /></MainLayout>} />
                    <Route path="new" element={<MainLayout title='New Password' noBackups><NewForm /></MainLayout>}></Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default AuthRoutes;