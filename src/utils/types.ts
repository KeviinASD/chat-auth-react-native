
export interface User {
    username: string;
    email: string;
    profileUrl?: string;
}

export type UserLogin = {
    email: string;
    password: string;
}

export type UserRegister = {
    email: string;
    password: string;
    username: string;
    profileUrl: string;
}