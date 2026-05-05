"use client";

import {SignupType} from './auth.type';
import Icon from '@/assets/logo.png';
import Image from 'next/image';
import styles from './auth.module.css';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {signupAction, type SignupState} from "./actions";


const initialState: SignupState = {
    success: false,
};

function SubmitButton({typeButton} : {typeButton : "submit" | "button" | "reset"}){
    const {pending} = useFormStatus();
    return <button type={typeButton} className={styles.submitButton} disabled={pending}>{pending ? "Submitting" : "Sign up"}</button>
}

export default function SignUp(){

    const [state,formAction] = useActionState(signupAction,initialState);

    return(
        <form action={formAction} className={styles.authForm}>
            <div className={styles.brandSection}>
                <Image src={Icon} alt="company logo" className={styles.brandLogo} priority />
                <h2>Welcome to TradeForge</h2>
                <p>Create your account to start trading securely.</p>
            </div>

            <div className={styles.formSection}>
                <h3>Personal Details</h3>

                <div className={styles.formGrid}>
                    <div className={styles.field}>
                        <label htmlFor="idNumber">ID Number</label>
                        <input id="idNumber" type="text" name="idNumber" placeholder="123456789" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" type="text" name="fullName" placeholder="John Doe" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" placeholder="john_trades" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="john@email.com" required />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="country">Country</label>
                        <input id="country" type="text" name="country" placeholder="Israel" required />
                    </div>

                    <div className={`${styles.field} ${styles.fullWidth}`}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" placeholder="Create a strong password" required />
                    </div>
                </div>
            </div>
            {state.error && <p>An error occurred. Please try again</p>}

            <SubmitButton typeButton="submit"/>
        </form>
        
    )
}
