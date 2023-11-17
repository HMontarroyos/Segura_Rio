export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidCPF = (cpf) => {
  const numericCPF = cpf.replace(/\D/g, '');
  return numericCPF.length === 11 && !isNaN(numericCPF);
};

export const isValidPhone = (phone) => {
  const numericPhone = phone.replace(/\D/g, '');
  return !isNaN(numericPhone);
};