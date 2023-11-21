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

export const isValidCEP = (cep) => {
  const numericCEP = cep.replace(/\D/g, ''); 
  return numericCEP.length === 8 && !isNaN(numericCEP);
};