import "./App.css";
import logo from "./assets/logo.svg";
import cardDesktop from "./assets/card.svg";
import cardMobile from "./assets/cardmobile.svg"; // Imagem para telas menores
import embreve from "./assets/embrevenovidades.svg";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto   ">
        <div className=" h-30 flex items-center   ">
          <img src={logo} className="w-auto lg:h-32 h-20 " alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center  max-w-xl mx-auto ">
        {/* Exibir no desktop (≥1024px) */}
        <img
          src={cardDesktop}
          className="hidden lg:block w-full h-full"
          alt="Card Desktop"
        />

        <div className=" flex flex-col p-6 bottom-20  ">
          <img src={embreve} className=" lg:hidden w-80 p-4  " alt="" />

          {/* Exibir no mobile (<1024px) */}
          <img
            src={cardMobile}
            className="block lg:hidden p-3"
            alt="Card Mobile"
          />
        </div>
      </div>
    </>
  );
}

export default App;
