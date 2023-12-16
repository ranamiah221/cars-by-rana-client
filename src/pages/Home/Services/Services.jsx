
import { useEffect, useState } from "react";
import SectionHeader from "../../../component/SectionHeader/SectionHeader";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> {
            setServices(data)})
    },[])

    return (
        <section>
            <div className="text-center mt-10">
                <SectionHeader
                subHeader='service'
                header='Our Service Area'
                description='The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '
                >
                </SectionHeader>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-10">
                {
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
           </div>    
        </section>
    );
};

export default Services;