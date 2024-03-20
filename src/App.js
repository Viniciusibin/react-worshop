import React from "react";
import Input from "./components/Input";
import logo from "./assets/logo.svg";
import github from "./assets/github.svg";
import wpp from "./assets/wpp.svg";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center justify-center  ">
        <img src={logo} style={{ width: "600px" }} className="m-1" />
        <div className="bg-white bg-opacity-20 p-5 rounded-3xl w-2/6">
          <p className="text-white text-2xl m-2">Receba sua Proof-Of-Attandance NFT</p>
          <p className="text-white text-base m-2">Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.</p>
          <p className="text-white text-base m-2">
            Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
            <a className="text-sky-500 hover:underline" href="https://metamask.io/download/">
              Clique aqui.
            </a>
          </p>
          <form className="text-white flex flex-col">
            <Input label="Seu nome" description="Esse nome será gravado no NFT para provar sua presença" placeholder="nome" />
            <Input label="Email" description="Email para receber novidades" placeholder="email@gmail.com" />
            <Input label="Wallet" description="Carteira para receber o NFT na rede Sepolia" placeholder="00.00...0000" type="number" />
            <button className=" mt-5 p-2 rounded-lg bg-blue-700 text-xl ">Gerar NFT</button>
          </form>
        </div>

        <div className="flex flex-row items-center justify-center mt-5">
          <p className=" text-base text-sm ">
            <a className="text-gray-400" href="https://github.com/InteliBlockchain/onboarding">
              Todo o código pode ser encontrado aqui: 
            </a>
          </p>
          <img src={github} style={{ width: "15px" }} />
        </div>
        <div className="flex flex-row mt-5">
          <p className=" text-base items-center justify-center ">
            <a className="text-gray-400 text-sm" href="https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz">
              Caso tenha alguma dúvida:
            </a>
          </p>
          <img src={wpp} style={{ width: "15px" }} />
        </div>
      </div>
    </>
  );
}

export default App;
