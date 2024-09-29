import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const LoginForm = () => {
  
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,  
  } = useForm();

  
  useEffect(() => {
    const savedUsername = localStorage.getItem("rememberedUsername");
    if (savedUsername) {
      setValue("Username", savedUsername); 
      setRememberMe(true); 
    }
  }, [setValue]); 

  
  const onSubmission = (data) => {
    console.log(data);

    
    if (rememberMe) {
      localStorage.setItem("rememberedUsername", data.Username);
    } else {
      
      localStorage.removeItem("rememberedUsername");
    }

    reset(); 
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-white font-bold text-center mb-6">Login</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmission)}>
        {/* Username Field */}
        <div className="relative">
          <FaUser className="absolute text-white m-3" />
          <input
            type="text"
            id="Username"
            placeholder="Username"
            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none ${
              errors.Username ? "border-red-500" : ""
            }`}
            {...register("Username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username cannot exceed 20 characters",
              },
            })}
          />
          {errors.Username && (
            <p className="text-red-500 text-sm mt-1">{errors.Username.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute text-white m-3" />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain one uppercase, one lowercase, and one number",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-white gap-7 sm:gap-10">
          <label className="flex items-center max-sm:text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            Remember me
          </label>

          <Link
            className="hover:underline max-sm:text-sm"
            to="/gate-pass-system/forgot-password"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-[15px] w-full transition-all duration-1000 px-5 py-2 text-center mr-2 mb-2"
          type="submit"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="text-center text-white mt-4 max-sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/gate-pass-system/register"
            className="text-purple-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
