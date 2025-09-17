import { UserProvider } from "./newUserContext";
import SignupPage from "./SignupPage";

export default function Page() {
  return (
    <UserProvider>
      <SignupPage />
    </UserProvider>
  );
}
