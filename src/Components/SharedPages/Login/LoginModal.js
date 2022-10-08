import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/useAuthState";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [user] = useAuthState(auth);

  const handleLoginMOdal = () => {
    setIsRegister(!isRegister);
    setIsLogin(!isLogin);
  };

  return (
    <div className={`${user ? "hidden" : !isOpenModal ? "hidden" : ""}`}>
      <input type="checkbox" id="loginModal" className="modal-toggle" />
      <label htmlFor="loginModal" className="modal cursor-pointer">
        <label className="modal-box relative">
          {/* login form start */}
          {isLogin && (
            <LoginForm handleLoginMOdal={handleLoginMOdal} setIsOpenModal={setIsOpenModal} />
          )}
          {isRegister && <RegisterForm handleLoginMOdal={handleLoginMOdal} />}
        </label>
      </label>
    </div>
  );
};

export default LoginModal;
