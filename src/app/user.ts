export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export const config = {
    apiUrl: 'http://localhost:4000'
}
