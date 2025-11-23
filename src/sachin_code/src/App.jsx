import "./App.css";
import LeaderBoard from "./components/LeaderBoard.jsx";
import RecentWinners from "./components/RecentWinners.jsx";

function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative selection:bg-blue-500 selection:text-white">
            <main className="container mx-auto px-4 pt-10 pb-20 flex flex-col gap-16 items-center">
                <div className="w-full max-w-5xl flex flex-col gap-12">
                    <LeaderBoard />
                    <RecentWinners />
                </div>
            </main>
        </div>
    );
}

export default App;
