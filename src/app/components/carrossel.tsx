"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Carrossel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1; // velocidade (px/frame)
        scrollContainer.scrollLeft = scrollAmount;

        // Reinicia quando chega ao final
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll(); // inicia animação
  }, []);

  // lista de imagens diferentes
  const images = [
    "/card1.png",
    "/card1.png",
    "/card1.png",
    "/card2.png",
    "/card2.png",
    "/card2.png",
  ];

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-hidden whitespace-nowrap max-w-[800px]"
    >
      <div className="flex gap-6 px-4 py-4 w-max">
        {/* duplica a lista para um loop infinito visual */}
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Imagem ${i + 1}`}
              width={300}
              height={300}
              priority
              className="w-[250px] h-[250px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
