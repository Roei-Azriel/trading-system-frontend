"use client";

import { useState } from "react";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import classes from "./WalletHeader.module.css";

type WalletHeaderProps = {
    estimatedBalanceInBTC : number;
    estimatedBalanceInUSDT : number;
}


export default function WalletHeader({
    estimatedBalanceInBTC,
    estimatedBalanceInUSDT,
} : WalletHeaderProps){
    const [openModal,setOpenModal] = useState<"deposit" | "withdraw" | null>(null);
    return(
        <div className={classes.walletHeaderWrapper}>
            <div className = {classes.mainDivWalletBalance}>
                <div className={classes.userBalance}>
                    <h2>Estimated Balance</h2>
                    <p>{estimatedBalanceInBTC} BTC</p>
                    <p>≈ ${estimatedBalanceInUSDT}</p>
                </div>
                <div className={classes.depositandwithdraw}>
                    <button className={classes.btn} onClick={()=> setOpenModal("deposit")}>Deposit</button>
                    <button className={classes.btn} onClick={()=> setOpenModal("withdraw")}>Withdraw</button>
                </div>
                {openModal === "deposit" && (
                    <div>
                        <h2>Deposit Close</h2>
                        <DepositModal onClose = {() => setOpenModal(null)}/>
                    </div>)}
                {openModal === "withdraw" && (
                    <div>
                        <h2>Withdraw Close</h2>
                        <WithdrawModal onClose = {() => setOpenModal(null)}/>
                    </div>)}
            </div>
        </div>
    )
}