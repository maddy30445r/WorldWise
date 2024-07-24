import React, { useEffect } from "react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

function Protectedroute({ children }) {
  const { isauth } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      //this starts to work after component is loaded once so initially children return krdega ye
      if (!isauth) navigate("/");
    },
    [isauth, navigate]
  );
  return isauth ? children : null;
}

export default Protectedroute;
