// utils/calculateAge.ts
export const calculateAge = (birthday: Date): number => {
  const birthDate = birthday; // No need to convert to Date, as it's already a Date object
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--; // Decrease age if the birthday hasn't occurred yet this year
  }

  return age;
};
