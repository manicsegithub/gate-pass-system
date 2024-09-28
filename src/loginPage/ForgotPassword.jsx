import { useForm } from "react-hook-form";
import background from "./assets/background.jpg";
import { GrMail } from "react-icons/gr";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here, send a request to your backend to handle the password reset email
    alert("Password reset link has been sent to your email");
    reset(); // Reset the form after submission
  };

  return (
    <div
      className=" min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl text-white font-bold text-center mb-6">
            Forgot Password
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <GrMail className="absolute text-white m-3" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-400 bg-opacity-20 text-white placeholder-white outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500  text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-800 dark:focus:ring-red-100 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
