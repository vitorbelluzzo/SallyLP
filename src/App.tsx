import "./App.css";
import SallyPromoCard from "./components/card";

function App() {
  return (
    <div
      style={{
        backgroundImage: "",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        maxWidth: "2560px", // Limita a largura máxima
     
        margin: "0 auto", // Centraliza a div se necessário
      }}
      className="  flex flex-col items-center  justify-center bg-no-repeat w-full 
      h-full bg-center bg-auto bg-[url('/assets/bgdesktop.png')] "
    >
      <div className="gap-10 flex flex-col">
        <h1 className=" text-[#AB4154] text-3xl font-bold">
          EM BREVE <br />
          NOVIDADES...
        </h1>
        <SallyPromoCard />
      </div>
    </div>
  );
}

export default App;
