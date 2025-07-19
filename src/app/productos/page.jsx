"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import productos from "../../data/productos.json";

export default function Catalogo() {
  return (
    <section id="productos" className="bg-[#fffaf5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#6d2e46] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Catálogo
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
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
