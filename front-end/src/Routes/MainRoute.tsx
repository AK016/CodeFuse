import {Route,Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
export const MainRoutes=()=>{
return(
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
)
}
export default MainRoutes;