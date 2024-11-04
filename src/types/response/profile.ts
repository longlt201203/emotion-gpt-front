export interface AccountResponse {
    id: number;
    username: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserResponse {
    id: number;
    fname: string;
    lname: string;
    sname?: string;
    dob: Date;
    hobbies: string[];
    interests: string[];
}

export default interface ProfileResponse {
    account: AccountResponse;
    user: UserResponse;
}