import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import React from "react";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export const Register = () => {
  const [values, setValues] = React.useState(initialState);

  // global state and useNavigate
  const { isLoading, showAlert, displayAlert } = useAppContext();
  //   console.log(state);

  function handleChange(event) {
    setValues((prevValues) => {
      return { ...prevValues, [event.target.name]: event.target.value };
    });
    console.log(values);
  }

  function onSubmit(event) {
    event.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
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
        {showAlert && <Alert />}
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
