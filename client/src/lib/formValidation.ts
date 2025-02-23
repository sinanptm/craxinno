import { FormData } from "@/types";

const isEmptyString = (str: string) => !str || str.trim().length === 0;

export const validateStep1 = (formData: FormData): string | null => {
  if (!formData.title) {
    return "Please select a title";
  }

  if (isEmptyString(formData.fullName)) {
    return "Please enter your full name";
  }

  if (!formData.dateOfBirth) {
    return "Please select your date of birth";
  }

  if (isEmptyString(formData.address)) {
    return "Please enter your address";
  }

  if (isEmptyString(formData.duration)) {
    return "Please enter how long you've lived at this address";
  }

  if (isEmptyString(formData.about)) {
    return "Please tell us about yourself";
  }

  if (formData.about.length < 10) {
    return "Please tell us a bit more about yourself (minimum 10 characters)";
  }

  return null;
};

export const validateStep2 = (formData: FormData): string | null => {
  if (!formData.employment) {
    return "Please select your employment status";
  }

  if (isEmptyString(formData.savings)) {
    return "Please enter your savings amount";
  }

  const savingsAmount = Number(formData.savings);
  if (isNaN(savingsAmount) || savingsAmount < 0) {
    return "Please enter a valid savings amount";
  }

  return null;
};