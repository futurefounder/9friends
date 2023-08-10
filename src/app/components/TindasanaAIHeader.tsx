"use client";

export default function TindasanaAIHeader() {
  return (
    <>
      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-gray-100">
        <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-4 mx-auto ">
          <span className="text-3xl font-black text-transparent animate-text bg-gradient-to-r from-emerald-500 via-purple-500 to-red-500 bg-clip-text">
            {" "}
            TindasanaAI
          </span>{" "}
        </div>{" "}
      </nav>
    </>
  );
}
