import FirstRankCard from "./FirstRankCard";
import SecondRankCard from "./SecondRankCard";
import ThirdRankCard from "./ThirdRankCard";
import Card from "./Card";
import Timer from "./Timer";
import LBTable from "./LBTable";
import ButtonRight from "./ButtonRIght";
import ButtonLeft from "./ButtonLeft";

// Synthetic leaderboard data
const leaderboardData = [
    { username: "ethan99", wagered: 2521000.75, prize: 2000 },
    { username: "zo**", wagered: 2315000.0, prize: 1500 },
    { username: "xi**", wagered: 2104000.25, prize: 1000 },
    { username: "ra**", wagered: 1989000.1, prize: 750 },
    { username: "mi**", wagered: 1873200.65, prize: 500 },
];

export const Leaderboard = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#111111] pb-10 gap-20 font-archivo">
            <section className="relative w-full h-[900px]  overflow-hidden">
                {/* BACKGROUND IMAGE */}
                <img src="/public/leaderboard/bg.png" alt="bg" className=" w-full h-full object-cove" />

                {/* CONTENT WRAPPER (on top of bg) */}
                <div className="absolute  top-20 left-[50%] -translate-x-1/2 flex flex-col items-center px-4 gap-15 ">
                    <div className="flex flex-col items-center gap-0">
                        {/* TITLE IMAGE */}
                        <div className="relative">
                            <div class="absolute w-[698px] h-[73px] bg-[#267EE3] opacity-35 blur-[75.12px] top-1/2 -translate-y-1/2"></div>
                        
                            <img src="/public/leaderboard/lb-title-text.svg" alt="Leaderboard" className="" />
                        </div>
                        
                        {/* CODE + JOIN STAKE ROW */}
                        <div className="flex flex-col md:flex-row items-center gap-4 ">
                            <ButtonLeft />
                            <ButtonRight />
                        </div>
                        
                    </div>
                    {/* RANK CARDS */}
                    <div className="flex flex-col md:flex-row  justify-center gap-10 mt-5">
                        <SecondRankCard />
                        <div className="-mt-8 ">
                            <FirstRankCard />
                        </div>
                        <ThirdRankCard />
                    </div>

                    {/* TIMER SECTION */}
                    <div className="flex flex-col items-center gap-2 -mt-10 ">
                        <p className="text-[17px] uppercase tracking-[0.3em] text-gray-300">Leaderboard ends in</p>
                        <Timer />
                    </div>
                </div>
            </section>
            {/* LEADERBOARD TABLE */}
            <LBTable lbData={leaderboardData} />

            {/* winner ttitle and cards */}
            <div className="flex flex-col gap-10 font-archivo">
                <div className="flex flex-col uppercase items-center justify-center gap-0 leading-tight">
                    <h1 className="text-[51px] text-white font-extrabold font-outfit">
                        recent <span className="text-[#2277D8]">winners</span>
                    </h1>
                    <p className="text-[#C4C4C4] text-[20px] font-semibold">
                        CLICK THE CARDS BELOW TO SEE THE FULL LIST OF WINNERS
                    </p>
                </div>
                <div className="flex flex-row gap-8 text-white">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
