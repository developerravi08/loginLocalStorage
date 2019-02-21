
export interface Login {
    credentials: string;
    password: string;
}
export class LoginResp {
    result: Result;
    msg: string;
    status: string;
}
export class Result {
    isClub: boolean;
    city: string;
    mobileNo: string;
    clubEventId: string;
    isApproved: boolean;
    club_name: string;
    email: string;
    username: string;
}
export const userRole = {
    'clubUser': true,
    'endUser': 'client',
}
