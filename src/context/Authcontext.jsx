import { createContext, useContext, useReducer } from "react";

const Authcontext = createContext();
const initialState = { user: null, isauth: false, error: "" };
function reducer(state, action) {
  switch (action.type) {
    case "wronglogin":
      return { ...state, error: "Invalid credentials" };

    case "login":
      return { ...state, user: action.payload, isauth: true, error: "" };
    case "logout":
      return { ...state, user: null, isauth: false };
    default:
      throw new Error("Invalid action");
  }
}

const FAKE_USER = {
  name: "Madhur",
  email: "mittalmadhur19@gmail.com",
  password: "123456",
  avatar: "https://i.pravatar.cc/100?u=hgg",
};
function Authprovider({ children }) {
  const [{ user, isauth, error }, dispatch] = useReducer(reducer, initialState);

  function login(email, pass) {
    // simulate login logic
    if (email == FAKE_USER.email && pass == FAKE_USER.password) {

      dispatch({ type: "login", payload: FAKE_USER });
    } else {
        
      dispatch({ type: "wronglogin" });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <Authcontext.Provider
      value={{
        user,
        isauth,
        login,
        logout,
        error
      }}>
      {children}
    </Authcontext.Provider>
  );
}

function useAuth() {
  const context = useContext(Authcontext);
  if (context == undefined) throw new Error("Context not available here");
  return context;
}

export { Authprovider, useAuth };
