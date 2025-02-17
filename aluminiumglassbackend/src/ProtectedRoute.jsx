import { Navigate } from "react-router-dom";
import useAuthStore from './../production/zustand/auth/authStore';

const ProtectedRoute = ({ children }) => {
  const { token: authToken, loading } = useAuthStore(); // Access the token and loading state from the Auth Zustand store

  // If the user is loading, you might want to show a loading indicator (optional)
  // if (loading) {
  //   return <div>Loading...</div>; // Placeholder for loading state
  // }

  // If the user is not authenticated, redirect to the login page
  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated, render the children (protected page)
  return children;
};

export default ProtectedRoute;
