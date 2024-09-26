// src/components/LoginForm.jsx
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-white font-bold text-center mb-6">Login</h1>
      <form className="space-y-6">
        <div className="relative">
          <FaUser className="absolute text-white left-3 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none "
          />
        </div>
        <div className="relative">
          <FaLock className="absolute text-white left-3 top-1/2 transform -translate-y-1/2" />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none"
          />
        </div>
        <div className="flex justify-between items-center text-white gap-10">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
        <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm w-full transition-all duration-1000 px-5 py-2 text-center mr-2 mb-2"
    type="button">Login</button>
        <div className="text-center text-white mt-4">
          Don&apos;t have an account? <a href="#" className="text-purple-300 hover:underline">Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
