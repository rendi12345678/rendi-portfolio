import { useEffect } from "react";

function useDelay({ delay, ref }) {
  useEffect(() => {
    ref.current.style = `--delay: ${delay};`;
  }, [delay]);
}

export default useDelay;
