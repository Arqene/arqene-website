// "use client";

// const CAPABILITIES = [
//   "Advanced CNC machining with 0.1mm tolerance",
//   "Traditional hand‑finishing by master craftsmen",
//   "Climate‑controlled manufacturing facility",
//   "In‑house veneer matching and bookmatching",
//   "Custom metalwork and hardware fabrication",
//   "Upholstery and soft furnishing integration",
//   "Full‑scale mock‑ups and prototyping",
//   "Certified installation teams nationwide",
// ];

// export default function CraftsmanshipSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl lg:max-w-6xl xl:max-w-7xl px-6 lg:px-12">
//         {/* Heading – updated to The काrkhana with color theme */}
//         <div className="mb-14">
//           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide leading-tight text-[#111827]">
//             The{" "}
//             <span className="text-[#c1171a]">का</span>
//             <span className="text-[#111827]">rkhana</span>
//           </h2>
//           <p className="mt-4 text-base lg:text-lg text-[#6b7280]">
//             Originality doesn't announce itself. 
// It's built in silence—one joint, one surface, one finish at a time.
// Our workshop is where intention becomes artifact. 
// Where wood is understood before it's touched, and machinery amplifies mastery—
// never replaces it.
// This is how permanence is made
//           </p>
//         </div>

//         {/* Content: big image left, big list right */}
//         <div className="grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">
//           {/* Large image */}
//           <div className="w-full aspect-[4/3] lg:aspect-[5/4] bg-[#d4d4d8] overflow-hidden rounded-2xl">
//             <img
//               src="/craftsmanship.jpg"
//               alt="Craftsmanship"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Numbered list */}
//           <div className="divide-y divide-[#e5e7eb] text-left">
//             {CAPABILITIES.map((text, index) => (
//               <div
//                 key={text}
//                 className="group flex cursor-pointer items-center gap-5 py-4 lg:py-5
//                            transition-transform duration-200 hover:-translate-y-1.5"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e7eb]">
//                   <span className="text-sm lg:text-base font-semibold text-[#4b5563]">
//                     {index + 1}
//                   </span>
//                 </div>

//                 <p
//                   className="flex-1 text-sm lg:text-lg leading-relaxed text-[#4b5563]
//                              transition-colors duration-200 group-hover:text-[#111827]"
//                 >
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import Link from "next/link";

// const CAPABILITIES = [
//   "Advanced CNC machining with 0.1mm tolerance",
//   "Traditional hand‑finishing by master craftsmen",
//   "Climate‑controlled manufacturing facility",
//   "In‑house veneer matching and bookmatching",
//   "Custom metalwork and hardware fabrication",
//   "Upholstery and soft furnishing integration",
//   "Full‑scale mock‑ups and prototyping",
//   "Certified installation teams nationwide",
// ];

// export default function CraftsmanshipSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl lg:max-w-6xl xl:max-w-7xl px-6 lg:px-12">
//         {/* Heading – The काrkhana */}
//         <div className="mb-14">
//           <h2 className="font-serif italic text-2xl md:text-3xl lg:text-4xl  uppercase tracking-[0.08em] text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">का</span>
//             <span className="text-[#111827]">rkhana</span>
//           </h2>
//           <p className="mt-4 text-base lg:text-lg text-[#6b7280]">
//             Originality doesn't announce itself. It's built in silence—one joint, one
//             surface, one finish at a time. Our workshop is where intention becomes
//             artifact. Where wood is understood before it's touched, and machinery
//             amplifies mastery—never replaces it. This is how permanence is made.
//           </p>
//         </div>

//     {/* Content: image left, list + button right */}
// <div className="grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-start lg:items-stretch">
//   {/* Image frame – grows to match list height on lg+ */}
//   <div className="w-full h-64 sm:h-80 lg:h-full lg:min-h-[24rem] xl:min-h-[28rem] bg-[#d4d4d8] overflow-hidden rounded-3xl">
//     <img
//       src="/craftmanship-images/craftsmanship.jpeg"
//       alt="Craftsmanship"
//       className="h-full w-full object-cover grayscale"
//     />
//   </div>

