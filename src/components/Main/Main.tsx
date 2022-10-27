import { Button } from "components";
import { useTypedSelector } from "hooks";
import { FC } from "react";
import "./style.scss";

const Main: FC = () => {
  const { jokes } = useTypedSelector(state => state.jokeReducer)
  
  return (
    <div className="main">
      <Button />
      
      {jokes.map((joke) => (
        <div key={joke.id} className="main__plit">
          {joke.value}
        </div>
      ))}
    </div>
  )
}

export default Main;