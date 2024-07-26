import React, { useEffect, useState } from "react";
import PageNav from "../PageNav";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("mittalmadhur19@gmail.com");
  const [password, setpassword] = useState("123456");
  const { isauth, login, error } = useAuth();
  const[clicked,setclicked]=useState(0);
  const navigate = useNavigate();

  function handlesubmit(e) {
    setclicked(prev=>!prev);
    // console.log(clicked);
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
    // setError((prev) => error);

    // console.log("Error"+error)
  }
  useEffect(() => {
    if(error){

      alert(error);
    }
  

},[clicked]);
  useEffect(
    function () {
      if (isauth) {
        navigate("/app",{replace:true});
      }
    },
    [isauth, navigate]
  );

  return (
    <div className=" p-5">
      <div className="min-w-[[calc(100vw-2.5rem)]] min-h-[calc(100vh-2.5rem)] overflow-auto bg-[#2D3439] p-6 px-8">
        <PageNav />

        <form
          className="productmain mx-auto rounded-md bg-[#42484D] my-16 flex w-[450px] flex-col p-5 gap-2"
          onSubmit={handlesubmit}>
          <label className=" text-white text-lg" htmlFor="email">
            Email Address
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="bg-[#D6DEE0] rounded-md py-[5px] px-1 outline-none"
            name="email"
            id="email"
            type="text"
          />
          <label className=" text-white text-lg" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="bg-[#D6DEE0] rounded-md py-[5px] outline-none px-1"
            name="password"
            id="password"
            type="password"
          />
          {/* <div className="text-black mt-[-5px] text-xs" >{error?`${error}😟`:""} </div> */}
          <button className="self-start my-2 bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase">
            Login
          </button>{" "}
        </form>
      </div>
    </div>
  );
}

export default Login;
