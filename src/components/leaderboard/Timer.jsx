// components/Timer.jsx
import { useEffect } from "react";
import useTimerStore from "/src/store/useTimerStore";

const Timer = () => {
    const timeLeft = useTimerStore((state) => state.timeLeft);
    const initializeTimer = useTimerStore((state) => state.initializeTimer);

    useEffect(() => {
        initializeTimer(); // Start the timer on component mount
    }, [initializeTimer]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="text-white text-center text-lg select-none">
            <div className="flex flex-row gap-6 text-lg">
                <div className="relative">
                    <img src="/public/timer-bg.svg" alt="" className="w-[70px] h-[76px] " />
                    <span className="absolute inset-0 flex items-center justify-center size-full  ">{days}D</span>
                </div>
                <div className="relative">
                    <img src="/public/timer-bg.svg" alt="" className="w-[70px] h-[76px] " />
                    <span className="absolute inset-0 flex items-center justify-center size-full  ">{hours}H</span>
                </div>
                <div className="relative">
                    <img src="/public/timer-bg.svg" alt="" className="w-[70px] h-[76px] " />
                    <span className="absolute inset-0 flex items-center justify-center size-full  ">{minutes}M</span>
                </div>
                <div className="relative">
                    <img src="/public/timer-bg.svg" alt="" className="w-[70px] h-[76px] " />
                    <span className="absolute inset-0 flex items-center justify-center size-full  ">{seconds}S</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
