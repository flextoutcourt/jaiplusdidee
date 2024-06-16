import { Route, Routes } from "react-router-dom"
import AgentIndex from "../pages/List";
import AgentDetail from "../pages/Detail";

const AgentRoutes = () => {
    return(
        <Routes>
            <Route path={'/agents'}>
                <Route index element={<AgentIndex />} />
                <Route path={'create'} element={<>Create</>} />
                <Route path={':id'} element={<AgentDetail />} />
                <Route path={':id/edit'} element={<>Edit</>} />
            </Route>
        </Routes>
    )
}

export default AgentRoutes;