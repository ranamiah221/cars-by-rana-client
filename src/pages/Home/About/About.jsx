import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'
import SectionHeader from '../../../component/SectionHeader/SectionHeader';

const About = () => {
    return (
        <div className='lg:flex gap-5 mt-20 mb-10'>
             <div className='w-full relative'>
                <img className='rounded w-3/4' src={img1} alt="" />
                <img className='rounded w-1/2 absolute top-1/2 right-5 border-8 border-white' src={img2} alt="" />
             </div>
             <div className='mt-32 w-full'>
                <SectionHeader 
                subHeader='About Us'
                header='We are qualified &  of experience in this field'
                description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '
                >
                </SectionHeader>
                 <p className='mt-4'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <button className='bg-[#FF3811] text-white btn mt-5'>Get More Info</button>
             </div>
        </div>
    );
};

export default About;