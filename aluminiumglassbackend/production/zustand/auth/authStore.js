import { create } from "zustand"; // Importing the create function from zustand for state management
import axios from "axios"; // Importing axios for making HTTP requests
import { BACKEND_local_RRl } from "./../../urls"; // Importing the backend URL for API calls

// Creating the useAuthStore with Zustand
const useAuthStore = create((set) => ({
  // Initial state of the store
  user: null, // Represents the user data
  token: null, // Represents the authentication token
  loading: false, // Indicates if an authentication action is in progress
  error: null, // Stores any error messages during authentication

  // Action to sign in a user
  signin: async (email, password) => {
    // Resetting the error state before attempting signin
    set({ loading: true, error: null });
    try {
      // Making a POST request to the signin API with email and password
      const response = await axios.post(`${BACKEND_local_RRl}/auth/signin`, {
        email,
        password,
      });

      // Check if the response contains user and token
      if (response.data.token) {
        // Setting the state with the response data and resetting loading
        set({
          token: response.data.token,
          loading: false,
        });
        console.log("Signin successful"); // Logging the signin success
      } else {
        throw new Error("Invalid credentials"); // Handle invalid credentials
      }
    } catch (error) {
      // Resetting the error state after the authentication attempt
      set({ loading: false, error: null });
      // Catching any errors that occur during signin and setting the error state with a detailed error message
      if (error.response?.status === 400) {
        if (error.response?.data?.message === "User not found") {
          set({
            loading: false,
            error: "User not found",
          });
        } else if (error.response?.data?.message === "Invalid password") {
          set({
            loading: false,
            error: "Invalid password",
          });
        }
      } else {
        set({
          loading: false,
          error: error.response?.data?.message || "Signin failed. Try again.",
        });
      }
      console.error(
        "Signin error:",
        error.response
          ? error.response.data.message
          : error.message || "Error signing in"
      ); // Logging the signin error
    }
  },

  // Action to sign out a user
  signout: () => {
    // Setting the user and token state to null to sign out
    set({ user: null, token: null });
    console.log("Signout successful"); // Logging the signout success
  },

  // Action to sign up a user
  signup: async (name, address, email, password) => {
    set({ loading: true, error: null }); // Set loading state and clear any previous errors

    try {
      const response = await axios.post(`${BACKEND_local_RRl}/auth/signup`, {
        name,
        address,
        email,
        password,
      });

      if (response.data.token) {
        // Set the state in Zustand store
        set({
          token: response.data.token,
          loading: false,
          error: null,
        });

        console.log("Signup successful!");
      } else {
        throw new Error("No token received from server");
      }
    } catch (error) {
      // Handle specific error cases
      if (error.response?.status === 400) {
        set({
          loading: false,
          error: "User already exists",
        });
      } else {
        set({
          loading: false,
          error: error.response?.data?.message || "Error signing up",
        });
      }
      console.error(
        "Signup error:",
        error.response?.data?.message || error.message
      );
    }
  },
}));

// Exporting the useAuthStore for use in other parts of the application
export default useAuthStore;
