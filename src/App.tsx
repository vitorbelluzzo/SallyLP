import { Instagram } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="flex  items-center justify-center ">
      <div className="mt-16 bg-rose-200/70 rounded-3xl p-6 backdrop-blur-sm max-w-96 justify-center items-center">
        <p className="text-rose-800 text-lg">
          Esse será um espaço dedicado às{" "}
          <span className="font-bold">obras da Sally</span>, onde você{" "}
          <span className="font-bold">poderá adquirir</span> arte em azulejos,
          joias, prints, telas e <span className="font-bold">muito mais!</span>
        </p>

        <p className="mt-6 text-rose-800 text-lg">
          Já é possível encomendar artes personalizadas no e-mail:{" "}
          <span className="font-bold">contato@sally.art.br</span>
        </p>

        <p className="mt-6 text-rose-800 text-lg">
          Para já pensar qual{" "}
          <span className="font-bold">abraço, voo ou balanço</span> você logo
          logo <span className="font-bold">chamará de seu:</span>
        </p>

        <div className="mt-8 relative">
          <div className="bg-teal-400 text-white text-center py-4 px-6 rounded-full text-lg font-medium">
            Acompanhe a pré-venda no Instagram
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="bg-white/80 rounded-lg px-4 py-2 flex items-center gap-2">
              <Instagram className="text-rose-400 h-6 w-6" />
              <span className="text-rose-500 font-medium">sallybarboza</span>
            </div>
            <div className="absolute -right-4 top-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L12 18L17 13"
                  stroke="#5eead4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V3"
                  stroke="#5eead4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
