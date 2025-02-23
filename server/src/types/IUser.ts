export default interface IUser {
    readonly _id?: string;
    readonly email?: string;
    readonly fullName?: string;
    readonly password?: string;
    readonly phone?: string;
    readonly title?: string;
    readonly dateOfBirth?: string | Date;
    readonly homeAddress?: string;
    readonly yearsAtAddress?: string;
    readonly bio?: string;
    readonly employmentStatus?: string;
    readonly financialAssets?: string;
}
