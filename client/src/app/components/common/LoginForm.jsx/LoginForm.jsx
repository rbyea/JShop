import React from "react";
// import styles from "./Registration.module.scss";
import InputField from "../../ui/Form/InputField";

const LoginForm = (props) => {
  const [data, setData] = React.useState({
    password: "",
    mail: ""
  });

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
        type="email"
        title="Почта"
        value={data.mail}
        name="mail"
        onChange={handleChange}
      />
      <InputField
        type="password"
        title="Пароль"
        value={data.password}
        name="password"
        onChange={handleChange}
      />

      <div className="text-center mt-3 border-bottom">
        <button className="btn btn-warning btn-lg btn-block" type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
