import React, { useState, useEffect } from "react";
import contactData from "../data/contact.json";

import { ImMail } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setContact(contactData);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="py-20 flex items-center justify-center">Cargando...</div>
        );
    }

    // Social media icon mapping
    const getIcon = (iconName) => {
        const icons = {
            linkedin: (<FaLinkedinIn className="text-[44px]" />),
            github: (<TbBrandGithubFilled className="text-[44px]" />),
            whatsapp: (<RiWhatsappFill className="text-[44px]" />),
            mail: (<MdMail className="text-[44px]" />),
            web: (<TbWorldWww className="text-[44px]" />)
        };
        return icons[iconName] || null;
    };

    return (
        <section id="contact" className="bg-muted">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Por mayor información o consultas escribir al siguiente correo: <a href={`mailto:${contact.email}`} className="text-secondary hover:underline font-bold"> {contact.email}</a>.
                    </p>

                </div>

                <div className="max-w-4xl mx-auto glass-card p-4 md:p-4">
                    <div className="flex flex-col items-center space-y-2">


                        <div className="w-full pt-1">
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                Redes Sociales y Enlaces
                            </h3>
                            <div className="flex justify-center flex-wrap gap-6">
                                {contact.socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center group"
                                    >
                                        <div className="flex items-center justify-center text-secondary hover:text-gray-700 transition-all">
                                            {getIcon(social.icon)}
                                        </div>
                                        <span className="mt-2 text-gray-700">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
