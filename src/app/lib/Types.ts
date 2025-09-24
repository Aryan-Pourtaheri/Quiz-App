export interface UserType {
    email: string,
    password: string
}

export interface NewUserType {
  name: string;
  surname: string;
  DateOfBirth: string;
  email: string;
  password: string;
}

export interface UserContextType {
  newUser: NewUserType;
  setNewUser: React.Dispatch<React.SetStateAction<NewUserType>>;
}