// // "use client";

// // import { useEffect, useRef } from "react";
// // import Link from "next/link";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const PROJECTS = [
// //   {
// //     id: "01",
// //     name: "Artevo Residence Lobby",
// //     tag: "High-Rise Residence",
// //     image: "/projects/lobby.jpg",
// //   },
// //   {
// //     id: "02",
// //     name: "Linea Penthouse",
// //     tag: "Private Penthouse",
// //     image: "/projects/penthouse.jpg",
// //   },
// //   {
// //     id: "03",
// //     name: "Brune Gallery Suite",
// //     tag: "Cultural Space",
// //     image: "/projects/gallery.jpg",
// //   },
// //   {
// //     id: "04",
// //     name: "Oak & Stone Villa",
// //     tag: "Luxury Villa",
// //     image: "/projects/villa.jpg",
// //   },
// //   {
// //     id: "05",
// //     name: "Marble Atrium",
// //     tag: "Corporate HQ",
// //     image: "/projects/atrium.jpg",
// //   },
// //   {
// //     id: "06",
// //     name: "Bespoke Boardroom",
// //     tag: "Workspace",
// //     image: "/projects/boardroom.jpg",
// //   },
// // ];

// // export default function ProjectsSection() {
// //   const sectionRef = useRef<HTMLDivElement | null>(null);
// //   const trackRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     const track = trackRef.current;
// //     if (!section || !track) return;

// //     const containerWidth = section.clientWidth;
// //     const totalScroll = track.scrollWidth - containerWidth;
// //     if (totalScroll <= 0) return;

// //     const ctx = gsap.context(() => {
// //       // autoplay horizontal movement
// //       const autoTween = gsap.to(track, {
// //         x: -totalScroll,
// //         duration: 30, // slower/faster autoplay
// //         ease: "none",
// //         repeat: -1,
// //         yoyo: true,
// //         paused: true,
// //       });

// //       // start/stop autoplay when section is in view
// //       ScrollTrigger.create({
// //         trigger: section,
// //         start: "top 90%",   // when section is near viewport
// //         end: "bottom 10%",
// //         onEnter: () => autoTween.play(),
// //         onEnterBack: () => autoTween.play(),
// //         onLeave: () => autoTween.pause(),
// //         onLeaveBack: () => autoTween.pause(),
// //       });
// //     }, section);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
// //     >
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
// //         <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
// //           The <span className="text-[#c1171a]">शै</span>
// //           <span className="text-[#2f2a25]">lee</span>
// //         </h2>
// //       </div>

// //       {/* Horizontal track */}
// //       <div className="relative">
// //         <div
// //           ref={trackRef}
// //           className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
// //         >
// //           {PROJECTS.map((project) => (
// //             <article
// //               key={project.id}
// //               onMouseEnter={() => {
// //                 window.dispatchEvent(new Event("cursor-small-enter"));
// //               }}
// //               onMouseLeave={() => {
// //                 window.dispatchEvent(new Event("cursor-small-leave"));
// //               }}
// //               className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
// //             >
// //               <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
// //                 <img
// //                   src={project.image}
// //                   alt={project.name}
// //                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
// //                 />
// //               </div>

// //               <div className="mt-6 text-center space-y-1">
// //                 <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
// //                   {project.tag}
// //                 </p>
// //                 <p className="text-lg italic text-[#3b342c]">
// //                   {project.name}
// //                 </p>
// //               </div>
// //             </article>
// //           ))}

// //           <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
// //         </div>
// //       </div>

