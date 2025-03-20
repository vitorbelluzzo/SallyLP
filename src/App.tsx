import "./App.css";
import logo from "./assets/logo.svg";
import cardDesktop from "./assets/card.svg";
import cardMobile from "./assets/cardmobile.svg"; // Imagem para telas menores
import embreve from "./assets/embrevenovidades.svg";
import fundoDesktop from "./assets/FundoDesktopSally.svg";
import fundoMobile from "./assets/fundomobile.svg";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [logo, cardDesktop, cardMobile, embreve];

    const backgroundImage =
      window.innerWidth > 1024 ? fundoDesktop : fundoMobile;

    const loadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    Promise.all([...images.map(loadImage), loadImage(backgroundImage)]).then(
      () => {
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <svg
          className="animate-spin  w-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.1,16c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5,0.3-0.6,0.9-0.4,1.4c0.3,0.5,0.9,0.6,1.4,0.4C5.2,17.1,5.3,16.5,5.1,16C5.1,16,5.1,16,5.1,16z M4.7,6.6C4.2,6.4,3.6,6.5,3.3,7C3.1,7.5,3.2,8.1,3.7,8.4C4.2,8.6,4.8,8.5,5.1,8C5.3,7.5,5.2,6.9,4.7,6.6z M20.3,8.4c0.5-0.3,0.6-0.9,0.4-1.4c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5,0.3-0.6,0.9-0.4,1.4C19.2,8.5,19.8,8.6,20.3,8.4z M4,12c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S4,12.6,4,12z M7.2,18.8c-0.5,0.1-0.9,0.7-0.7,1.2c0.1,0.5,0.7,0.9,1.2,0.7c0.5-0.1,0.9-0.7,0.7-1.2C8.3,19,7.8,18.7,7.2,18.8z M21,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S21.6,11,21,11z M20.3,15.6c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0,0C20.9,16.5,20.8,15.9,20.3,15.6z M17,3.3c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0,0C17.6,4.2,17.5,3.6,17,3.3z M16.8,18.8c-0.5-0.1-1.1,0.2-1.2,0.7c-0.1,0.5,0.2,1.1,0.7,1.2c0.5,0.1,1.1-0.2,1.2-0.7C17.6,19.5,17.3,19,16.8,18.8z M12,20c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,20,12,20z M12,2c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,2,12,2z"
            fill="#e36592"
          />
        </svg>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto   ">
        <div className=" h-30 flex items-center   ">
          <img src={logo} className="w-auto lg:h-32 h-20 " alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center  max-w-xl mx-auto ">
        {/* Exibir no desktop (≥1024px) */}
        <a
          target="_blank"
          href="https://www.instagram.com/sallybarboza?igsh=MWZnejJjNmZqYnZjOQ=="
        >
          <img
            src={cardDesktop}
            className="hidden lg:block w-full h-full"
            alt="Card Desktop"
            loading="lazy"
          />
        </a>

        <div className=" flex flex-col p-6 bottom-20  ">
          <img
            src={embreve}
            className="lg:hidden w-80 p-4"
            alt="Em breve"
            loading="lazy"
          />

          {/* Exibir no mobile (<1024px) */}
          <a
            target="_blank"
            href="https://www.instagram.com/sallybarboza?igsh=MWZnejJjNmZqYnZjOQ=="
          >
            <img
              src={cardMobile}
              className="block lg:hidden p-3"
              alt="Card Mobile"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
