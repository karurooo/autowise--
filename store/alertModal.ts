import { create } from 'zustand';

interface ErrorMessages {
  errorTitle: string;
  errorMessage: string;
  errorVisible: boolean;
  setErrorTitle: (erorTitle: string) => void;
  setErrorMessage: (errorMessage: string) => void;
  setErrorVisible: (errorVisible: boolean) => void;
}

interface SuccessMessages {
  successTitle: string;
  successMessage: string;
  successVisible: boolean;
  setSuccessTitle: (successTitle: string) => void;
  setSuccessMessage: (successMessage: string) => void;
  setSuccessVisible: (successVisible: boolean) => void;
}

interface ConfirmationMessages {
  confirmationTitle: string;
  confirmationMessage: string;
  confirmationVisible: boolean;
  isConfirmed: boolean;

  setTitle: (confirmationTitle: string) => void;
  setMessage: (confirmationMessage: string) => void;
  setConfirmationVisible: (confirmationVisible: boolean) => void;
  setIsConfirmed: (isConfirmed: boolean) => void;
}

export const useErrorStore = create<ErrorMessages>((set) => ({
  errorTitle: '',
  errorMessage: '',
  errorVisible: false,
  setErrorTitle: (title) => set({ errorTitle: title }),
  setErrorMessage: (message) => set({ errorMessage: message }),
  setErrorVisible: (visible) => set({ errorVisible: visible }),
}));

export const useSuccessStore = create<SuccessMessages>((set) => ({
  successTitle: '',
  successMessage: '',
  successVisible: false,
  setSuccessTitle: (successTitle: string) => set({ successTitle }),
  setSuccessMessage: (successMessage: string) => set({ successMessage }),
  setSuccessVisible: (successVisible: boolean) => set({ successVisible }),
}));

export const useConfirmationStore = create<ConfirmationMessages>((set) => ({
  confirmationTitle: '',
  confirmationMessage: '',
  confirmationVisible: false,
  isConfirmed: false,
  setTitle: (confirmationTitle: string) => set({ confirmationTitle }),
  setMessage: (confirmationMessage: string) => set({ confirmationMessage }),
  setConfirmationVisible: (confirmationVisible: boolean) => set({ confirmationVisible }),
  setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
}));
