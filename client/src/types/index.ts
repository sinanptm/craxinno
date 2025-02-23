
export type FormData = {
  title: string;
  fullName: string;
  dateOfBirth: Date | undefined;
  address: string;
  duration: string;
  about: string;
  employment: string;
  savings: string;
};

export type SignupPayloads = {
  email: string;
  phone: string;
  password: string;
};

export type RegisterPayloads = {
  userId: string;
  name:string;
  title: string;
  dateOfBirth: Date|undefined;
  homeAddress: string;
  yearsAtAddress: string;
  bio: string;
  employmentStatus: string;
  financialAssets: string;
};

export interface IUser {
  readonly _id?: string;
  readonly email?: string;
  readonly fullName?: string;
  readonly phone?: string;
  readonly title?: string;
  readonly dateOfBirth?: string | Date;
  readonly homeAddress?: string;
  readonly yearsAtAddress?: string;
  readonly bio?: string;
  readonly employmentStatus?: string;
  readonly financialAssets?: string;
}
