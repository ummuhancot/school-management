import { PageHeader } from "@/components/common/page-header/PageHeader";

import { LoginForm } from "@/components/login/LoginForm";
import { Spacer } from "@/components/common/spacer/Spacer";

export const metadata = {
  title: "Login",
  description: "Login your account to access all of our content and features.",
};

export default function LoginPage() {
  return (
    <>
      <PageHeader title="Login" />
      <Spacer />
      <LoginForm />
      <Spacer />
    </>
  );
}
