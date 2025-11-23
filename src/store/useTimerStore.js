// timerStore.ts or timerStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

let hasInitializedFromReload = false;

const useTimerStore = create(
    persist(
        (set, get) => ({
            endTime: null,
            timeLeft: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            timerInterval: null,

            setEndTime: (endTime) => set({ endTime }),
            setTimeLeft: (timeLeft) => set({ timeLeft }),

            updateTimer: () => {
                const { endTime } = get();
                if (!endTime) return;

                const now = new Date().getTime();
                const end = new Date(endTime).getTime();
                const distance = end - now;

                if (distance < 0) {
                    set({
                        timeLeft: {
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                        },
                    });
                    clearInterval(get().timerInterval);
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                set({ timeLeft: { days, hours, minutes, seconds } });
            },

            initializeTimer: async () => {
                if (!hasInitializedFromReload) {
                    console.log("API call triggered due to full page reload");
                    try {
                        const response = { data: { endTime: "2025-09-20T12:00:00.000Z" } };
                        let apiEndTime = new Date(response.data.endTime);

                        if (!apiEndTime || apiEndTime < new Date()) {
                            apiEndTime = new Date();
                            apiEndTime.setDate(apiEndTime.getDate() + 5);
                        }

                        set({ endTime: apiEndTime.toISOString() });
                        hasInitializedFromReload = true;
                    } catch (err) {
                        console.error("Failed to initialize from API:", err);
                    }
                }

                get().updateTimer();

                const interval = setInterval(() => {
                    get().updateTimer();
                }, 1000);

                set({ timerInterval: interval });
            },

            clearTimer: () => {
                const interval = get().timerInterval;
                if (interval) {
                    clearInterval(interval);
                    set({ timerInterval: null });
                }
            },
        }),
        {
            name: "leaderboard-timer",
        }
    )
);

export default useTimerStore;