//   {/* Numbered list + button */}
//   <div className="text-left">
//     <div className="divide-y divide-[#e5e7eb]">
//       {CAPABILITIES.map((text, index) => (
//         <div
//           key={text}
//           className="group flex cursor-pointer items-center gap-5 py-4 lg:py-5
//                      transition-transform duration-200 hover:-translate-y-1.5"
//         >
//           <div className="flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-[#e5e7eb]">
//             <span className="text-sm lg:text-base font-semibold text-[#4b5563]">
//               {index + 1}
//             </span>
//           </div>

//           <p
//             className="flex-1 text-sm lg:text-lg leading-relaxed text-[#4b5563]
//                        transition-colors duration-200 group-hover:text-[#111827]"
//           >
//             {text}
//           </p>
//         </div>
//       ))}
//     </div>

//             {/* Read More button (same style as earlier sections) */}
//        <Link href="/thekarkhana">
//               <button
//                 className="mt-10 inline-flex items-center justify-center
//                            px-9 py-3
//                            border border-[#d9d9d4]
//                            bg-[#f4f4f5]
//                            text-[11px] font-semibold tracking-[0.18em] uppercase
//                            text-[#5b554b]
//                            transition-colors transition-transform duration-200
//                            hover:bg-[#dbdbdc] hover:border-[#cbcbc7]
//                            hover:-translate-y-1 
//                            cursor-pointer"
//               >
//                 READ MORE
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import Link from "next/link";

// const CAPABILITIES = [
//   {
//     title: "Climate-Controlled Sanctum",
//     description:
//       "Wood stabilized. Humidity constant. Precision before the first cut.",
//   },
//   {
//     title: "CNC Precision Engineering",
//     description:
//       "Tolerance to the micron. Every time. Technology serving the intent.",
//   },
//   {
//     title: "Artisanal Hand-Finishing",
//     description:
//       "Decades of apprenticeship in every surface. The machine cuts. The hand perfects.",
//   },
//   {
//     title: "Veneer Artistry",
//     description:
//       "Book-matched by eye, not algorithm. Grain patterns selected. Never settled.",
//   },
//   {
//     title: "In-House Metal Fabrication",
//     description:
//       "Custom hardware. Bespoke finishes. No outsourcing. No exceptions.",
//   },
//   {
//     title: "Full-Scale Prototyping",
//     description:
//       "Build it. Test it. Perfect it. Then build for the commission.",
//   },
//   {
//     title: "Integrated Upholstery",
//     description:
//       "Frame and fabric. One studio. Unified vision, uncompromised execution.",
//   },
//   {
//     title: "Total In-House Control",
//     description:
//       "From first cut to last wrap. Every workshop. Every artisan. Ours.",
//   },
//   {
//     title: "Zero-Defect Assembly",
//     description:
//       "Assembled in full. Inspected to the standard. Delivered. Period.",
//   },
// ];

// export default function CraftsmanshipSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] pt-16 pb-20 lg:pt-20 lg:pb-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-12 font-serif">

//         {/* ================= HEADING ================= */}
//         <div className="mb-16 max-w-3xl">
//           <h2 className="font-serif italic text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.08em] text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">का</span>
//             <span className="text-[#111827]">rkhana</span>
//           </h2>

//           <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#6b7280]">
//             Originality doesn't announce itself. It's built in silence—one joint,
//             one surface, one finish at a time. Our workshop is where intention
//             becomes artifact. Where wood is understood before it's touched,
//             and machinery amplifies mastery—never replaces it.
//             This is how permanence is made.
//           </p>
//         </div>

//         {/* ================= CONTENT GRID ================= */}
//         <div className="grid gap-16 lg:gap-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">

//           {/* ================= IMAGE ================= */}
//           <div className="relative w-full h-80 sm:h-96 lg:h-full lg:min-h-[32rem] overflow-hidden rounded-[40px] bg-[#d4d4d8]">
//             <img
//               src="/craftmanship-images/craftsmanship.jpeg"
//               alt="Craftsmanship Workshop"
//               className="h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
//             />
//           </div>

//           {/* ================= LIST ================= */}
//           <div className="divide-y divide-[#e5e7eb]">

//             {CAPABILITIES.map((item, index) => (
//               <div key={item.title} className="py-8 group">

//                 <div className="flex items-center justify-center gap-6">

//                   {/* Number */}
//                   <div className="min-w-[48px] text-xl lg:text-3xl font-medium tracking-widest text-[#9ca3af]">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   {/* Text Content */}
//                   <div className="flex-1">

