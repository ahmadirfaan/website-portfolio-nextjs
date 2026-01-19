import { ContactCard } from "@/components/contact-card";


export default function ContactPage() {
    return (
        <section className="py-24 space-y-10" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            <h1 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Contact Me</h1>

            <ContactCard
                type="LINKEDIN"
                redirectUrl="https://www.linkedin.com/in/ahmadirfaan"
                icon=""
            />

            <ContactCard
                type="WHATSAPP"
                redirectUrl="https://www.wa.me/6285707121623"
                icon=""
            />


            <ContactCard
                type="INSTAGRAM"
                redirectUrl="https://www.wa.me/6285707121623"
                icon=""
            />

        </section>
    );
}