import { useEffect, useState } from "react";
import "./App.css";
// import SallyPromoCard from "./components/card";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    // <div
    //   style={{
    //     backgroundImage: "",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh",
    //     width: "100vw",
    //     maxWidth: "2560px", // Limita a largura máxima

    //     margin: "0 auto", // Centraliza a div se necessário
    //   }}
    //   className=" flex flex-col items-center  justify-center bg-no-repeat w-full  py-3 px-1
    //   h-full bg-center bg-auto bg-[url('/assets/bgdesktop.png')] overflow-hidden "
    // >
    //   <div className="gap-10 flex flex-col">
    //     <h1 className=" text-[#AB4154] text-3xl font-bold">
    //       EM BREVE <br />
    //       NOVIDADES...
    //     </h1>
    //     <SallyPromoCard />
    //   </div>
    // </div>
    <div>
      {isMobile ? (
        <img
          src="/assets/bgmobile.jpg"
          alt="Mobile"
          className="w-full max-h-vw object-cover overflow-hidden"
        />
      ) : (
        <img src="/public/assets/imgdktp.svg" className="w-full h-fit" />
      )}
    </div>
  );
}

export default App;
