import { MouseEvent } from "react";

type WithdrawModalProps = {
    onClose : () => void;
}

export default function WithdrawModal({onClose} : WithdrawModalProps){
    const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
    }
    return(
        <div onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}>
                <header>
                    <h2>Deposit</h2>
                    <button onClick={onClose}>Close</button>
                </header>
                <main>
                    this is Withdraw Modal
                </main>
            </div>
        </div>
    )
}