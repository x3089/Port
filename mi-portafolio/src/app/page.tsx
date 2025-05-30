"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Imagen de Fondo Épica */}
      <div className="relative h-screen w-full">
        <Image
          src="/background.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Sección Principal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-5xl font-bold mb-4 animate__animated animate__bounceIn">
          <h1>Hello, I am Astra 👋</h1>
        </div>
        <div className="mb-4">
          <Image
            src="/profile.jpg" // Cambia el nombre a tu imagen
            alt="Perfil"
            width={180}
            height={180}
            className="rounded-full border-4 border-pink-500 animate__animated animate__fadeIn"
          />
        </div>
        <p className="text-xl font-light">
          Un estudiante de Bachillerato y un desarrollador en crecimiento.
        </p>
      </div>

      {/* Detalles */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-lg mb-4">Soy un programador autodidacta, apasionado por la tecnología y siempre en constante aprendizaje.</p>

        {/* Intereses */}
        <h3 className="text-xl font-semibold mb-4">Intereses</h3>
        <ul className="list-disc pl-10">
          <li>Programación 💻</li>
          <li>Juegos Indie 🎮</li>
          <li>Escuchar Música 🎧</li>
        </ul>

        {/* Estudio y Aprendizaje */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Aprendiendo & Practicando</h3>
        <p className="text-lg mb-4">
          Mi viaje autodidacta en la programación comenzó en verano, y aunque empecé tarde, sigo creando proyectos de software.
        </p>

        {/* Enlaces */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Enlaces</h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/x3089"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-pink-500 hover:bg-pink-600 p-4 rounded-lg transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://discord.com/users/1260165451091148905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-purple-500 hover:bg-purple-600 p-4 rounded-lg transition duration-300"
          >
            Discord
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-20 p-4">
        <p className="text-sm">&copy; 2025 Astra. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
