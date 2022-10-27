import { useActions } from "hooks";
import { FC } from "react";
import "./style.scss";

const Button: FC = () => {
  const { fetchJoke } = useActions();

  return (
    <button 
      className="chuck-button"
      onClick={fetchJoke}
    >
      <span>
        MORE!!!
      </span>
    </button>
  );
}

export default Button