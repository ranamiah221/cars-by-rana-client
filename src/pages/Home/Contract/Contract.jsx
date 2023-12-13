import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";


const Contract = () => {
    return (
        <div className="flex justify-between  gap-5 bg-black px-14 py-24 rounded-lg mb-10">
            {/* slot 1 */}
            <div className="flex items-center justify-between gap-3">
                <FaCalendarAlt className="text-white text-3xl"></FaCalendarAlt>
                <div>
                     <p className="text-lg font-normal text-white">We are open monday-friday</p>
                     <h2 className="text-xl font-semibold text-white">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            {/* slot 2 */}
            <div className="flex items-center justify-between gap-3">
                <FaPhoneAlt className="text-white text-3xl"></FaPhoneAlt>
                <div>
                     <p className="text-lg font-normal text-white">Have a question?</p>
                     <h2 className="text-xl font-semibold text-white">+2546 251 2658</h2>
                </div>
            </div>
            {/* slot 3 */}
            <div className="flex items-center justify-between gap-3">
                <FaLocationArrow className="text-white text-3xl"></FaLocationArrow>
                <div>
                     <p className="text-lg font-normal text-white">Need a repair? our address</p>
                     <h2 className="text-xl font-semibold text-white">Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contract;