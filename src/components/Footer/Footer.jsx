import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-8 ">
            <footer className="relative w-full bg-[#111111]  text-white rounded-t-3xl mt-10 p-10 border border-[#404c52] overflow-">
                <div className="max-w-6xl mx-auto flex flex-row justify-between relative z-10">
                    {/* LOGO + COPYRIGHT */}
                    <div className="space-y-2">
                        <div className="w-32 h-10 scale-130 rounded-md flex items-center justify-center">
                            <img src="/public/footer/logo.svg" alt="Footer Logo" />
                        </div>

                        <p className="text-sm text-gray-400 mt-6 font-semibold">© 2025 Voided.gg</p>
                        <p className="text-sm text-gray-400 font-semibold">All Rights Reserved</p>
                    </div>

                    <div className="flex flex-row justify-between gap-40">
                        {/* PAGES */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">PAGES</h3>
                            <ul className="space-y-2">
                                <li className="text-green-400 cursor-pointer hover:text-green-300 transition font-semibold">
                                    Leaderboard
                                </li>
                                <li className="text-gray-400 cursor-pointer hover:text-white font-semibold">Bonuses</li>
                                <li className="text-gray-400 cursor-pointer hover:text-white flex items-center gap-1 font-semibold">
                                    Stream <img src="/public/footer/link.svg" alt="link" />
                                </li>
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">SOCIALS</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-400 font-semibold">
                                    <img src="/public/footer/twitter.svg" alt="twitter" />
                                    Twitter
                                </li>

                                <li className="flex items-center gap-2 text-gray-400 font-semibold">
                                    <img src="/public/footer/discord.svg" alt="discord" />
                                    Discord
                                </li>

                                <li className="flex items-center gap-2 text-gray-400 font-semibold">
                                    <img src="/public/footer/twitter.svg" alt="twitter" />
                                    Twitter (Prizes)
                                </li>
                            </ul>
                        </div>

                        {/* PARTNERS */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 tracking-wide">PARTNERS</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-1 text-gray-400 font-semibold">
                                    Stake.com <img src="/public/footer/link.svg" alt="link" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
