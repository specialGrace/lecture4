import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Input from "../Input/Input";
import InputLabel from "../Input/InputLabel";
import styles from "./Register.module.css";
import Button from "../Button/Button";
import { createUserAction } from "../../redux/actions/userActions";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";

const Register = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  //subscribe to store
  const { loading, success, error, user } = useSelector(
    (state) => state.createUser
  );

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

    dispatch(createUserAction(state.email, state.password));

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
              text="Submit"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
              onClick={submitHandler}
            />
          )}
        </div>

        <p>
          <Link to="/login">Login</Link>
        </p>
      </form>

      {success && (
        <Modal title="Registration successful">
          <div className="successfulReg">
            <p>
              Thank you for registering{" "}
              <b>
                <Link to="/login">Login</Link>
              </b>
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Register;
