import React from "react";

const Apartamente = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-black  font-primary-color font-bold grid grid-cols-2 shadow-md cursor-pointer xl:p-4 group  transition-all delay-100  lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-3">
      <div className="menu-item">Consumuri</div>
      <div className="menu-item ">Restante</div>
      <div className="menu-item ">Setari Apartamente</div>
      <div className="flex flex-col shadow-md justify-center items-center rounded-lg p-8 border-2 gap-4 h-full w-full col-span-2 lg:row-span-2 bg-indigo-100">
        <i class="bx bx-buildings text-5xl"></i>
        <div>
          <h1 className="poppins text-xl group-hover:opacity-100">
            Apartamente
          </h1>

          <p className="roboto text-lg opacity-50">
            Informatii despre apartamente
          </p>
        </div>
      </div>
      <div className="menu-item">Caldura</div>
      <div className="menu-item">Altele</div>
    </div>
  );
};

export default Apartamente;
