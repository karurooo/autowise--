import { create } from 'zustand';

interface User {
  firstName: string;
  lastName: string;
  age: number;
  birthday: Date | null;
  street: string;
  barangay: string;
  city: string;
  province: string;
  zipCode: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
  otpCode: string;
  isAuthenticated: boolean;
  phoneNumber: string;
  role: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setAge: (age: number) => void;
  setBirthday: (birthday: Date | null) => void;
  setStreet: (street: string) => void;
  setBarangay: (barangay: string) => void;
  setCity: (city: string) => void;
  setProvince: (province: string) => void;
  setZipCode: (zipCode: string) => void;
  setEmail: (email: string) => void;
  setGender: (gender: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setOtpCode: (otpCode: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setRole: (role: string) => void;
}

export const useUserStore = create<User>((set) => ({
  firstName: '',
  lastName: '',
  age: 0,
  birthday: null,
  street: '',
  barangay: '',
  city: '',
  province: '',
  zipCode: '',
  email: '',
  gender: '',
  password: '',
  confirmPassword: '',
  otpCode: '',
  isAuthenticated: false,
  phoneNumber: '',
  role: '',
  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
  setAge: (age: number) => set({ age }),
  setBirthday: (birthday: Date | null) => set({ birthday }),
  setStreet: (street: string) => set({ street }),
  setBarangay: (barangay: string) => set({ barangay }),
  setCity: (city: string) => set({ city }),
  setProvince: (province: string) => set({ province }),
  setZipCode: (zipCode: string) => set({ zipCode }),
  setEmail: (email: string) => set({ email }),
  setGender: (gender: string) => set({ gender }),
  setPassword: (password: string) => set({ password }),
  setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
  setOtpCode: (otpCode: string) => set({ otpCode }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
  setRole: (role: string) => set({ role }),
}));
