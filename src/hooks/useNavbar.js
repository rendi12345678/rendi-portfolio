import useNavbarContext from "./useNavbarContext";

function useNavbar() {
  const { navbarRef, hamburgerMenuRef } = useNavbarContext();

  const toggleClassList = (element, value) => {
    element.current.classList.toggle(value);
  };

  const toggleNav = () => {
    toggleClassList(navbarRef, "active");
    toggleClassList(hamburgerMenuRef, "active");
    console.log(hamburgerMenuRef);
  };

  return { toggleNav, hamburgerMenuRef };
}

export default useNavbar;
