import { create } from 'zustand';

interface RoleState {
  selectedRole: number | null;
  setSelectedRole: (role: number) => void;
}

export const useRoleStore = create<RoleState>((set) => ({
  selectedRole: null,
  setSelectedRole: (role) => set({ selectedRole: role }),
}));
