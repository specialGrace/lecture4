import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../Input/Input";
import InputLabel from "../Input/InputLabel";
import styles from "../Register/Register.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import {
  CREATE_USER_RESET,
  LOGIN_USER_RESET,
} from "../../redux/constants/userConstants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.loginUser);
  const { loading, success, error, user } = store;

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (success) {
      navigate("/");
      // dispatch({
      //     type:LOGIN_USER_RESET
      // })
    }
  }, [dispatch, success, navigate]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    // setState((state)=> {
    //         return {
    //             ...state,
    //             [name]:value
    //         }
    // })
  };

  const submitHandler = (e) => {
    console.log("hit");
    e.preventDefault();

    if (!state.email || !state.password) {
      alert("Provide email and password");
      return;
    }

    dispatch(loginUserAction(state.email, state.password));

    setState({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <InputLabel title="Email" />
          <Input
            inputProperties={{
              type: "email",
              name: "email",
              placeholder: "example@gmail.com",
              value: state.email,
              onChange: changeHandler,
            }}
          />
        </div>

        <div className={styles.inputGroup}>
          <InputLabel title="Password" />
          <Input
            inputProperties={{
              type: "password",
              name: "password",
              placeholder: "Password",
              value: state.password,
              onChange: changeHandler,
            }}
          />
        </div>
        {error && <Message message="dangerMessage">{error}</Message>}
        <div className="action">
          {loading ? (
            <Spinner />
          ) : (
            <Button
              text="Login"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
              onClick={submitHandler}
            />
          )}
        </div>

        <p>
          <Link to="/register">Not register?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
