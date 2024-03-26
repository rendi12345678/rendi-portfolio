import { useContextSelector } from "use-context-selector";
import { NavbarContext } from "../components/context/NavbarProvider";

function useNavbarContext() {
  const context = useContextSelector(NavbarContext, (state) => state);

  return context;
}

export default useNavbarContext;
