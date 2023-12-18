import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const {_id, title, price, img } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl w-full h-[250px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
            <p className="text-red-400 text-xl font-medium">Price : {price}</p>
            <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
