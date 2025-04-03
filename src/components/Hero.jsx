import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";


const Hero = () => {
    const [personal, setPersonal] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Load personal data
        setPersonal(personalData);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                Cargando...
            </div>
        );
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center">


                <div className="md_:w-1/2 text-center md:text-center animate-fade-in">
                    <p className="text-secondary text-lg mb-2">Hola, soy</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white ">
                        {personal.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-secondary mb-6">
                        {personal.profession}
                    </h2>

                    <p className=" text-white mb-6 text-2xl">
                    {personal.shortBio}
                    </p>

                     <div class="flex items-center justify-center">
                    <div class="grid grid-cols-5 md:grid-cols-10 content-between gap-12 pt-5 pb-12 ">
                        <FaHtml5 className="text-white text-4xl"/>
                        <FaCss3Alt className="text-white text-4xl"/>
                        <RiJavascriptFill className="text-white text-4xl"/>
                        <RiReactjsLine className="text-white text-4xl"/>
                        <RiTailwindCssFill className="text-white text-4xl"/>
                        <FaBootstrap className="text-white text-4xl"/>
                        <TbBrandNodejs className="text-white text-4xl"/>
                        <TbBrandMysql className="text-white text-4xl"/>
                        <SiPhp className="text-white text-4xl"/>
                        <FaDocker className="text-white text-4xl"/>
                    </div>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#projects"
                            className="inline-block bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-lg shadow-lg transition-colors font-bold"
                        >
                            Ver Proyectos
                        </a>
                        <a href="#contact"
                            className="inline-block bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-lg shadow-lg border border-gray-200 transition-colors font-bold"
                        >
                            Contacto
                        </a>
                    </div>







                </div>





 
                
            </div>
        </section>
    );
};

export default Hero;
