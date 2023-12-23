import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
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
                bookings.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow>)
              }
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Bookings;
