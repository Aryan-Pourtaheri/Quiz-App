export interface UserType {
    email: string,
    password: string
}

export type NewUserType = {
  name: string;
  surname: string;
  email: string;
  DateOfBirth: string;
  password: string;
};


export interface UserContextType {
  newUser: NewUserType;
  setNewUser: React.Dispatch<React.SetStateAction<NewUserType>>;
}