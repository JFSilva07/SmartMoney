import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useValidate from "../Hooks/useValidate";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validação de cada campo
    const usernameError = useValidate(formData.username, "username");
    const emailError = useValidate(formData.email, "email");
    const passwordError = useValidate(formData.password, "password");

    if (
      usernameError !== true ||
      emailError !== true ||
      passwordError !== true
    ) {
      setErrors({
        username: usernameError !== true ? usernameError : "",
        email: emailError !== true ? emailError : "",
        password: passwordError !== true ? passwordError : "",
      });
      setLoading(false);
      return;
    }

    // Se passou na validação, salva no localStorage
    //adicionar um timer de 3.5 segundos para simular o cadastro e animação de loading
    setTimeout(() => {
      window.localStorage.setItem("user", JSON.stringify(formData));
      console.log("Usuário cadastrado:", formData);
      setLoading(false);
      navigate("/auth");
    }, 3500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Se já houver erro no campo, revalida enquanto o usuário digita
    if (errors[name]) {
      const error = useValidate(value, name);
      setErrors((prev) => ({
        ...prev,
        [name]: error === true ? "" : error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = useValidate(value, name);
    setErrors((prev) => ({
      ...prev,
      [name]: error === true ? "" : error,
    }));
  };

  return (
    <div className={`animeRight ${styles.loginForm}`}>
      <h1>Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <Input
          label="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <div className={styles.buttonContainer}>
          <Button disabled={loading}>CRIAR</Button>
          {loading && <Loading anime="animeLeft" />}
        </div>
      </form>
      <p>Já possui conta? Tá esperando o quê?</p>
      <Link to="/login/entrar">Faça login!</Link>
    </div>
  );
};

export default Cadastro;
