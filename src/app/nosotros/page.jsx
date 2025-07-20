"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div>
      {/* Sección 1 - Historia inicial */}
      <section id="nosotros" className="bg-[#fff0f5] h-screen flex items-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/nosotros.jpg"
              alt="Dueña de Pastelería Damasco"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d2e46] mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Pastelería Damasco nació en el corazón de Cerro Placeres con una receta familiar, una batidora heredada y el sueño de una madre por endulzar momentos importantes.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed text-lg">
              Hoy, seguimos trabajando con las mismas manos, el mismo cariño y la pasión por la repostería casera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Texto Inspirador de Transición */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#fff0f5] text-center py-8 px-4"
      >
        <p className="text-xl md:text-2xl text-[#6d2e46] font-semibold max-w-4xl mx-auto">
          "En cada porción hay una historia, un recuerdo y el amor de una familia que hornea con el corazón."
        </p>
      </motion.div>

      {/* Separador Animado */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#6d2e46] h-2 origin-top"
      ></motion.div>

      {/* Sección 2 - Continuación */}
      <section id="nosotros_2" className="bg-[#fff0f5] h-screen flex items-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/nosotros.jpg"
              alt="Pasteles de la Pastelería Damasco"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d2e46] mb-4">
              Tradición que se Siente
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Cada torta que ves en nuestras vitrinas fue hecha a diario con ingredientes seleccionados, sabores auténticos y respeto por la tradición.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed text-lg">
              No vendemos solo dulces: compartimos recuerdos, celebraciones y amor por el detalle.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
