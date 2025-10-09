import { UserProvider } from "./newUserContext";
import { RoleProvider } from "./RoleContext";
import SignupPage from "./SignupPage";

export default function Page() {
  return (

    <UserProvider>
      <RoleProvider>
       <SignupPage />
      </RoleProvider>
    </UserProvider>

  );
}
