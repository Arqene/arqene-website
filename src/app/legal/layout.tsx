// import Link from "next/link";

// export default function LegalLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="bg-[#f3f3f3] py-24 px-6 font-futura">
//       <div className="max-w-5xl mx-auto">

//         {/* Toggle */}
//         <div className="flex justify-center border-b mb-14">

//           <Link
//             href="/legal/terms"
//             className="px-8 py-4 text-sm tracking-widest text-gray-500 hover:text-black"
//           >
//             TERMS AND CONDITIONS
//           </Link>

//           <Link
//             href="/legal/privacy"
//             className="px-8 py-4 text-sm tracking-widest text-gray-500 hover:text-black"
//           >
//             PRIVACY POLICY
//           </Link>

//         </div>

//         <div className="bg-white p-12 shadow-sm text-[16px] leading-8 text-[#5f5a50] space-y-12">
//           {children}
//         </div>

//       </div>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="bg-[#f3f3f3] py-24 px-6 font-futura">
      <div className="max-w-5xl mx-auto">

        {/* Toggle */}
        <div className="flex justify-center border-b mb-14">

          <Link
            href="/legal/terms"
            className={`px-8 py-4 text-sm tracking-widest transition ${
              pathname === "/legal/terms"
                ? "border-b-2 border-black font-medium text-black"
                : "text-gray-500 hover:text-black hover:border-b-2 hover:border-black"
            }`}
          >
            TERMS AND CONDITIONS
          </Link>

          <Link
            href="/legal/privacy"
            className={`px-8 py-4 text-sm tracking-widest transition ${
              pathname === "/legal/privacy"
                ? "border-b-2 border-black font-medium text-black"
                : "text-gray-500 hover:text-black hover:border-b-2 hover:border-black"
            }`}
          >
            PRIVACY POLICY
          </Link>

        </div>

        <div className="bg-white  p-6 md:p-12  shadow-sm text-[16px] leading-8 text-[#5f5a50] space-y-12">
          {children}
        </div>

      </div>
    </main>
  );
}