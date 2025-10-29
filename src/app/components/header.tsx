import Image from "next/image";
import Carrossel from "./carrossel";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Header() {
  return (
    <div>
      {/* bg-[#2E201B] */}
      <header className="flex justify-between items-center px-6 py-2 sticky top-0 z-50 bg-[#0A0A0A] backdrop-blur-sm">
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
        <nav
          className="flex gap-6 max-sm:hidden font-bold text-xl"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#modelos">Modelos</a>
          <a href="#franquia">Franquia</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      {/* hero */}
      <div
        className="bg-[#0A0A0A] h-[calc(100vh-76px)] flex items-center justify-center flex-col"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1 className="text-[#7f580a] text-[42px] text-center font-bold">
          VILA DA GRAÇA
        </h1>
        <h2 className="text-[#7f580a] text-[30px] text-center">
          Um universo de sabores. A sua vila, o seu momento.
        </h2>
      </div>
      {/* section 2 sobre ------------------------------------ */}
      <div
        id="sobre"
        className="bg-white flex gap-6 max-lg:flex-col justify-center items-center w-full py-12 px-6 min-h-[600px]"
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
          <h1 className="text-[42px] text-left max-lg:text-center font-bold">
            Nossa Essência
          </h1>
          <p className="text-[21px] text-left max-lg:text-center">
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
      {/* section 3 cardapio (carrossel) ------------------------------------ */}
      <div
        id="cardapio"
        className="bg-[#2E201B] flex flex-col justify-center items-center py-12 min-h-[600px]"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1 className="text-center text-[42px] font-bold">
          Um Cardápio para Todos os Gostos
        </h1>
        <p className="text-center text-[21px]">
          Explore a variedade que faz da nossa vila, a sua vila.
        </p>
        {/* carrossel */}
        <Carrossel />
      </div>
      {/* section 4 modelos ------------------------------------ */}
      <div
        id="modelos"
        className="flex flex-col justify-center items-center gap-6 px-6 py-12 bg-white"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <h1 className="text-[42px] text-black text-center font-bold">
          Dois Modelos, Uma Só Paixão
        </h1>
        <p className="text-[30px] text-black text-center">
          Escolha o formato de franquia que mais combina com seu perfil
          empreendedor.
        </p>
        {/* cards */}
        <div className="flex max-lg:flex-col justify-center items-center gap-6">
          {/* left card */}
          <div className="flex flex-col items-center justify-center max-w-[400px] min-h-[400px] max-h-[400px] bg-[#2E201B] gap-6 p-6 rounded-2xl">
            <Image
              src="/logo.jpg"
              alt="Logo Vila da Graça"
              width={80}
              height={80}
              priority
              className="rounded-full"
            />
            <h1 className="text-[34px] text-center">Vila Da Graça</h1>
            <p className="text-[20px] text-center">
              A experiência completa. Um restaurante com ambiente sofisticado,
              serviço de mesa e nosso cardápio completo. Ideal para centros
              urbanos e pontos com grande fluxo de pessoas.
            </p>
          </div>
          {/* right card */}
          <div className="flex flex-col items-center justify-center max-w-[400px] min-h-[400px] max-h-[400px] bg-[#2E201B] gap-6 p-6 rounded-2xl">
            <Image
              src="/logo-express.jpg"
              alt="Logo Vila da Graça"
              width={80}
              height={80}
              priority
              className="rounded-full"
            />
            <h1 className="text-[34px] text-center">Vila da Graça Express</h1>
            <p className="text-[20px] text-center">
              O mesmo sabor com foco em agilidade. Perfeito para praças de
              alimentação, quiosques e pontos de delivery, com um menu otimizado
              para rapidez e conveniência.
            </p>
          </div>
        </div>
      </div>
      {/* section 5 franquia ------------------------------------ */}
      <div
        id="franquia"
        className=" py-12 bg-[#2E201B]"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        <div className="flex flex-col justify-center items-center gap-6 px-6">
          <h1 className="text-[42px] text-center">
            Seja um Franqueado de Sucesso
          </h1>
          <p className="text-[21px] text-center">
            Leve a marca Vila da Graça para sua cidade. Oferecemos um modelo de
            negócio lucrativo com suporte completo, treinamento e a força de uma
            marca consolidada.
          </p>
          <a
            href=""
            className="text-[#2E201B] text-[24px] font-bold bg-[#C5A57E] py-2 px-4 rounded-2xl"
          >
            Quero Fazer Parte!
          </a>
        </div>
      </div>
      {/* section 6 contato ------------------------------------ */}
      <div
        id="contato"
        className="flex flex-col justify-center items-center gap-6 py-12 bg-[#2E201B]"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        {/* social media */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/viladagraca.salvador?utm_source=ig_web_button_share_sheet&igsh=eGZ2cTM1OThoN3Jv"
            target="blank"
          >
            <FaInstagram size={30} />
          </a>

          <a href="" target="blank">
            <IoLogoWhatsapp size={30} />
          </a>
        </div>
        {/* copyright */}
        <div>
          <p className="text-center">
            © 2025 Vila da Graça Franquias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
