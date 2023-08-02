import GameContext from "../Context/GameContext";
import Button from "../Utils/Button";
import { motion } from "framer-motion";
import { useContext } from "react";
import "./GameModal.scss"

export default function GameModal({ visible, content }) {
    const { reset } = useContext(GameContext);

    if (!visible) return null;

    return (
        <div className="modal-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.05,
                    type: "spring",
                    damping: 20,
                }}
                className="modal"
            >
                {content}
            </motion.div>
        </div>
    );
}
