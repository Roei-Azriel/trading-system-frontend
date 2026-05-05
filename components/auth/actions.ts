"use client";

import { signupSchema } from './auth.type';

export type SignupState = {
    error?: string;
    success: boolean;
};


export function signupAction(prevState : SignupState, formData:FormData) : Promise<SignupState>{
    

    const idNumber = formData.get("id");
    const fullName = formData.get("fullName");
    const username = formData.get("userName");
    const email = formData.get("email");
    const country = formData.get("country");
    const password = formData.get("password");

    const result = signupSchema.safeParse({
        idNumber,
        fullName,
        username,
        email,
        country,
        password,
    })

}
