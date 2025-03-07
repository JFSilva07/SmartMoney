const types = {
  email: {
    regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}(\.[a-z]{2,})?$/i,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    message:
      "A senha deve conter pelo menos 6 caracteres, um dígito, uma letra minúscula e uma letra maiúscula.",
  },
  username: {
    regex: /^.{3,}$/,
    message: "O nome de usuário deve ter pelo menos 3 caracteres.",
  },
};

const useValidate = (value, type) => {
  if (value.length === 0) return "Este campo é obrigatório";

  if (types[type] && !types[type].regex.test(value)) {
    return types[type].message;
  }

  return true;
};
export default useValidate;
