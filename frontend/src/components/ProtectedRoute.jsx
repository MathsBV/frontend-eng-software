import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (user == null || user.mail == null) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;