//                     {/* Title */}
//                     <h3 className="font-serif text-xl lg:text-2xl text-[#2f2a25] mb-3 transition-colors duration-300 group-hover:text-[#111827]">
//                       {item.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-sm lg:text-base leading-relaxed text-[#6b7280] max-w-xl">
//                       {item.description}
//                     </p>

//                   </div>
//                 </div>

//               </div>
//             ))}

//             {/* ================= BUTTON ================= */}
//             <div className="pt-12">
//               <Link href="/thekarkhana">
//                 <button
//                   className="inline-flex items-center justify-center
//                              px-10 py-3
//                              border border-[#d9d9d4]
//                              bg-[#f4f4f5]
//                              text-[11px] font-semibold tracking-[0.18em] uppercase
//                              text-[#5b554b]
//                              transition-all duration-300
//                              hover:bg-[#dbdbdc]
//                              hover:-translate-y-1.5"
//                 >
//                   READ MORE
//                 </button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Climate-Controlled Sanctum",
    description:
      "Wood stabilized. Humidity constant. Precision before the first cut.",
  },
  {
    title: "CNC Precision Engineering",
    description:
      "Tolerance to the micron. Every time. Technology serving the intent.",
  },
  {
    title: "Artisanal Hand-Finishing",
    description:
      "Decades of apprenticeship in every surface. The machine cuts. The hand perfects.",
  },
  {
    title: "Veneer Artistry",
    description:
      "Book-matched by eye, not algorithm. Grain patterns selected. Never settled.",
  },
  {
    title: "In-House Metal Fabrication",
    description:
      "Custom hardware. Bespoke finishes. No outsourcing. No exceptions.",
  },
  {
    title: "Full-Scale Prototyping",
    description:
      "Build it. Test it. Perfect it. Then build for the commission.",
  },
  {
    title: "Integrated Upholstery",
    description:
      "Frame and fabric. One studio. Unified vision, uncompromised execution.",
  },
  {
    title: "Total In-House Control",
    description:
      "From first cut to last wrap. Every workshop. Every artisan. Ours.",
  },
  {
    title: "Zero-Defect Assembly",
    description:
      "Assembled in full. Inspected to the standard. Delivered. Period.",
  },
];


// export default function CraftsmanshipSection() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="w-full bg-[#f4f4f5] pt-16 pb-20 lg:pt-20 lg:pb-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-12">

//         {/* HEADING */}
//         <div className="mb-16 max-w-3xl">
//           <h2 className="font-futura uppercase text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] text-[#2f2a25]">
//             The <span className="text-[#c1171a]">का</span>
//             <span className="text-[#111827]">rkhana</span>
//           </h2>

//           <p className="mt-6 font-futura text-base lg:text-lg leading-relaxed text-[#6b7280]">
//              Originality doesn't announce itself. It's built in silence—one joint,
//              one surface, one finish at a time. Our workshop is where intention
//              becomes artifact. Where wood is understood before it's touched,
//              and machinery amplifies mastery—never replaces it.
//              This is how permanence is made.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-16 lg:gap-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">

//           {/* IMAGE */}
//           <div className="relative w-full h-80 sm:h-96 lg:h-full lg:min-h-[32rem] overflow-hidden rounded-[40px] bg-[#d4d4d8]">
//             <img
//               src="/craftmanship-images/craftsmanship.jpeg"
//               alt="Craftsmanship Workshop"
//               className="h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
//             />
//           </div>

//           {/* LIST */}
//           <div className="divide-y divide-[#e5e7eb] mt-10">

//             {CAPABILITIES.map((item, index) => {

//               const isActive = active === index;

//               return (
//                 <div
//                   key={item.title}
//                   className="py-8 cursor-pointer group"
//                   onMouseEnter={() => setActive(index)}
//                 >
//                   {/* FIXED ALIGNMENT */}
//                   <div className="flex gap-6 items-start">

//                     {/* NUMBER */}
//                     <div
//                       className={`
//                         min-w-[48px]
//                         translate-y-1
//                         text-2xl lg:text-3xl
//                         font-futura italic
//                         tracking-widest
//                         transition-colors duration-300
//                         ${
//                           isActive
//                             ? "lg:text-[#4f6d60]"
//                             : "lg:text-[#c2c7c4]"
//                         }
//                         text-[#4f6d60]
//                       `}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </div>

