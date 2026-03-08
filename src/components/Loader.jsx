import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaTools,
    FaWrench,
    FaBolt,
    FaSnowflake,
    FaFan,
    FaThermometerHalf,
} from "react-icons/fa";

const icons = [
    { Icon: FaWrench, label: "Repair", color: "#3B82F6" },
    { Icon: FaSnowflake, label: "AC Service", color: "#06B6D4" },
    { Icon: FaBolt, label: "Electrical", color: "#F59E0B" },
    { Icon: FaFan, label: "Appliances", color: "#10B981" },
    { Icon: FaThermometerHalf, label: "Geyser", color: "#EF4444" },
    { Icon: FaTools, label: "All Services", color: "#8B5CF6" },
];

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Progress bar animation over 5 seconds
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1.4;
            });
        }, 70);

        // Cycle through icon steps
        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % icons.length);
        }, 800);

        // Hide loader after 5.5s
        const timer = setTimeout(() => {
            clearInterval(stepInterval);
            setDone(true);
            setTimeout(() => onComplete && onComplete(), 600);
        }, 5500);

        return () => {
            clearInterval(interval);
            clearInterval(stepInterval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
                >
                    {/* Background animated gear pattern */}
                    <div className="absolute inset-0 opacity-5">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-white"
                                style={{
                                    fontSize: `${40 + (i % 3) * 20}px`,
                                    left: `${(i * 17) % 90}%`,
                                    top: `${(i * 23) % 85}%`,
                                }}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                            >
                                ⚙
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-sm">

                        {/* Logo / Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <motion.div
                                    animate={{ rotate: [0, 20, -20, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FaWrench className="text-blue-400 text-3xl" />
                                </motion.div>
                                <h1 className="text-white text-2xl font-bold tracking-wide">
                                    Universal <span className="text-blue-400">Repair</span> Point
                                </h1>
                            </div>
                            <p className="text-gray-400 text-sm tracking-widest uppercase">
                                Home Appliance Services
                            </p>
                        </motion.div>

                        {/* Animated Icons Ring */}
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            {/* Rotating ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-t-blue-500"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-3 rounded-full border-2 border-cyan-500/20 border-b-cyan-400"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Center Icon */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.4, rotate: 30 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col items-center gap-1"
                                >
                                    {(() => {
                                        const { Icon, color, label } = icons[currentStep];
                                        return (
                                            <>
                                                <Icon style={{ color, fontSize: "2.5rem" }} />
                                                <span className="text-xs text-gray-300 font-medium mt-1">
                                                    {label}
                                                </span>
                                            </>
                                        );
                                    })()}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Icon dots row */}
                        <div className="flex gap-4">
                            {icons.map(({ Icon, color }, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: currentStep === i ? 1.4 : 1,
                                        opacity: currentStep === i ? 1 : 0.3,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon style={{ color, fontSize: "1.1rem" }} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400 text-xs tracking-widest uppercase">
                                    Loading
                                </span>
                                <span className="text-blue-400 text-xs font-bold">
                                    {Math.min(Math.round(progress), 100)}%
                                </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${Math.min(progress, 100)}%`,
                                        background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
                                    }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>
                            <motion.p
                                key={currentStep}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-gray-500 text-xs text-center mt-3"
                            >
                                {[
                                    "Initializing services...",
                                    "Loading AC repair module...",
                                    "Connecting technicians...",
                                    "Fetching appliance catalog...",
                                    "Setting up bookings...",
                                    "Almost ready...",
                                ][currentStep]}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;