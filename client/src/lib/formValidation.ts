import { FormData } from "@/types";

const isEmptyString = (str: string) => !str || str.trim().length === 0;

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.toString());
};

const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};


export const validateSignupForm = (phone: string, email: string, password: string, confirmPassword: string) => {
  const newErrors = {
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    newErrors.email = 'Please enter a valid email address';
  }

  if (!phone) {
    newErrors.phone = 'Phone number is required';
  } else if (!validatePhone(phone.toString())) {
    newErrors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (!password) {
    newErrors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    newErrors.password = "Password must be at least 6 characters long, contain at least one uppercase letter, and one number.";
  }

  if (password !== confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
  }

  return newErrors;
};

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