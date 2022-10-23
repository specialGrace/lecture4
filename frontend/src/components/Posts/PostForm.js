import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import Input from "../Input/Input";
import { createPostAction } from "../../redux/actions/postActions";
import Button from "../Button/Button";

import styles from "../Contact/Contact.module.css";

const PostForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    body: "",
    image: "",
    imageBase64Endcode: "",
  });

  // const [errors, setErrors] = ({
  //     title:'',
  //     body:'',
  //     imageBase64Endcode:'',
  //     })

  const { loading, error, post } = useSelector((state) => state.createPost);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      const reader = new FileReader();
      const selectedFile = e.target.files[0];
      console.log("selectedFile", selectedFile);
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        console.log("base64Url", reader.result);
        setState({
          ...state,
          image: value,
          imageBase64Endcode: reader.result,
        });
      };
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  // const validate = (title,body,imageBase64Endcode) => {
  //         if(!title){
  //                 setErrors({...errors, title:'provide title'})
  //                 return
  //         }
  //         if(!body){
  //             setErrors({...errors, title:'provide body'})
  //             return
  //     }

  //     if(!imageBase64Endcode){
  //         setErrors({...errors, title:'provide image'})
  //         return
  //      }
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    const { title, body, imageBase64Endcode } = state;
    //validation
    //  validate(title,body, imageBase64Endcode)
    console.log(title, body, imageBase64Endcode);
    dispatch(createPostAction(title, body, imageBase64Endcode));

    setState({
      title: "",
      body: "",
      image: "",
      imageBase64Endcode: "",
    });
  };

  return (
    <div>
      <form className={styles.form}>
        <Input
          inputProperties={{
            type: "text",
            name: "title",
            placeholder: "title",
            value: state.title,
            onChange: changeHandler,
          }}
        />

        <Input
          inputProperties={{
            type: "file",
            name: "image",
            placeholder: "image",
            value: state.image,
            onChange: changeHandler,
          }}
        />

        <textarea
          col={10}
          row={30}
          onChange={changeHandler}
          name="body"
          placeholder="Enter content"
        ></textarea>

        {error && <Message message="dangerMessage">{error}</Message>}

        {loading ? (
          <Spinner />
        ) : (
          <Button text="Submit" onClick={submitHandler} />
        )}
      </form>
    </div>
  );
};

export default PostForm;
