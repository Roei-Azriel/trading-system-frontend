"use client";

import type {MouseEvent} from "react";

type DepositModalProps = {
    onClose : () => void;
};

export default function DepositModal({onClose} : DepositModalProps){
    const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }
    return(
        <div onClick={onClose}>
            <div onClick={handleModalClick}>
                <header>
                    <h2>Deposit</h2>
                    <button onClick={onClose}>Close</button>
                </header>
                <main>
                    this is Deposit Modal
                </main>
            </div>
        </div>
    )
}