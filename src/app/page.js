'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-[#FF6B1A] to-[#F29325] text-[#6d2e46] min-h-screen">
      
      {/* Imagen de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'url("/img/f1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000055] to-[#00000088] z-10" />

      {/* Contenido principal centrado */}
      <div
        id="home"
        className="relative z-20 flex flex-col justify-center items-center text-center min-h-screen px-4"
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold tracking-wide mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Pastelería Damasco
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-2xl max-w-xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Repostería artesanal desde Cerro Placeres. Tortas, pasteles y dulces con sabor a hogar.
        </motion.p>

        <motion.a
          href="https://wa.me/56948995994"
          className="bg-[#fff0f5] text-[#6d2e46] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#fde0e9] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hacer Pedido por WhatsApp
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-white text-sm z-20">
        © 2025 Pastelería Damasco · Valparaíso, Chile
      </footer>
    </main>
  );
}
