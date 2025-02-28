import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

function ServicePage() {
  return (
    <div>
      <NavigationBar />

      <div className=" flex justify-center items-center">
        <ul
          role="list"
          className=" shadow-lg shadow-sky-700 bg-slate-200  p-5 sm:p-10  rounded-xl"
        >
          <Link
            to={"/"}
            className=" absolute flex float-end border-2 border-gray-700 rounded-md cursor-pointer hover:scale-150 duration-500 text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <div className="flex flex-col md:flex-row pt-20  gap-16 ">
            <li className="">
              <div className="flex flex-col text-white items-center">
                <div className=" bg-gray-300 p-1  shadow-xl shadow-sky-700  hover:scale-110 duration-500 rounded-lg flex flex-col gap-8">
                  <h1 className="text-xl text-center text-black mt-2 font-bold">
                    Idea Submit
                  </h1>
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9q-Rabiss8YM1xtDIhCt34vgcbkf9Rr6uQOBwAJC-T-622jGA"
                    alt=""
                    className=" rounded-xl w-72 h-52"
                  />
                  <Link
                    to={"/idiaSubmit"}
                    className="bg-slate-800 p-3 text-lg text-center rounded-lg"
                  >
                    Fill the form
                  </Link>
                </div>
              </div>
            </li>
            <li className="">
              <div className="flex flex-col text-white items-center">
                <div className=" bg-gray-300 p-1  shadow-xl shadow-sky-700  hover:scale-110 duration-500 rounded-lg flex flex-col gap-8">
                  <h1 className="text-xl text-center text-black font-bold">
                    Requirement
                  </h1>
                  <img
                    src="https://www.shutterstock.com/image-photo/there-notebook-word-requirement-eyecatching-260nw-2378542451.jpg"
                    alt=""
                    className=" rounded-xl w-72 h-52"
                  />
                  <Link
                    to={"/requirementForm"}
                    className="bg-slate-800 p-3 text-lg rounded-lg text-center"
                  >
                    Fill the form
                  </Link>
                </div>
              </div>
            </li>
            <li className=" rounded-lg ">
              <div className="flex flex-col text-white items-center">
                <div className=" bg-gray-300 p-1 shadow-xl shadow-sky-700  hover:scale-110 duration-500 rounded-lg flex flex-col gap-8">
                  <h1 className="text-xl text-center  text-black mt-2 font-bold">
                    Full View
                  </h1>
                  <div className=" rounded-xl w-72 h-52 bg-red-400 ">
                    <img
                      src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg"
                      alt=""
                      className=" rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <Link
                    to={"/fullform"}
                    className="bg-slate-800 p-3 text-lg rounded-lg text-center"
                  >
                    Fill the form
                  </Link>
                </div>
              </div>
            </li>
          </div>
        </ul>{" "}
      </div>
    </div>
  );
}

export default ServicePage;
