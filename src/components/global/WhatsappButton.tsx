// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsAppButton() {
//   const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!; // 🔁 replace with real number

//   const message = encodeURIComponent(
//     "Hello Arqene, I am interested in your furniture collection."
//   );

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         fixed
//         top-24
//         right-0
//         z-50
//         w-14
//         h-14
//         rounded-full
//         bg-[#25D366]
//         flex
//         items-center
//         justify-center
//         shadow-lg
//         hover:scale-110
//         transition
//         duration-300
//       "
//       aria-label="Chat on WhatsApp"
//     >
//       <FaWhatsapp className="text-white text-2xl" />
//     </a>
//   );
// }

// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsAppButton() {
//   const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

//   const message = encodeURIComponent(
//     "Hello arqené. I wish to explore a bespoke commission for my space"
//   );

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         fixed
//         bottom-40
//         right-0
//         z-50
//         w-14
//         h-14
//         rounded-full
//         bg-[#25D366]
//         flex
//         items-center
//         justify-center
//         shadow-lg
//         hover:scale-110
//         active:scale-95
//         transition
//         duration-300
//       "
//       aria-label="Chat on WhatsApp"
//     >
//       <FaWhatsapp className="text-white text-2xl" />
//     </a>
//   );
// }


// "use client";

// export default function WhatsAppButton() {
//   const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

//   const message = encodeURIComponent(
//     "Hello arqené. I wish to explore a bespoke commission for my space"
//   );

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         fixed
//         bottom-40
//         right-0
//         z-50
//         w-14
//         h-14
//         rounded-full
//         bg-[#f4f4f5]
//         flex
//         items-center
//         justify-center
//         shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//         hover:scale-110
//         active:scale-95
//         transition-all
//         duration-300
//       "
//       aria-label="Chat on WhatsApp"
//     >
//       {/* Outline WhatsApp SVG */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="#2f2a25"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-7 h-7"
//       >
//         <path d="M21 12a9 9 0 1 1-16.2-5.4L3 21l6.6-1.8A9 9 0 1 1 21 12z" />
//         <path d="M8.5 9.5c.5-1 1-1 1.5-.5l1 1c.3.3.3.8 0 1.1l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.3-.3.8-.3 1.1 0l1 1c.5.5.5 1 0 1.5-.7.7-1.7 1-2.7.8-3.2-.8-5.7-3.3-6.5-6.5-.2-1 .1-2 .8-2.7z" />
//       </svg>
//     </a>
//   );
// }

"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const message = encodeURIComponent(
    "Hello arqené. I wish to explore a bespoke commission for my space"
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-40
        right-0
        z-50
        w-14
        h-14
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-13 h-13 rounded-full">
        <Image
          src="/WhatsappIcon.jpeg"  //  replace with your image name
          alt="WhatsApp"
          fill
          className="object-contain rounded-full"
          priority
        />
      </div>
    </a>
  );
}