import { create } from 'zustand';

interface Towing {
  type: string; // "now" or "later"
  vehicle: string;
  pickUpLocation: string;
  dropOffLocation: string;
  scheduledDate: string | null;
  scheduledTime: string | null;
  setType: (type: string) => void;
  setVehicle: (vehicle: string) => void;
  setPickUpLocation: (location: string) => void;
  setDropOffLocation: (location: string) => void;
  setScheduledDate: (date: string | null) => void;
  setScheduledTime: (time: string | null) => void;
  setCurrentDateTime: () => void; // New function to set current date and time
}

export const useTowingStore = create<Towing>((set) => ({
  type: 'now',
  vehicle: '',
  pickUpLocation: '',
  dropOffLocation: '',
  scheduledDate: null,
  scheduledTime: null,
  setType: (type: string) => set({ type }),
  setVehicle: (vehicle: string) => set({ vehicle }),
  setPickUpLocation: (location: string) => set({ pickUpLocation: location }),
  setDropOffLocation: (location: string) => set({ dropOffLocation: location }),
  setScheduledDate: (date: string | null) => set({ scheduledDate: date }),
  setScheduledTime: (time: string | null) => set({ scheduledTime: time }),
  setCurrentDateTime: () => {
    const now = new Date();
    set({
      scheduledDate: now.toISOString().split('T')[0], // e.g., "2024-10-18"
      scheduledTime: now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }), // e.g., "10:30 AM"
    });
  },
}));
