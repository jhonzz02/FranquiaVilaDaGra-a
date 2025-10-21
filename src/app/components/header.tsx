import Image from "next/image";
import Carrossel from "./carrossel";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center bg-[#2E201B] backdrop-blur-sm px-6 py-2">
        <div>
          <Image
            src="/logo.jpg"
            alt="Logo Vila da Graça"
            width={60}
            height={60}
            priority
            className="rounded-full"
          />
        </div>
        <div
          style={{ fontFamily: '"Times New Roman", serif' }}
          className="font-bold text-xl"
        >
          CONTATO
        </div>
      </header>
      {/* hero */}
      <div
        className="bg-[#0A0A0A] h-[500px] flex items-center justify-center flex-col"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1 className="text-[#7f580a] text-[42px] text-center">
          VILA DA GRAÇA
        </h1>
        <h2 className="text-[#7f580a] text-[30px] text-center">
          Um universo de sabores. A sua vila, o seu momento.
        </h2>
      </div>
      {/* section 2 ------------------------------------ */}
      <div
        className="bg-white flex gap-6 justify-center items-center w-full py-6"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        {/* imagem do ambiente */}
        <div className="flex items-center justify-center w-full max-w-[400px]">
          <Image
            src="/VILA.png"
            alt="Ambiente"
            width={300}
            height={300}
            priority
            className="w-[400px] h-[400px] object-cover overflow-hidden"
          />
        </div>
        {/* texto */}
        <div className="flex flex-col text-black w-full max-w-[400px]">
          <h1 className="text-[42px] text-left">Nossa Essência</h1>
          <p className="text-[21px] text-left">
            A Vila da Graça nasceu da paixão por unir pessoas através da boa
            comida. Somos um espaço onde a diversidade de sabores encontra a
            tradição, criando uma experiência única. Dos lanches rápidos aos
            jantares especiais, cada prato é uma celebração. <br /> Mais que um
            restaurante, somos um ponto de encontro de amigos e famílias. Um
            lugar para criar memórias, compartilhar risadas e, claro, saborear o
            melhor da gastronomia.
          </p>
        </div>
      </div>
      {/* section 3 ------------------------------------ */}
      <div
        className="bg-[#2E201B] flex flex-col justify-center items-center py-6"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1 className="text-[42px]">Um Cardápio para Todos os Gostos</h1>
        <p className="text-[21px]">
          Explore a variedade que faz da nossa vila, a sua vila.
        </p>
        {/* carrossel */}
        <Carrossel />
      </div>
      {/* section 4 ------------------------------------ */}
      <div></div>
    </div>
  );
}