// //       <div className="mt-16 flex justify-center">
// //         <Link href="/projects">
// //           <button
// //             className="inline-flex items-center justify-center
// //                        px-9 py-3
// //                        border border-[#d9d9d4]
// //                        bg-[#d9d9d4]
// //                        text-[11px] font-semibold tracking-[0.18em] uppercase
// //                        text-[#5b554b]
// //                        transition-colors transition-transform duration-200
// //                        hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
// //                        hover:-translate-y-1 
// //                        cursor-pointer"
// //           >
// //             VIEW ALL PROJECTS
// //           </button>
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PROJECTS = [
//   {
//     id: "01",
//     name: "Artevo Residence Lobby",
//     tag: "High-Rise Residence",
//     image: "/projects/lobby.jpg",
//   },
//   {
//     id: "02",
//     name: "Linea Penthouse",
//     tag: "Private Penthouse",
//     image: "/projects/penthouse.jpg",
//   },
//   {
//     id: "03",
//     name: "Brune Gallery Suite",
//     tag: "Cultural Space",
//     image: "/projects/gallery.jpg",
//   },
//   {
//     id: "04",
//     name: "Oak & Stone Villa",
//     tag: "Luxury Villa",
//     image: "/projects/villa.jpg",
//   },
//   {
//     id: "05",
//     name: "Marble Atrium",
//     tag: "Corporate HQ",
//     image: "/projects/atrium.jpg",
//   },
//   {
//     id: "06",
//     name: "Bespoke Boardroom",
//     tag: "Workspace",
//     image: "/projects/boardroom.jpg",
//   },
// ];

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   const autoTweenRef = useRef<gsap.core.Tween | null>(null);
//   const maxScrollRef = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const containerWidth = section.clientWidth;
//     const totalScroll = track.scrollWidth - containerWidth;
//     if (totalScroll <= 0) return;

//     maxScrollRef.current = totalScroll;

//     const ctx = gsap.context(() => {
//       const autoTween = gsap.to(track, {
//         x: -totalScroll,
//         duration: 30,
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//         paused: true,
//       });

//       autoTweenRef.current = autoTween;

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 90%",
//         end: "bottom 10%",
//         onEnter: () => autoTween.play(),
//         onEnterBack: () => autoTween.play(),
//         onLeave: () => autoTween.pause(),
//         onLeaveBack: () => autoTween.pause(),
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   const scrollByCard = (direction: "left" | "right") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const firstCard = track.querySelector("article") as HTMLElement | null;
//     const cardWidth = firstCard
//       ? firstCard.offsetWidth + 24 // 24px ~ gap
//       : 320;

//     const currentX = (gsap.getProperty(track, "x") as number) || 0;
//     let targetX =
//       direction === "left" ? currentX + cardWidth : currentX - cardWidth;

//     if (targetX > 0) targetX = 0;
//     if (targetX < -maxScrollRef.current) targetX = -maxScrollRef.current;

//     autoTweenRef.current?.pause();

//     gsap.to(track, {
//       x: targetX,
//       duration: 0.6,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//         <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
//           The <span className="text-[#c1171a]">शै</span>
//           <span className="text-[#2f2a25]">lee</span>
//         </h2>
//       </div>

//       {/* Wrapper so arrows can sit over the track */}
//       <div className="relative">
//         {/* Left arrow */}
//         <button
//           type="button"
//           onClick={() => scrollByCard("left")}
//           className="hidden lg:flex absolute left-6 top-1/2 z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#c7b08a] bg-white/80 text-[#3b342c] shadow-sm hover:bg-white transition"
//           aria-label="Previous projects"
//         >
//           ‹
//         </button>

//         {/* Right arrow */}
//         <button
//           type="button"
//           onClick={() => scrollByCard("right")}
//           className="hidden lg:flex absolute right-6 top-1/2 z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#c7b08a] bg-white/80 text-[#3b342c] shadow-sm hover:bg-white transition"
//           aria-label="Next projects"
//         >
//           ›
//         </button>

//         {/* Horizontal track */}
//         <div
//           ref={trackRef}
//           className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
//         >
//           {PROJECTS.map((project) => (
//             <article
//               key={project.id}
//               onMouseEnter={() => {
//                 window.dispatchEvent(new Event("cursor-small-enter"));
//               }}
//               onMouseLeave={() => {
//                 window.dispatchEvent(new Event("cursor-small-leave"));
//               }}
//               className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
//             >
//               <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-6 text-center space-y-1">
//                 <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
//                   {project.tag}
//                 </p>
//                 <p className="text-lg italic text-[#3b342c]">
//                   {project.name}
//                 </p>
//               </div>
//             </article>
//           ))}

//           <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
//         </div>
//       </div>

//       <div className="mt-16 flex justify-center">
//         <Link href="/projects">
//           <button
//             className="inline-flex items-center justify-center
//                        px-9 py-3
//                        border border-[#d9d9d4]
//                        bg-[#d9d9d4]
//                        text-[11px] font-semibold tracking-[0.18em] uppercase
//                        text-[#5b554b]
//                        transition-colors transition-transform duration-200
//                        hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
//                        hover:-translate-y-1 
//                        cursor-pointer"
//           >
//             VIEW ALL PROJECTS
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PROJECTS = [
//   {
//     id: "01",
//     name: "Eclectic Minimalism",
//     tag: "High-Rise Residence",
//     image: "/projects/lobby.jpg",
//     href: "/projects/eclectic-minimalism",
//   },
//   {
//     id: "02",
//     name: "Modern Classic",
//     tag: "Private Penthouse",
//     image: "/projects/penthouse.jpg",
//     href: "/projects/modern_classic",
//   },
//   {
//     id: "03",
//     name: "Modern Artistry",
//     tag: "Cultural Space",
//     image: "/projects/gallery.jpg",
//     href: "/projects/modernartisry",
//   },
//   {
//     id: "04",
//     name: "Modern Contemporary",
//     tag: "Luxury Villa",
//     image: "/projects/villa.jpg",
//     href: "/projects/moderncontemporary",
//   },
//   {
//     id: "05",
//     name: "Neo Modern Classic",
//     tag: "Corporate HQ",
//     image: "/projects/atrium.jpg",
//     href: "/projects/neomodernclassic",
//   },
//   {
//     id: "06",
//     name: "Classic Contemporary",
//     tag: "Classic Contemporary",
//     image: "/projects/classiccontempoeary.jpg",
//     href: "/projects/classiccontemporary",
//   },
// ];

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   const autoTweenRef = useRef<gsap.core.Tween | null>(null);
//   const maxScrollRef = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const containerWidth = section.clientWidth;
//     const totalScroll = track.scrollWidth - containerWidth;
//     if (totalScroll <= 0) return;

//     maxScrollRef.current = totalScroll;

//     const ctx = gsap.context(() => {
//       const autoTween = gsap.to(track, {
//         x: -totalScroll,
//         duration: 30,
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//         paused: true,
//       });

//       autoTweenRef.current = autoTween;

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 90%",
//         end: "bottom 10%",
//         onEnter: () => autoTween.play(),
//         onEnterBack: () => autoTween.play(),
//         onLeave: () => autoTween.pause(),
//         onLeaveBack: () => autoTween.pause(),
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   const scrollByCard = (direction: "left" | "right") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const firstCard = track.querySelector("article") as HTMLElement | null;
//     const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 320;

//     const currentX = (gsap.getProperty(track, "x") as number) || 0;
//     let targetX =
//       direction === "left" ? currentX + cardWidth : currentX - cardWidth;

//     if (targetX > 0) targetX = 0;
//     if (targetX < -maxScrollRef.current) targetX = -maxScrollRef.current;

//     autoTweenRef.current?.pause();

//     gsap.to(track, {
//       x: targetX,
//       duration: 0.6,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-14 bg-[#f4f4f5] text-slate-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//         <h2 className="mb-12 font-serif italic text-2xl md:text-3xl lg:text-4xl  uppercase tracking-[0.08em] text-[#2f2a25]">
//           The <span className="text-[#c1171a]">शै</span>
//           <span className="text-[#2f2a25]">lee</span>
//         </h2>
//       </div>

//       {/* Wrapper so arrows can sit over the track */}
//       <div className="relative">
// {/* LEFT ARROW */}
// <button
//   type="button"
//   onClick={() => scrollByCard("left")}
//   className="
//     hidden lg:flex
//     absolute
//     left-6 md:left-10 lg:left-16
//     top-1/2 -translate-y-1/2
//     z-30
//     h-12 w-12
//     items-center justify-center
//     rounded-full
//     bg-white/80 backdrop-blur-md
//     text-[#3a3a3a]
//     shadow-md
//     transition-all duration-300
//     hover:bg-white
//     hover:scale-105
//   "
//   aria-label="Previous projects"
// >
//   <span className="text-2xl leading-none translate-x-[-1px]">
//     ‹
//   </span>
// </button>

// {/* RIGHT ARROW */}
// <button
//   type="button"
//   onClick={() => scrollByCard("right")}
//   className="
//     hidden lg:flex
//     absolute
//     right-6 md:right-10 lg:right-16
//     top-1/2 -translate-y-1/2
//     z-30
//     h-12 w-12
//     items-center justify-center
//     rounded-full
//     bg-white/80 backdrop-blur-md
//     text-[#3a3a3a]
//     shadow-md
//     transition-all duration-300
//     hover:bg-white
//     hover:scale-105
//   "
//   aria-label="Next projects"
// >
//   <span className="text-4xl leading-none translate-x-[1px]">
//     ›
//   </span>
// </button>
//         {/* Horizontal track */}
//         <div
//           ref={trackRef}
//           className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
//         >
//           {PROJECTS.map((project) => (
//             <Link
//               key={project.id}
//               href={project.href}
//               className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
//             >
//               <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-6 text-center space-y-1">
//                 <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
//                   {project.tag}
//                 </p>
//                 <p className="text-lg italic text-[#3b342c]">
//                   {project.name}
//                 </p>
//               </div>
//             </Link>
//           ))}

//           <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
//         </div>
//       </div>

//       {/* Button redirects to main Projects page */}
//       <div className="mt-16 flex justify-center">
//         <Link href="/projects">
//           <button
//             type="button"
//             className="inline-flex items-center justify-center
//                        px-9 py-3
//                        border border-[#d9d9d4]
//                        bg-[#d9d9d4]
//                        text-[11px] font-semibold tracking-[0.18em] uppercase
//                        text-[#5b554b]
//                        transition-colors transition-transform duration-200
//                        hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
//                        hover:-translate-y-1 
//                        cursor-pointer"
//           >
//             VIEW ALL PROJECTS
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    name: "Eclectic Minimalism",
    image: "/projects/lobby.jpg",
    href: "/projects/eclectic-minimalism",
  },
  {
    id: "02",
    name: "Modern Classic",
    image: "/projects/penthouse.jpg",
    href: "/projects/modern_classic",
  },
  {
    id: "03",
    name: "Modern Artistry",
    image: "/projects/gallery.jpg",
    href: "/projects/modernartisry",
  },
  {
    id: "04",
    name: "Modern Contemporary",
    image: "/projects/villa.jpg",
    href: "/projects/moderncontemporary",
  },
  {
    id: "05",
    name: "Neo Modern Classic",
    image: "/projects/atrium.jpg",
    href: "/projects/neomodernclassic",
  },
  {
    id: "06",
    name: "Classic Contemporary",
    image: "/projects/classiccontempoeary.jpg",
    href: "/projects/classiccontemporary",
  },
];

