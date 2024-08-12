import { Role } from "../constants/Role";

export interface IUserRegistration {
    id:string;
    fullName: string;
    surname: string;
    dateOfBirth: Date;
    email: string;
    loginId: string;
    password: string;
    confirmPassword: string;
    mobileNumber:number;
    role:Role;
  }