import React from "react";
// import styles from "./Registration.module.scss";
import InputField from "../Form/InputField";
import { validator } from "../../../utils/validator";

const LoginForm = (props) => {
  const [data, setData] = React.useState({
    password: "",
    email: ""
  });
  const [error, setError] = React.useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения!"
      },
      isEmail: {
        message: "Почта введена некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения!"
      }
    }
  };

  React.useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(error).length === 0;

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputField
        error={error.email}
        type="email"
        title="Почта"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <InputField
        error={error.password}
        type="password"
        title="Пароль"
        value={data.password}
        name="password"
        onChange={handleChange}
      />

      <div className="text-center mt-3 border-bottom">
        <button
          disabled={!isValid}
          className="btn btn-warning btn-lg btn-block"
          type="submit"
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
