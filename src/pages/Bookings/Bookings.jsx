import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() =>{
    axios.get(url,{withCredentials:true})
    .then(res=>{
      setBookings(res.data);
    })
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remaining = bookings.filter(booking=> booking._id !== id);
                setBookings(remaining);
            }
          });
      }
    });
  };
  const handleConfirm=(id)=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          title: "Updated",
          text: "Your data updated Successfully.",
          icon: "success"
        });
        const remaining= bookings.filter(booking=> booking._id !== id);
        const updated= bookings.find(booking=> booking._id === id);
        updated.status='confirm';
        const newBooking= [updated, ...remaining];
        setBookings(newBooking);
      }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              {
                bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
              }
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Bookings;
