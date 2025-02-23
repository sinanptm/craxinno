
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
