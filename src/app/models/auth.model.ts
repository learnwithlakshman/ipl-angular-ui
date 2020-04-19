export interface JwtRequest {
    username: string;
    password: string;
}
export interface User {
    email: string;
    enabled: boolean;
    fullname: string;
    id: string;
    password: string;
    roles: Role[];
}
export interface Role {
    role: string;
}