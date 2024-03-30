import { useContextSelector } from "use-context-selector";
import { AppContext } from "../components/context/AppProvider";

function useAppContext() {
  const context = useContextSelector(AppContext, (state) => state);

  return context;
}

export default useAppContext;
