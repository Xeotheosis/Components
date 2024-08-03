import React from "react";

const Rapoarte = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-black  font-primary-color font-bold grid grid-cols-2 shadow-md cursor-pointer xl:p-4 group  transition-all delay-100  lg:grid lg:grid-cols-3 gap-3">
      <div className="menu-item">Afise</div>

      <div className="menu-item">Centralizator</div>
      <div className="menu-item">Formulare</div>
      <div className="flex justify-center p-8 items-center shadow-md rounded-md gap-4 h-full w-full col-span-2 lg:col-span-3 bg-indigo-100">
        <i class="bx bxs-file-pdf text-5xl"></i>
        <div className="">
          <h1 className="poppins text-2xl group-hover:opacity-100">Rapoarte</h1>

          <p className="roboto text-lg opacity-50">
            Informatii despre asociatie
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rapoarte;
