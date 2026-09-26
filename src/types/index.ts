export interface LoginForm {
    email: String,
    password: String
}

export interface RegisterForm {
    name: String,
    email: String,
    password: String,
    password_confirmation: String;
}

export interface User {
    id: number,
    name: String,
    email: String
}