//                     {/* CONTENT */}
//                     <div className="flex-1">

//                       {/* TITLE */}
//                       <h3
//                         className={`
//                           font-luxury italic
//                           text-2xl lg:text-3xl
//                           mb-2
//                           transition-colors duration-300
//                           ${
//                             isActive
//                               ? "lg:text-[#4f6d60]"
//                               : "lg:text-[#c2c7c4]"
//                           }
//                           text-[#4f6d60]
//                         `}
//                       >
//                         {item.title}
//                       </h3>

//                       {/* DESCRIPTION */}
//                       <p
//                         className={`
//                           font-futura
//                           text-sm lg:text-base
//                           leading-relaxed
//                           max-w-xl
//                           transition-colors duration-300
//                           ${
//                             isActive
//                               ? "lg:text-[#2f2a25]"
//                               : "lg:text-[#9ca3af]"
//                           }
//                           text-[#2f2a25]
//                         `}
//                       >
//                         {item.description}
//                       </p>

//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* BUTTON */}
//             <div className="pt-12">
//               <Link href="/thekarkhana">
//                 <button className="mt-10 inline-flex items-center justify-center px-10 py-3 border border-[#d9d9d4] bg-[#f4f4f5] text-[11px] font-semibold font-futura tracking-[0.18em] uppercase text-[#5b554b] transition-all duration-300 hover:bg-[#cbcbc7] hover:border-[#cbcbc7] hover:-translate-y-1 cursor-pointer">
//                   READ MORE
//                 </button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function CraftsmanshipSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#f4f4f5] pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* HEADING */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-futura uppercase text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] text-[#2f2a25]">
            The <span className="text-[#c1171a]">का</span>
            <span className="text-[#111827]">rkhana</span>
          </h2>

          <p className="mt-6 font-futura text-base lg:text-lg leading-relaxed text-[#6b7280]">
            Originality doesn't announce itself. It's built in silence—one joint,
            one surface, one finish at a time. Our workshop is where intention
            becomes artifact. Where wood is understood before it's touched,
            and machinery amplifies mastery—never replaces it.
            This is how permanence is made.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">

          {/* IMAGE */}
          <div className="relative w-full h-80 sm:h-96 lg:h-full lg:min-h-[32rem] overflow-hidden rounded-[40px] bg-[#d4d4d8]">
            <img
              src="/craftmanship-images/craftsmanship.jpeg"
              alt="Craftsmanship Workshop"
              className="h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
          </div>

          {/* LIST */}
          <div
            className="divide-y divide-[#e5e7eb] mt-10"
            onMouseLeave={() => setActive(null)}
          >
            {CAPABILITIES.map((item, index) => {
              const isActive = active === index;
              const isDimmed = active !== null && !isActive;

              return (
                <motion.div
                  key={item.title}
                  className="py-8 cursor-pointer group"
                  onMouseEnter={() => setActive(index)}
                  animate={{
                    scale: isActive ? 1.04 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex gap-6 items-start">

                    {/* NUMBER */}
                    <div
                      className={`
                        min-w-[48px]
                        translate-y-1
                        text-2xl lg:text-3xl
                        font-futura italic
                        tracking-widest
                        transition-all duration-300
                        ${
                          isDimmed
                            ? "text-[#c2c7c4]"
                            : "text-[#4f6d60]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">

                      {/* TITLE */}
                      <h3
                        className={`
                          font-luxury italic
                          text-2xl lg:text-3xl
                          mb-2
                          transition-all duration-300
                          ${
                            isDimmed
                              ? "text-[#c2c7c4]"
                              : "text-[#4f6d60]"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className={`
                          font-futura
                          text-sm lg:text-base
                          leading-relaxed
                          max-w-xl
                          transition-all duration-300
                          ${
                            isDimmed
                              ? "text-[#9ca3af]"
                              : "text-[#2f2a25]"
                          }
                        `}
                      >
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* BUTTON */}
            <div className="pt-12">
              <Link href="/thekarkhana">
                <button className="mt-10 inline-flex items-center justify-center px-12 py-4 rounded-full border border-[#2f2a25] bg-transparent text-[13px] font-futura font-semibold text-[#2f2a25] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[2px] tracking-[0.16em]">
                  READ MORE
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}