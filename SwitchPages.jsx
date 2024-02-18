import React, { useState } from "react";
import MyAccount from "./MyAccount";
import MyAccountLogin from "./MyAccountLogin";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleFormSwitch = (mode) => {
    setIsLogin(mode === "login");
  };

  return (
    <div>
      {isLogin ? (
        <MyAccountLogin onFormSwitch={handleFormSwitch} />
      ) : (
        <MyAccount onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
};

export default AuthContainer;
