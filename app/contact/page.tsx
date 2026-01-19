import { ContactCard } from "@/components/contact-card";

export default function ContactPage() {
    const contacts = [
        {
            type: "LINKEDIN" as const,
            redirectUrl: "https://www.linkedin.com/in/ahmadirfaan", // Fill with your LinkedIn URL
        },
        {
            type: "WHATSAPP" as const,
            redirectUrl: "https://wa.me/6285707121623", // Fill with your WhatsApp URL (e.g., )
        },
        {
            type: "EMAIL" as const,
            redirectUrl: "mailto:irfaan.hibatullah@gmail.com", // Fill with your email (e.g., mailto:your.email@example.com)
        },
        {
            type: "INSTAGRAM" as const,
            redirectUrl: "https://www.instagram.com/irfaanhibatullah", // Fill with your Instagram URL
        },
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 sm:mb-4 md:mb-5">
                    Contact Me
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
                    Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Choose your preferred method below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {contacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        type={contact.type}
                        redirectUrl={contact.redirectUrl}
                    />
                ))}
            </div>
        </section>
    );
}