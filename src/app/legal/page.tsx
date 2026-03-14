

// import Link from "next/link"
// export default function LegalPage({
//   searchParams,
// }: {
//   searchParams: { tab?: string };
// }) {

//   const tab = searchParams?.tab === "privacy" ? "privacy" : "terms";

//   return (
//     <main className="bg-[#f3f3f3] py-24 px-6 font-futura">

//       <div className="max-w-5xl mx-auto">

//         {/* Toggle */}
//         <div className="flex justify-center border-b mb-14">

//           <Link
//             href="/legal?tab=terms"
//             className={`px-8 py-4 text-sm tracking-widest ${
//               tab === "terms"
//                 ? "border-b-2 border-black font-medium"
//                 : "text-gray-500"
//             }`}
//           >
//             TERMS AND CONDITIONS
//           </Link>

//           <Link
//             href="/legal?tab=privacy"
//             className={`px-8 py-4 text-sm tracking-widest ${
//               tab === "privacy"
//                 ? "border-b-2 border-black font-medium"
//                 : "text-gray-500"
//             }`}
//           >
//             PRIVACY POLICY
//           </Link>

//         </div>

//         <div className="bg-white p-12 shadow-sm text-[16px] leading-8 text-[#5f5a50] space-y-12">

// {/* ---------------- PRIVACY POLICY ---------------- */}

// {tab === "privacy" && (

// )}


// {/* ---------------- TERMS & CONDITIONS ---------------- */}

// {tab === "terms" && (

//         </div>

//       </div>

//     </main>
//   );
// }
import { redirect } from "next/navigation";

export default function LegalPage() {
  redirect("/legal/terms");
}