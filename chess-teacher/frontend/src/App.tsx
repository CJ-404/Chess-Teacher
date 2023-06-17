import { Routes, Route } from "react-router-dom";
import Practice from "./pages/Practice";
import Teach from "./pages/Teach";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/teach" element={<Teach />} />
                <Route
                    path="/*"
                    element={
                        <h1 className="text-center text-light"> Not Found! </h1>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
