import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Contact.module.css";
import { contactAdminAction } from "../../redux/actions/generalActions";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import Modal from "../Modal/Modal";

const Contact = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { loading, error, success, contact } = useSelector(
    (state) => state.contactAdmin
  );

  const { userInfo } = useSelector((state) => state.loginUser);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!state.email || !state.name || !state.message) {
      alert("Provide email, name and message");
      return;
    }
    const { email, name, subject, message } = state;

    dispatch(contactAdminAction(email, name, subject, message));

    setState({
      email: "",
      name: "",
      message: "",
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>
          Contact us{" "}
          <span style={{ color: "green" }}>
            {userInfo ? userInfo.email : ""}
          </span>
        </h4>
        <p>
          <b>Address:</b> No 20, maryland
        </p>
        <p>
          <b>Phone:</b> =23470673535
        </p>
        <p>
          <b>Address:</b> No 20, maryland
        </p>
        <p>
          <b>Phone:</b> =23470673535
        </p>
        <p>
          <b>Address:</b> No 20, maryland
        </p>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <Input
            inputProperties={{
              type: "text",
              name: "name",
              placeholder: "Enter your name",
              value: state.name,
              onChange: changeHandler,
            }}
          />

          <Input
            inputProperties={{
              type: "text",
              name: "subject",
              placeholder: "subject",
              value: state.subject,
              onChange: changeHandler,
            }}
          />

          <Input
            inputProperties={{
              type: "email",
              name: "email",
              placeholder: "email",
              value: state.email,
              onChange: changeHandler,
            }}
          />

          <textarea
            col={10}
            row={30}
            onChange={changeHandler}
            name="message"
            placeholder="Enter message"
          ></textarea>

          {error && <Message message="dangerMessage">{error}</Message>}

          {loading ? (
            <Spinner />
          ) : (
            <Button text="Submit" onClick={submitHandler} />
          )}
        </form>

        {success && (<Modal title="Mail sent"><div className="container"><p className="msg">Thank you for mailing us. Your mail will be treated approprietly</p></div>
          </Modal>)}</div>
    </div>
  );
};

export default Contact;
