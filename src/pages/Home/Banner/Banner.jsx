import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
          {/* slide1 */}
        <div id="slide1" className="carousel-item relative w-full h-[550px]">
          <img src={img1} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
          {/* slide2 */}
          <div id="slide2" className="carousel-item relative w-full h-[550px]">
          <img src={img2} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
          {/* slide3 */}
          <div id="slide3" className="carousel-item relative w-full h-[550px]">
          <img src={img3} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
          {/* slide4 */}
          <div id="slide4" className="carousel-item relative w-full h-[550px]">
          <img src={img4} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
          {/* slide5 */}
          <div id="slide5" className="carousel-item relative w-full h-[550px]">
          <img src={img5} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
          {/* slide6 */}
          <div id="slide6" className="carousel-item relative w-full h-[550px]">
          <img src={img6} className="w-full" />
          <div className="absolute transform w-full h-full bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
               <h1 className='mt-32 ml-16 mb-5 text-4xl font-medium text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
               <p className='text-base ml-16 font-medium text-white'>There are many variations of passages of  available, <br /> But the majority have suffered alteration in some form</p>
                <div className='flex mt-8 ml-16'>
                     <button className='btn bg-red-500 text-white border-none mr-6'>Discover More</button>
                     <button className='btn btn-outline text-white border-white'>Latest Project</button>
                </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 gap-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>


        
      </div>
    );
};

export default Banner;