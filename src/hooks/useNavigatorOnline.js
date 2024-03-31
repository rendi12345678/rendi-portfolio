import { useEffect, useState } from "react";

const useNavigatorOnLine = () => {
  const [status, setStatus] = useState(() => {
    if (navigator.onLine) {
      console.log("Connected to network.");
      return true;
    } else {
      console.log("Offline network.");
      return false;
    }
  });

  useEffect(() => {
    window.ononline = (e) => {
      console.log("Connected to network.");
      setStatus(true);
    };
    window.onoffline = (e) => {
      console.log("Network connection lost.");
      setStatus(false);
    };
  }, [status]);

  return status;
};

export default useNavigatorOnLine;
