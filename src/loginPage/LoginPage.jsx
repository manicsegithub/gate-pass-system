// src/components/LoginPage.jsx
import LoginForm from './LoginForm';
import background from "./assets/background.jpg";

const LoginPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage:`url(${background})`  }}>
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
