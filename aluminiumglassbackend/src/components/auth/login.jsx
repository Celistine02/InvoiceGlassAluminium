import React, { useState, useEffect } from "react";
import schoolManagementPlatform from "./school-management-platform.jpg";
import ClipLoader from "react-spinners/ClipLoader";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./errorModal";
import useAuthStore from "./../../../production/zustand/auth/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");
  const navigate = useNavigate();
  const { signin, loading, error, token } = useAuthStore();

  // Handle error display
  useEffect(() => {
    if (error) {
      setShowErrorModal(true);
      setErrorModalMessage(error);
    }
  }, [error]);

  // Navigate to dashboard only when token is available
  useEffect(() => {
    if (token) {
      console.log("Navigating to dashboard...");
      navigate("/dashboard", { replace: true }); // Ensure navigation happens and replace history
    }
  }, [token, navigate]);

  const handleCreateAccount = () => navigate("/signup");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate that both fields are filled
    if (!email || !password) {
      setShowErrorModal(true);
      setErrorModalMessage("Email and password cannot be blank.");
      return; // Prevent further processing if fields are empty
    }

    try {
      await signin(email, password);
    } catch (signinError) {
      setShowErrorModal(true);
      setErrorModalMessage(signinError.message || "Login failed");
    }
  };

  const handleCloseErrorModal = () => setShowErrorModal(false);

  const handleGoogleLoading = () => {
    window.location.href =
      "http://localhost:8000/schoolGoogleAuth/auth/google/callback";
  };

  const handleFacebookLoading = () =>
    console.log("Facebook loading functionality not implemented yet.");
  const handleBursorLogin = () => navigate("/bursor-login"); // Function to navigate to Bursor login

  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-gray-200 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Sign in to Sakiso Stream
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                onClick={handleCreateAccount}
              >
                Create a free account
              </a>
            </p>

            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      placeholder="Enter email to get started"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    onClick={handleLogin}
                  >
                    {loading ? <ClipLoader size={24} /> : "Log in"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                onClick={handleGoogleLoading}
              >
                Sign in with Google <FaGoogle className="ml-2" />
              </button>

              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                onClick={handleFacebookLoading}
              >
                Sign in with Facebook <FaFacebook className="ml-2" />
              </button>

              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                onClick={handleBursorLogin}
              >
                Or continue as Bursor
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-100 sm:px-6 lg:px-8">
          <div>
            <img
              className="w-full mx-auto"
              src={schoolManagementPlatform}
              alt="School Management Platform"
            />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-gray-800">
                Welcome to Sakiso Stream
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                A school management platform that simplifies your daily tasks.
              </p>

              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showErrorModal && (
        <ErrorModal
          errorMessage={errorModalMessage}
          onClose={handleCloseErrorModal}
        />
      )}
    </section>
  );
};

export default Login;
