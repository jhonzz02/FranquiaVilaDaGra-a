import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#453109] backdrop-blur-sm px-8 py-4">
      <div>
        <Image
          src="/logo.jpg"
          alt="Logo Vila da Graça"
          width={80}
          height={80}
          priority
          className="rounded-full"
        />
      </div>
      <div style={{ fontFamily: '"Times New Roman", serif' }}  className="font-bold text-xl">CONTATO</div>
    </header>
  );
}
