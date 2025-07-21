'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductoCard({ nombre, descripcion, precio, imagen }) {
  return (
    <motion.div
      className="bg-[#fce8e0] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-60">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-fill"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#6d2e46]">{nombre}</h3>
        <p className="text-sm text-gray-700 mt-2">{descripcion}</p>
        <p className="text-lg text-[#6d2e46] font-bold mt-4">${precio}</p>
      </div>
    </motion.div>
  );
}
