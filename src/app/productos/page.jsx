"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import productos from "../../data/productos.json";

const tipos = [
  "Todos",
  "Torta",
  "Kuchen",
  "Cheesecake",
  "Pie",
  "Pastel",
  "Brazo",
  "Panqueque"
];

export default function Catalogo() {
  const [filtro, setFiltro] = useState("Todos");

  const productosFiltrados = productos.filter((producto) => {
    if (filtro === "Todos") return true;
    return producto.tipo.toLowerCase().includes(filtro.toLowerCase());
  });

  return (
    <section id="productos" className="bg-[#fffaf5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#6d2e46] mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Catálogo
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${filtro === tipo
                  ? "bg-[#6d2e46] text-white border-[#6d2e46]"
                  : "bg-white text-[#6d2e46] border-[#6d2e46] hover:bg-[#f9dbd8]"}`}
            >
              {tipo}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={index}
              className="bg-[#fce8e0] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-60">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#6d2e46]">{producto.nombre}</h3>
                <p className="text-sm text-gray-700 mt-2">{producto.descripcion}</p>
                <p className="text-lg text-[#6d2e46] font-bold mt-4">${producto.precio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
