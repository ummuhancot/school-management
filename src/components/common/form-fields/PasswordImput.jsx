"use client";

import { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

export const PasswordImput = (props) => {
  const {
    className,
    errorMessage,
    iconBefore,
    iconAfter,
    name,
    label,
    ...rest
  } = props;

  const [type, setType] = useState("password");

  const handleClick = () => {
    setType(Prev => Prev === "password" ? "text" : "password")
  }

  return (
    <InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
      
        <InputGroup.Text id="basic-addon1" onClick={handleClick}
        style={{cursor:"pointer"}}>

        {type === "password" ? (<i className="pi pi-eye-slash"></i>) :
          (<i className="pi pi-eye"></i>)}
          
        </InputGroup.Text>
      

      <FloatingLabel controlId={name} label={label}>
        <Form.Control
          name={name}
          placeholder={label}
          isInvalid={!!errorMessage}
          type={type}
          {...rest}
        />
        <Form.Control.Feedback type="invalid" style={{ position: "absolute" }}>
          {errorMessage}
        </Form.Control.Feedback>
      </FloatingLabel>

      {!!iconAfter && (
        <InputGroup.Text id="basic-addon1">
          <i className={`pi pi-${iconAfter}`}></i>
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};
