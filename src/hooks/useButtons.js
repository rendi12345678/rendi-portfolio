import withButton from "../components/hoc/withButton";
import Button from "../components/ui/Button";

const PrimaryButton = withButton(Button, {
  color: "blue",
});

function useButtons() {
  return { PrimaryButton };
}

export default useButtons;
