"use client";

import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

export const TextInput = ({
  className,
  errorMessage,
  iconBefore,
  iconAfter,
  name,
  label,
  ...rest
}) => {
  return (
    <InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
      {!!iconBefore && (
        <InputGroup.Text id="basic-addon1">
          <i className={`pi pi-${iconBefore}`}></i>
        </InputGroup.Text>
      )}

      <FloatingLabel controlId={name} label={label}>
        <Form.Control
          name={name}
          placeholder={label}
          isInvalid={!!errorMessage}
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
