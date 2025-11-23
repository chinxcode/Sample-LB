import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard } from "./components/leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[#111111] overflow-x-hidden">
                <Header />
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Leaderboard />} />
                    </Routes>
                </main>
                <div className="relative z-10">
                    {/* Glow behind footer */}
                    <div
                        className="
                                    absolute -top-30 left-1/2 -translate-x-1/2
                                    w-[1600px] h-[300px]
                                    bg-[radial-gradient(circle,rgba(51,136,230,0.55)_0%,rgba(51,136,230,0.15)_60%,rgba(51,136,230,0)_100%)]
                                    blur-[220px]
                                    pointer-events-none
                                    -z-10
                                "
                    ></div>

                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
