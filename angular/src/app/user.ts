import { UserAddress } from "./user-address";
import { UserContact } from "./user-contact";
import { UserInfo } from "./user-info";

export class User {
    userId: string | undefined;
    userName: string | undefined;
    fullName: string | undefined;
    gender: string | undefined;
    email: string | undefined;
    emailPec: string | undefined;
    role: string[] | undefined;
    dateOfBirth: string | undefined;
    lastLogin: string | undefined;
    createdAt: string | undefined;
    active: boolean | undefined;
    userAddress: UserAddress | undefined;
    userContact: UserContact | undefined;
    userInfo: UserInfo | undefined;

}
