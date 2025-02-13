import React from "react";
import kids1 from "../../../assets/For Kids/kids 1.jpg";
import kids2 from "../../../assets/For Kids/kids 2.jpg";
import kids3 from "../../../assets/For Kids/kids 3.jpg";
import kids4 from "../../../assets/For Kids/kids 4.jpeg";
import kids5 from "../../../assets/For Kids/kids 5.jpg";
import kids6 from "../../../assets/For Kids/kids 62.jpg";

const KidsClasses = () => {
  return (
    <div>
      <div className="bg-white py-28">
        <div className="text-center mb-20">
          <h2 className="text-primary font-extrabold text-5xl mb-4">
            Our Classes
          </h2>
          <div className="flex justify-center items-center">
            <div>
              <div className="w-14 border-t border-accent pb-1 mr-1"></div>
              <div className="w-14 border-t border-accent mr-1"></div>
            </div>
            <i className="fa-solid fa-graduation-cap text-accent text-2xl px-1"></i>
            <div>
              <div className="w-14 border-t border-accent pb-1"></div>
              <div className="w-14 border-t border-accent"></div>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen   text-sm text-center">
          <div className="grid grid-cols-3 gap-14">
            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-sky-500 text-sky-500">
              <img
                src={kids1}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold  py-4 ">Spanish Class</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>

            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-accent text-amber-500">
              <img
                src={kids2}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold py-4  ">English Class</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>
            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-lime-600 text-lime-600">
              <img
                src={kids3}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold  py-4 ">French Class</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>
            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-indigo-600 text-indigo-600">
              <img
                src={kids4}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold py-4  ">
                  Communication Class
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>
            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-orange-600 text-orange-600">
              <img
                src={kids5}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold py-4  ">Chinese Class</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>
            <div className="hero-content flex-col border shadow-2xl rounded-3xl hover:text-white hover:bg-rose-600 text-rose-600 ">
              <img
                src={kids6}
                className=" bg-white max-w-xs rounded-full "
                alt=""
              />
              <div className="max-w-xs">
                <h1 className="text-xl font-bold py-4 ">Activitiy Class</h1>
                <p className="py-6 ">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi.
                </p>
              </div>
              <div className="divider m-0"></div>
              <div className="flex justify-center text-xs">
                <div className="">
                  <p>Year Old</p>
                  <p>3-6</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p>Students</p>
                  <p>25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button className="btn btn-sm bg-accent border-0 text-white rounded-full w-28 hover:bg-white hover:text-accent hover:border-accent hover:border-2 uppercase ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsClasses;
