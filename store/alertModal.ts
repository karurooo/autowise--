import { create } from 'zustand';

interface ErrorMessages {
  errorTitle: string;
  errorMessage: string;
  isVisible: boolean;
  setErrorTitle: (title: string) => void;
  setErrorMessage: (message: string) => void;
  setIsVisible: (visible: boolean) => void;
}

interface SuccessMessages {
  successTitle: string;
  successMessage: string;
  isVisible: boolean;
  setTitle: (successTitle: string) => void;
  setMessage: (successMessage: string) => void;
  setIsVisible: (isVisible: boolean) => void;
}

interface ConfirmationMessages {
  confirmationTitle: string;
  confirmationMessage: string;
  isVisible: boolean;
  isConfirmed: boolean;

  setTitle: (confirmationTitle: string) => void;
  setMessage: (confirmationMessage: string) => void;
  setIsVisible: (isVisible: boolean) => void;
  setIsConfirmed: (isConfirmed: boolean) => void;
}

export const useErrorStore = create<ErrorMessages>((set) => ({
  errorTitle: '',
  errorMessage: '',
  isVisible: false,
  setErrorTitle: (title) => set({ errorTitle: title }),
  setErrorMessage: (message) => set({ errorMessage: message }),
  setIsVisible: (visible) => set({ isVisible: visible }),
}));

export const useSuccessMessagesStore = create<SuccessMessages>((set) => ({
  successTitle: '',
  successMessage: '',
  isVisible: false,
  setTitle: (successTitle: string) => set({ successTitle }),
  setMessage: (successMessage: string) => set({ successMessage }),
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));

export const useConfirmationMessagesStore = create<ConfirmationMessages>((set) => ({
  confirmationTitle: '',
  confirmationMessage: '',
  isVisible: false,
  isConfirmed: false,
  setTitle: (confirmationTitle: string) => set({ confirmationTitle }),
  setMessage: (confirmationMessage: string) => set({ confirmationMessage }),
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
  setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
}));
