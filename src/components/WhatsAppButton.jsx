import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello Gratia Estates, I am interested in a Gurgaon property. Please share suitable project options.");
  return (
    <a
      href={`https://wa.me/919109776155?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Gratia Estates on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
    >
      <MessageCircle size={27} />
    </a>
  );
}
