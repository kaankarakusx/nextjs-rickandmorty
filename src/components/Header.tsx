function Header() {
  return (
    <header className="relative bg-gradient-to-r from-indigo-700 to-purple-800 w-full p-8 flex items-center justify-center shadow-lg rounded-b-3xl mb-10 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-white tracking-widest relative z-10">
        Rick and Morty Characters
      </h1>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full border-8 border-indigo-500 opacity-30 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-10 right-32 w-1 h-1 bg-white rounded-full opacity-50 animate-ping"></div>
      </div>
    </header>
  );
}

export default Header;
