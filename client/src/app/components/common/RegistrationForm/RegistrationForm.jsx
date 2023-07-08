import React from "react";
// import styles from "./Registration.module.scss";
import InputField from "../../ui/Form/InputField";
import CheckBoxField from "../../ui/Form/CheckboxField";
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {
  const [data, setData] = React.useState({
    firstName: "",
    password: "",
    mail: "",
    license: false
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
        type="text"
        title="Имя"
        value={data.firstName}
        name="firstName"
        onChange={handleChange}
      />
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

      <CheckBoxField
        value={data.license}
        name="license"
        onChange={handleChange}
      >
        Я ознакомлен с <Link to="/license">пользовательским соглашением</Link> и
        даю согласие на обработку
        <Link to="/personal-data">персональных данных</Link>
      </CheckBoxField>

      <div className="text-center mt-3 border-bottom">
        <button className="btn btn-warning btn-lg btn-block" type="submit">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
