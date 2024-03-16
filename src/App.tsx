import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./Pages/About";

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path={'/'} element={<LandingPage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
