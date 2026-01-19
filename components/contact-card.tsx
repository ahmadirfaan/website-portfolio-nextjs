import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function ContactCard({
    type,
    redirectUrl,
    icon,
}: {
    type: "LINKEDIN" | "WHATSAPP" | "INSTAGRAM" | "EMAIL";
    redirectUrl: string;
    icon?: string;
}) {
    const getIcon = () => {
        const iconClass = "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10";
        switch (type) {
            case "LINKEDIN":
                return <FaLinkedin className={iconClass} />;
            case "WHATSAPP":
                return <FaWhatsapp className={iconClass} />;
            case "INSTAGRAM":
                return <FaInstagram className={iconClass} />;
            case "EMAIL":
                return <FaEnvelope className={iconClass} />;
            default:
                return null;
        }
    };

    const getLabel = () => {
        switch (type) {
            case "LINKEDIN":
                return "LinkedIn";
            case "WHATSAPP":
                return "WhatsApp";
            case "INSTAGRAM":
                return "Instagram";
            case "EMAIL":
                return "Email";
            default:
                return "";
        }
    };

    const getDescription = () => {
        switch (type) {
            case "LINKEDIN":
                return "Connect with me on LinkedIn";
            case "WHATSAPP":
                return "Chat with me on WhatsApp";
            case "INSTAGRAM":
                return "Follow me on Instagram";
            case "EMAIL":
                return "Send me an email";
            default:
                return "";
        }
    };

    const getHoverColor = () => {
        switch (type) {
            case "LINKEDIN":
                return "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400";
            case "WHATSAPP":
                return "hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400";
            case "INSTAGRAM":
                return "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400";
            case "EMAIL":
                return "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400";
            default:
                return "";
        }
    };

    return (
        <a
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border border-gray-800 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 transition-all duration-300 bg-gray-900/30 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-cyan-500/10 flex items-center gap-4 sm:gap-5 md:gap-6 ${getHoverColor()}`}
        >
            <div className="flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {getIcon()}
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-cyan-400 group-hover:text-current text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2">
                    {getLabel()}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                    {getDescription()}
                </p>
            </div>
            <div className="flex-shrink-0 text-gray-400 group-hover:text-current group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    );
}
  