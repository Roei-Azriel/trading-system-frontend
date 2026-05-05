import z from 'zod';


export interface SignupType {
    id : String,
    idNumber : String,
    fullName : String,
    email : String,      
    username : String,     
    country : String,
    password : String   
}

export const signupSchema = z.object({
    idNumber: z.string().regex(/^\d+$/),
    fullName: z.string().regex(/^[a-zA-Z ]+$/),
    username: z.string().regex(/^[a-zA-Z][a-zA-Z0-9]{2,19}$/),
    email: z.string().email(),
    country: z.string().min(2),
    password: z.string().min(6),
});
