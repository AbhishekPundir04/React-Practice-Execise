import { useState } from "react";
import LifeCycle from "./LiifeCyclewithEffect";

const AppFile = () => {
  const [text, setText] = useState(false);


  return (
    <div>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        Show/Button
      </button>
      {text &&<LifeCycle />}
    </div>
  );
};
export default AppFile;
