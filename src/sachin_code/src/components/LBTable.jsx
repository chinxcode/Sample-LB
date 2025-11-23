import bg1 from "../assets/row-bg-1.svg";
import bg2 from "../assets/row-bg-2.svg";
import bg3 from "../assets/row-bg-3.svg";

function LBTable() {
    const bgImages = [bg1, bg2, bg3];
    const leaderboardData = [
        { place: "1ST", user: "USER", wager: "52,856.95$", prize: "500.00" },
        { place: "2ND", user: "USER", wager: "52,856.95$", prize: "300.00" },
        { place: "3RD", user: "USER", wager: "52,856.95$", prize: "200.00" },
        { place: "4TH", user: "USER", wager: "52,856.95$", prize: "250.00" },
        { place: "5TH", user: "USER", wager: "52,856.95$", prize: "150.00" },
    ];

    return (
        <>
            <div className="w-full max-w-[778px] mx-auto">
                <div class="grid grid-cols-4 font-bold px-4 mb-2 uppercase">
                    <div className="flex items-center gap-2 text-[15px] font-bold">
                        <img src="/src/assets/hash.svg" alt="trophy" class="w-4 h-4" />
                        PLACE
                    </div>
                    <div class="flex items-center gap-2 text-[15px] ml-2 font-bold">
                        <img src="/src/assets/profile.svg" alt="user" class="w-4 h-4" />
                        USER
                    </div>
                    <div class="flex items-center gap-2 text-[15px] ml-0.5 font-bold">
                        <img src="/src/assets/wager.svg" alt="wager" class="w-4 h-4" />
                        WAGER
                    </div>
                    <div class="flex items-center gap-2 justify-end mr-8 text-[15px] font-bold">
                        <img src="/src/assets/trophy.svg" alt="prize" class="w-4 h-4" />
                        PRIZE
                    </div>
                </div>

                <div class="space-y-2">
                    {leaderboardData.map((entry, i) => {
                        const bg = bgImages[i % bgImages.length];
                        return (
                            <div
                                key={entry.place}
                                className="grid grid-cols-4 h-[54px] items-center border border-gray-900 rounded-lg px-3.5 py-2"
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div class="font-bold w-[54px] px-3 py-0.5 bg-[#1F1F1F] text-[16px]">{entry.place}</div>
                                <div class="flex items-center gap-0.5 font-bold text-[16px]">
                                    <div class="rounded-full flex items-center justify-center">
                                        <img src="/src/assets/pig.svg" alt="pig" class="w-8 h-8" />
                                    </div>
                                    {entry.user}
                                </div>
                                <div class="font-bold text-[16px]">{entry.wager}</div>
                                <div class="text-right font-bold  flex items-center justify-end gap-2 mr-8">
                                    <div class="rounded-full flex items-center justify-center">
                                        <img src="/src/assets/dollar.svg" alt="dollar" class="w-4 h-4" />
                                    </div>
                                    {entry.prize}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default LBTable;
