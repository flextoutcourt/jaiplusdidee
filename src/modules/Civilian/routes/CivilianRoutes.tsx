import { Route, Routes } from "react-router-dom"
import CivilianIndex from "../pages/List";
import CivilianDetail from "../pages/Detail";
import CivilianCreate from "../pages/Create";
import CivilianEdit from "../pages/Edit";

const CivilianRoutes = () => {
    return(
        <Routes>
            <Route path={'/civilians'}>
                <Route index element={<CivilianIndex />} />
                <Route path={'create'} element={<CivilianCreate />} />
                <Route path={':id'} element={<CivilianDetail />} />
                <Route path={':id/edit'} element={<CivilianEdit />} />
            </Route>
        </Routes>
    )
}

export default CivilianRoutes;