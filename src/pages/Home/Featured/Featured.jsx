import SectionHeader from "../../../component/SectionHeader/SectionHeader";
import {  FaUsers } from "react-icons/fa";
import { MdAccessTimeFilled, MdVerified } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
const Featured = () => {
  return (
    <section>
      <div className="text-center ">
        <SectionHeader
          subHeader="Core Featured"
          header="Why Choose Us"
          description="the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. "
        ></SectionHeader>
      </div>
      <div className="grid  lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 my-10">
        {/* first */}
        <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
           <FaUsers className="text-4xl"></FaUsers>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Expert Team</h2>
            </div>
        </div>
       {/* second */}
       <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
          <MdAccessTimeFilled className="text-4xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Timely Delivery</h2>
            </div>
        </div>
        {/* third */}
        <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
           <FcOnlineSupport className="text-4xl"></FcOnlineSupport>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">24/7 Support</h2>
            </div>
        </div>
       {/* fourth */}
       <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
          <FaScrewdriverWrench className="text-4xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Best Equipment</h2>
            </div>
        </div>

        {/* five */}
        <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
           <MdVerified className="text-4xl"/> 
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">100% Guranty</h2>
            </div>
        </div>
       {/* six */}
       <div className="card w-48 h-60 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
          <figure className="px-10 pt-10">
          <GrDeliver className="text-4xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Timely Delivery</h2>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;
