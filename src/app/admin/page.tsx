// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";
// import AdminDashboard from "../components/AdminDashboard/page";

// export default function AdminPage() {
//   const { data: session } = useSession();

//   if (!session) {
//     return (
//       <div className="text-center mt-10">
//         <h1 className="text-2xl mb-4">Please login to access Admin</h1>
//         <button
//           onClick={() => signIn()}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <button
//         onClick={() => signOut()}
//         className="bg-red-500 text-white px-4 py-50 rounded float-right"
//       >
//         Logout
//       </button>
//       <AdminDashboard />
//     </div>
//   );
// }
// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";
// import AdminDashboard from "../components/AdminDashboard/page";

// export default function AdminPage() {
//   const { data: session } = useSession();

//   if (!session) {
//     return (
//       <div className="text-center mt-20">
//         <button
//           onClick={() => signIn()}
//           className="bg-black text-white px-6 py-3 rounded"
//         >
//           Admin Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <button
//         onClick={() => signOut()}
//         className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//       <AdminDashboard />
//     </>
//   );
// }
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import AdminDashboard from "../components/AdminDashboard/page";

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0b0f19] text-gray-400">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0b0f19] to-[#111827]">
        <div className="w-full max-w-md rounded-xl bg-[#0f172a] p-8 shadow-2xl border border-white/10">
          <h1 className="mb-2 text-center text-3xl font-bold text-white">
            Admin Login
          </h1>
          <p className="mb-6 text-center text-gray-400">
            Sign in to access dashboard
          </p>

          <button
            onClick={() => signIn()}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-[#0b0f19] text-gray-200">
      {/* TOP BAR */}
      <header className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-6 py-4">
        <h1 className="text-xl font-semibold tracking-wide">
          Admin Dashboard
        </h1>

        <button
          onClick={() => signOut()}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {/* CONTENT */}
      <main className="p-6">
        <AdminDashboard />
      </main>
    </div>
  );
}
