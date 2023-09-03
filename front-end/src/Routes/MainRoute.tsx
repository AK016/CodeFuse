import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { ChatBox } from "../Components/ChatBox";
export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/interview/:id" element={<ChatBox />} />
            </Routes>
        </>
    )
}
export default MainRoutes;