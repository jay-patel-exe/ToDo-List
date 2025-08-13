import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-slate-700 to-gray-800 text-white px-8 py-4 shadow-md">
      <div className="logo font-extrabold text-2xl tracking-wide">
        iTask
      </div>
      <ul className="flex gap-8 text-lg font-medium">
        <li className="hover:text-blue-400 transition">Home</li>
        <li className="hover:text-blue-400 transition">About</li>
        <li className="hover:text-blue-400 transition">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
