"use client";

import { Alert, Card } from "react-bootstrap";
import { TextInput } from "../common/form-fields/TextInput";
import { SubmitButton } from "../common/form-fields/SubmitButton";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth-actions";
import "./login-form.scss";
import { PasswordImput } from "../common/form-fields/PasswordImput";

export const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction);

  return (
    <div className="login-form">
      <Card>
        <Card.Body>
          <h4>Please Enter Your Username &amp; Password</h4>

          <form action={formAction}>
            <TextInput
              label="Username"
              name="username"
              className="mb-3"
              iconBefore="user"
              errorMessage={state?.errors?.username}
              defaultValue="admin326"
            />

            <PasswordImput
              label="Password"
              name="password"
              className="mb-3"
              iconBefore="key"
              errorMessage={state?.errors?.password}
              defaultValue="123123Qwe."
            />

            {!state?.ok && state?.message && (
              <Alert variant="danger">{state?.message}</Alert>
            )}
            <SubmitButton title="Login" pending={isPending} />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};
