'use client'

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
    progress: number;
    reset: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, reset }) => {
    return (
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
                className={`h-full bg-white ${reset ? 'transition-none' : 'transition-all duration-100'}`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

const ProgressBars: React.FC = () => {
    const [progressValues, setProgressValues] = useState<number[]>([0, 0, 0]);
    const [reset, setReset] = useState<boolean>(false);

    useEffect(() => {
        let currentBar = 0;
        const fillDuration = 4500; // 4.5 секунды
        const steps = 100; // 100 шагов для плавного прогресса
        const intervalTime = fillDuration / steps; // Время между каждым шагом

        const interval = setInterval(() => {
            setProgressValues((prev) => {
                const newValues = [...prev];
                if (newValues[currentBar] < 100) {
                    newValues[currentBar] = Math.min(newValues[currentBar] + (100 / steps), 100);
                } else if (currentBar < 2) {
                    currentBar++;
                } else if (newValues.every(value => value >= 100)) {
                    setTimeout(() => {
                        setReset(true);
                        setProgressValues([0, 0, 0]);
                        currentBar = 0;
                        setTimeout(() => setReset(false), 50); // Убираем transition-none через 50ms для плавности
                    }, 0);
                }
                return newValues;
            });
        }, intervalTime);

        return () => clearInterval(interval); // Очистка интервала при завершении эффекта
    }, []);

    return (
        <div className="w-full max-w-md flex items-center gap-[10px] absolute z-10 top-[20px] px-[25px]">
            {progressValues.map((progress, index) => (
                <ProgressBar key={index} progress={progress} reset={reset} />
            ))}
        </div>
    );
};

export default ProgressBars;
