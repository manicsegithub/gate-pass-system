import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import background from './assets/background.jpg'; 


const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmission = (data) => {
    console.log(data);
    reset();
  };

  // Watch password field to match it with confirm password
  const password = watch("password");

  return (  <div className=" min-h-screen flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage:`url(${background})`  }}>
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-8">
      
       <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-white font-bold text-center mb-6">Register</h1>
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

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute text-white m-3" />
          <input
            type="email"
            id="Email"
            placeholder="Email"
            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none ${
              errors.Email ? "border-red-500" : ""
            }`}
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
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

        {/* Confirm Password Field */}
        <div className="relative">
          <FaLock className="absolute text-white m-3" />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white outline-none ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-400/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-full transition-all duration-1000 px-5 py-2 text-center mr-2 mb-2"
          type="submit"
        >
          Register
        </button>

        {/* Already Have Account Link */}
        <div className="text-center text-white mt-4">
          Already have an account?{" "}
          <a href="#" className="text-purple-300 hover:underline">
            Login
          </a>
        </div>
      </form>
    </div>
    </div>
  </div>
   
  );
};

export default RegisterForm;
