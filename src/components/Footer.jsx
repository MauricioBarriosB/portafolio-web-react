import React from "react";
import { BiSolidBriefcase } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
         
              <a href="#home" className="text-xl font-bold text-white flex items-center"> <BiSolidBriefcase/> <span className="px-2">Potafolio</span></a>
         
         
          </div>

          <div className="text-sm text-gray-300_">
            &copy; {currentYear} Todos los derechos reservados
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-green-200 font-bold transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-green-200 font-bold transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-green-200 font-bold transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-200 font-bold transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
