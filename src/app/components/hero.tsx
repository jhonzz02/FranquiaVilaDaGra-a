
export default function Hero() {
  return (
    <div className="min-h-[420px] flex gap-8 justify-center items-center bg-[#E6DAA8]">
      <div className="flex flex-col text-black">
        <h1>Vila Da Graça</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam
          porro labore ipsum vel, qui reprehenderit, nobis nam at enim vitae
          numquam fugiat sit dolorem! Incidunt quod perferendis repellat quidem!
        </p>
        <div className="flex gap-8">
          <button>Torne-se um franqueado</button>
          <button>Conheça o modelo da franquia</button>
        </div>
      </div>
      <div style={{ fontFamily: '"Times New Roman", serif' }} >
        <h1 className="text-[#453109] text-[36px] text-center">VILA DA <br/> GRAÇA</h1>
        <h2 className="text-[#7f580a] text-[23px] text-center">A SUA VILA</h2>
      </div>
    </div>
  );
}
