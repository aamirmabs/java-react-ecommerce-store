import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function authContextFunction() {
  console.log("authContextFunction() executed");
}

export const initialAuthContextValue = {
  userName: null,
  firstName: null,
  role: null,
  jwtToken: null,
  isAuthenticated: false,
};

// {
//     "user": {
//         "userName": "admin123",
//         "userFirstName": "admin",
//         "userLastName": "admin",
//         "userPassword": "",
//         "role": [
//             {
//                 "roleName": "Admin",
//                 "roleDescription": "Admin role"
//             }
//         ]
//     },
//     "jwtToken": ""
// }

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialAuthContextValue);

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
