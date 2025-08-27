import Link from "next/link";
import userMenuData from "@/helpers/data/user-menu.json";
import { UserMenu } from "./UserMenu";
import { auth } from "@/auth";

export const AuthMenu = async () => {
  const session = await auth();

  const role = session?.user?.role;
  const userMenu = role ? userMenuData[role?.toLowerCase()] : null;

  return (
    <>
      {role ? (
        <UserMenu session={session} userMenu={userMenu} />
      ) : (
        <Link href="/login" className="btn btn-primary">
          <i className="pi pi-user"></i> Login
        </Link>
      )}
    </>
  );
};