export default function ShailleeSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoTweenRef = useRef<gsap.core.Tween | null>(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalWidth = track.scrollWidth / 2;

    const startAutoScroll = () => {
      autoTweenRef.current?.kill();

      autoTweenRef.current = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % totalWidth}px`;
          },
        },
      });
    };

    startAutoScroll();

    ScrollTrigger.create({
      trigger: section,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => autoTweenRef.current?.play(),
      onEnterBack: () => autoTweenRef.current?.play(),
      onLeave: () => autoTweenRef.current?.pause(),
      onLeaveBack: () => autoTweenRef.current?.pause(),
    });

    return () => {
      autoTweenRef.current?.kill();
    };
  }, []);

  /* ================= MANUAL ARROW (INFINITE) ================= */
  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article") as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 400;

    const totalWidth = track.scrollWidth / 2;
    const currentX = (gsap.getProperty(track, "x") as number) || 0;

    let targetX =
      direction === "left"
        ? currentX + cardWidth
        : currentX - cardWidth;

    if (targetX <= -totalWidth) targetX += totalWidth;
    if (targetX >= 0) targetX -= totalWidth;

    autoTweenRef.current?.kill();

    gsap.to(track, {
      x: targetX,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        autoTweenRef.current = gsap.to(track, {
          x: `-=${totalWidth}`,
          duration: 40,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const value = parseFloat(x);
              return `${value % totalWidth}px`;
            },
          },
        });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-18 bg-[#f4f4f2] overflow-hidden"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <h2 className="font-serif italic text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.08em] text-[#2f2a25]">
          The{" "}
          <span className="text-[#c1171a]">शै</span>
          <span className="text-[#2f2a25]">lee</span>
        </h2>
      </div>

      <div className="relative">

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          className="
            hidden lg:flex
            absolute
            left-8 md:left-12 lg:left-20
            top-1/2 -translate-y-1/2
            z-30
            items-center justify-center
            text-gray-300
            hover:text-[#2f2a25]
            transition-colors duration-300
          "
          aria-label="Previous projects"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={() => scrollByCard("right")}
          className="
            hidden lg:flex
            absolute
            right-8 md:right-12 lg:right-20
            top-1/2 -translate-y-1/2
            z-30
            items-center justify-center
            text-gray-300
            hover:text-[#2f2a25]
            transition-colors duration-300
          "
          aria-label="Next projects"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
          </svg>
        </button>

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex gap-8 px-8 md:px-16 lg:px-32"
        >
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <Link
              key={project.id + index}
              href={project.href}
              className="group flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[32vw] max-w-[540px]"
            >
              <article className="flex flex-col">

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-[#e9e9e7]">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <h3 className="mt-4 text-[16px] md:text-[20px] font-serif italic tracking-wide text-[#3a3a3a] group-hover:text-[#873807] transition-colors text-center">
                  {project.name}
                </h3>

              </article>
            </Link>
          ))}

          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex justify-center">
        <Link href="/projects">
          <button className="px-10 py-3 border border-[#d9d9d4] bg-[#d9d9d4] text-[11px] font-semibold font-serif tracking-[0.18em] uppercase text-[#5b554b] hover:bg-[#cbcbc7] hover:-translate-y-1 transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </Link>
      </div>
    </section>
  );
}