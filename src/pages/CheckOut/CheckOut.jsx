import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const {user}= useContext(AuthContext);

  const handleBookService=(event)=>{
      event.preventDefault();
      const form = event.target;
      const name= form.name.value;
      const date= form.date.value;
      const email= user?.email;
      
      const booking={
        name,
        date,
        img, 
        email,
        price: price,
        service:title,
        service_id:_id ,
     
      }
    
    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
         'content-type':'application/json', 
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId)
        {
          Swal.fire({
            title: "Good job!",
            text: "Your order request successful",
            icon: "success"
          });
        };
        
    })
  }
  return (
    <section>
      <h2 className="text-center text-3xl ">Booking : {title}</h2>
      
            <form onSubmit={handleBookService} className="card-body w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    readOnly
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Amount</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={'$ '+price}
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                  
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-block btn-secondary"
                  type="submit"
                  value="Order Confirm"
                />
              </div>
            </form>
    </section>
  );
};

export default CheckOut;
