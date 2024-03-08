import { useState } from "react";

const useSecureTextEntry = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    toggleShowPassword,
  };
};

export default useSecureTextEntry;
