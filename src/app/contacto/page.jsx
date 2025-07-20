"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#fff0f5] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#6d2e46] mb-4"
        >
          Contáctanos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 text-lg mb-10"
        >
          ¿Tienes dudas, pedidos especiales o quieres saludarnos? Estamos felices de ayudarte.
        </motion.p>

        {/* Botón WhatsApp */}
        <motion.a
          href="https://wa.me/56948995994" // Reemplaza con el número real
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-[#6d2e46] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#5b243d] transition mb-10"
        >
          <FaWhatsapp className="text-2xl" />
          Escríbenos por WhatsApp
        </motion.a>

        {/* Formulario */}
        <motion.form
          action="https://formsubmit.co/tucorreo@dominio.com" // Reemplaza con tu correo
          method="POST"
          className="grid gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Oculta el captcha de formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

          <div>
            <label className="block mb-1 text-[#6d2e46] font-medium">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6d2e46]"
            />
          </div>
          <div>
            <label className="block mb-1 text-[#6d2e46] font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6d2e46]"
            />
          </div>
          <div>
            <label className="block mb-1 text-[#6d2e46] font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6d2e46]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#6d2e46] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5b243d] transition w-full"
          >
            Enviar Mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}
