import { User } from "./user";

export class UserInfo {

    id: string | undefined;
    user: User | undefined;
    status: string | undefined;
    deleteDate: string | undefined;
    adminUser: boolean | undefined;
    emailPecVerified: boolean | undefined;
    temporalPassword: boolean | undefined;

}
