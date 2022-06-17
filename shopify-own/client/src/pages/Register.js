import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

export const Register = () => {
  const [values, setValues] = React.useState(initialState);

  function handleChange(event) {
    setValues((prevValues) => {
      return { ...prevValues };
    });
    console.log(values);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  function toggleMember() {
    setValues((prevValues) => {
      return { ...prevValues, isMember: !prevValues.isMember };
    });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="text"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit" onSubmit={onSubmit}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}{" "}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Sign In"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
