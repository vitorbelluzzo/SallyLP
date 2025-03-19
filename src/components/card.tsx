export default function SallyPromoCard() {
  return (
    <div
      className="rounded-4xl  px-7 py-9 mx-2  max-w-md relative shadow-lg "
      style={{ backgroundColor: "#e6cbd0" }}
    >
      <div className="space-y-6 text-[#a53c4d] tracking-widest">
        <p className="text-md leading-relaxed ">
          Esse será um espaço dedicado às{" "}
          <span className="font-bold"> obras da Sally,</span> onde você poderá
          adquirir arte em azulejos, joias prints, telas e{" "}
          <span className="font-bold">muito mais!</span>
        </p>

        <p className="text-md leading-relaxed">
          Já é possível encomendar <br /> artes personalizadas no <br /> e-mail:{" "}
          <span className="font-bold">contato@sally.art.br</span>
        </p>

        <p className="text-md leading-relaxed">
          Para já pensar qual{" "}
          <span className="font-bold">abraço, voo ou balanço</span> você logo
          logo <span className="font-bold">chamará de seu:</span>
        </p>

        <div className="flex flex-col items-center pt-4 relative ">
          <a
            href=""
            className="font-semibold bg-[#48b7cb] text-white p-2  rounded-full text-center text-xl w-full"
          >
            Acompanhe a pré-venda <br />
            no instagram
          </a>

          <div className="flex items-center mt-6 relative gap-3">
            <img src="/assets/instagramLogo.png" className="w-7" />
            <span className="font-bold text-md" style={{ color: "#dd618b" }}>
              Sallybarboza
            </span>
          </div>

          {/* Curved arrow */}
          <div className="absolute right-0 bottom-1">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 Q 50 0 10 70"
                stroke="#48b7cb"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 70 L 20 65"
                stroke="#48b7cb"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 70 L 10 60"
                stroke="#48b7cb"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
