import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useAuth } from "./../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [newUserName, setNewUserName] = useState("");
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserPasswordRepeat, setNewUserPasswordRepeat] = useState("");

  const [newUserCreatedSuccessfully, setNewUserCreatedSuccessfully] =
    useState(false);

  const { authState, setAuthState } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/authenticate", {
      userName: email,
      userPassword: password,
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        console.log("TOKEN: " + data.jwtToken);
        setAuthState((prevAuthState) => {
          return {
            userName: data.user.userName,
            firstName: data.user.userFirstName,
            role: data.user.role[0].roleName,
            jwtToken: data.jwtToken,
            isAuthenticated: true,
          };
        });
        setLoginError(false);
        return;
      })
      .then((data) => {
        console.log("In redirect block");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/registerNewUser", {
      userName: newUserName,
      userFirstName: newUserFirstName,
      userLastName: newUserLastName,
      userPassword: newUserPassword,
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        console.log(data.userName + " registered successfully");
        setNewUserCreatedSuccessfully(true);
        setNewUserFirstName("");
        setNewUserLastName("");
        setNewUserName("");
        setNewUserPassword("");
        return;
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
      });
  };

  const lockClosedIcon = (
    <FontAwesomeIcon
      icon={faLock}
      className="h-5 w-5 text-green-500 group-hover:text-green-400"
      aria-hidden="true"
    />
  );

  const loginErrorMessage = (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">LOGIN ERROR:</span> The username or password
      you entered is incorrect.
    </div>
  );

  const passwordMismatchMessage = (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">LOGIN ERROR:</span> The repeated password
      values don't match.
    </div>
  );

  const newUserCreatedMessage = (
    <div
      className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="font-medium">Success:</span>New user created
      successfully.
    </div>
  );

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">
            Sign in to your account
          </h2>
        </div>
        {/* START login form */}
        <form
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={(e) => handleLogin(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {lockClosedIcon}
              </span>
              Sign in
            </button>
          </div>
        </form>
        {/* END Login form */}
        {loginError && loginErrorMessage}
        {/* START register form */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">
            Or, create a new account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={(e) => handleRegister(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-username" className="sr-only">
                Username
              </label>
              <input
                id="new-username"
                name="new-username"
                type="text"
                autoComplete="new-username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Username"
                onChange={(e) => {
                  setNewUserName(e.target.value);
                  setNewUserCreatedSuccessfully(false);
                }}
              />
            </div>
            <div>
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="firstname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                onChange={(e) => {
                  setNewUserFirstName(e.target.value);
                  setNewUserCreatedSuccessfully(false);
                }}
              />
            </div>
            <div>
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="lastname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                onChange={(e) => {
                  setNewUserLastName(e.target.value);
                  setNewUserCreatedSuccessfully(false);
                }}
              />
            </div>

            <div>
              <label htmlFor="new-password" className="sr-only">
                Password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => {
                  setNewUserPassword(e.target.value);
                  setNewUserCreatedSuccessfully(false);
                }}
              />
            </div>

            <div>
              <label htmlFor="repeat-password" className="sr-only">
                Repeat Password
              </label>
              <input
                id="repeat-password"
                name="repeat-password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Repeat Password"
                onChange={(e) => {
                  setNewUserPasswordRepeat(e.target.value);
                  setNewUserCreatedSuccessfully(false);
                }}
              />
            </div>
          </div>
          {newUserCreatedSuccessfully && newUserCreatedMessage}
          {newUserPassword != newUserPasswordRepeat && passwordMismatchMessage}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {lockClosedIcon}
              </span>
              Sign up
            </button>
          </div>
        </form>
        {/* END register form */}
      </div>
    </div>
  );
}

export default Login;
