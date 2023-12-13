import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import team1 from "../../../../assets/images/team/1.jpg";
import team2 from '../../../../assets/images/team/2.jpg';
import team3 from '../../../../assets/images/team/3.jpg';
import SectionHeader from "../../../../component/SectionHeader/SectionHeader";
const Team = () => {
  return (
    <section>
        <div className="text-center">
        <SectionHeader
        subHeader='Team'
        header='Meet Our Team'
        description='The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'
        >
        </SectionHeader>
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
        {/* first  */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <h3 className="text-lg font-semibold text-red-400">Engine Expert</h3>
            <div className="flex justify-between items-center gap-4">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>

            </div>
          </div>
        </div>
         {/* second */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <h3 className="text-lg font-semibold text-red-400">Engine Expert</h3>
            <div className="flex justify-between items-center gap-4">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>

            </div>
          </div>
        </div>
        {/* third */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <h3 className="text-lg font-semibold text-red-400">Engine Expert</h3>
            <div className="flex justify-between items-center gap-4">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
