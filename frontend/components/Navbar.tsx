import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#4640DE] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L17 7.5V12.5L10 17L3 12.5V7.5L10 3Z" fill="white" />
                <circle cx="10" cy="10" r="3" fill="#4640DE" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#202430]">QuickHire</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#515B6F] font-medium hover:text-[#4640DE] transition-colors">
              Find Jobs
            </Link>
            <Link href="/admin" className="text-[#515B6F] font-medium hover:text-[#4640DE] transition-colors">
              Admin
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#4640DE] font-semibold hover:text-[#3730CB] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#4640DE] text-white font-semibold px-5 py-2.5 rounded hover:bg-[#3730CB] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}



// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const pathname = usePathname();

//   const links = [
//     { href: '/', label: 'Jobs' },
//     { href: '/admin', label: 'Admin' },
//   ];

//   return (
//     <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
//           ⚡ QuickHire
//         </Link>
//         <div className="flex gap-6">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-sm font-medium transition-colors ${pathname === link.href
//                 ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
//                 : 'text-gray-600 hover:text-indigo-600'
//                 }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }