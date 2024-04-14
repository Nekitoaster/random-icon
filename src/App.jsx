import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomIcon } from "./icons";
import './App.css'

function App() {
  const [icon, setIcon] = useState(() => getRandomIcon());
  const [isLoading, setIsLoading] = useState(false);

  const showRandomIcon = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Выбираем случайную иконку
      const randomIcon = getRandomIcon();
      setIcon(randomIcon);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="randomizer-block">
      <div className="icon-window">
        {isLoading ? (
          <p className='loader'>Loading...</p>
        ) : (
          icon && (
            <span className='icon'>
              <FontAwesomeIcon icon={icon} size="4x" />
            </span>
          )
        )}
      </div>
      <br />
      <button disabled={isLoading} onClick={showRandomIcon}>
        Show Random Icon
      </button>
    </div>
  );
}

export default App;
