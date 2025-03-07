import React from "react";
import styles from "./Input.module.css";
import HideIcon from "../Login/Img/hideIcon.svg?react";
import ShowIcon from "../Login/Img/showIcon.svg?react";

const Input = ({ label, type, name, onChange, value, onBlur }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputOnFocus, setInputOnFocus] = React.useState(false);

  const handleInputChange = (e) => {
    onChange(e);
  };

  function toggleShowPassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  // Função para atualizar o estado de foco e chamar onBlur caso exista
  const handleBlur = (e) => {
    setInputOnFocus(false);
    if (onBlur) onBlur(e);
  };

  // Exibe o ícone se o input estiver focado ou se já houver valor
  const shouldShowIcon =
    type === "password" &&
    (inputOnFocus || (value != null && value.length > 0));

  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${
            value != null && value.length > 0 ? styles.active : ""
          }`}
          type={inputType}
          id={name}
          name={name}
          value={value}
          autoComplete={type === "email" ? "on" : "off"}
          onChange={handleInputChange}
          onFocus={() => setInputOnFocus(true)}
          onBlur={handleBlur}
        />
        {shouldShowIcon && (
          <button
            onMouseDown={(e) => e.preventDefault()} // previne que o botão receba foco
            onClick={toggleShowPassword}
            className={styles.hideIcon}
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
