export default interface IUser {
    readonly id?: string;
    readonly email?: string;
    readonly fullName?: string;
    readonly password?: string;
    readonly phoneNumber?: string;
    readonly title?: string; // e.g., Mr., Ms., Dr.
    readonly dateOfBirth?: string | Date;
    readonly homeAddress?: string;
    readonly yearsAtAddress?: string; 
    readonly bio?: string; 
    readonly employmentStatus?: string;
    readonly financialAssets?: string; 
}
