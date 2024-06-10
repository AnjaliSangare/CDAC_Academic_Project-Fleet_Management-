// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


// export default function VehicalSelection() {

//   const location = useLocation();
//   const bookingInfo = location.state && location.state.bookingInfo;
//   const [user, setUser] = useState({
//     rentalDate: null,
//     returnDate: null,
//     setCheckHub: null,
//     setCheckReturnHub: null,
//     selectedCarTypeId: null,
//   });


//   useEffect(() => {
//     console.log("user values", user.rentalDate, user.returnDate, user.setCheckHub, user.setCheckReturnHub, user.selectedCarTypeId);
//   }, [user]);




//   // console.log("***"+bookingInfo.rentalDate);
//   // console.log("***"+bookingInfo.returnDate);
//   // console.log("***"+bookingInfo.setCheckHub);
//   // console.log("***"+bookingInfo.setCheckReturnHub);


//   const [cartype, setcartype] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);

//   //const {car_type_id} = useParams()
//   // let car_type_id=1;
//   useEffect(() => {
//     fetch("http://localhost:8080/CarTypeMaster/getAllbyHubId/" + bookingInfo.setCheckHub)
//       .then(res => res.json())
//       .then((result) => { setcartype(result) }
//       )
//   }, []);


//   console.log("cartype" + cartype);
//   console.log("length" + cartype.length);

//   // const handleSelect = (carName) => {
//   //   setSelectedCar(carName);
//   // };

//   const handleSelect = (carName, carTypeId) => {
//     console.log("Selected carTypeId in handle select :", carTypeId);

//     setUser((prevUser) => ({
//       ...prevUser,
//       rentalDate: bookingInfo.rentalDate,
//       returnDate: bookingInfo.returnDate,
//       setCheckHub: bookingInfo.setCheckHub,
//       setCheckReturnHub: bookingInfo.setCheckReturnHub,
//       selectedCarTypeId: carTypeId

//     }));
//     setSelectedCar(carTypeId);
//   };

//   //console.log(cartype[0].daily_rate);


//   console.log("user is" + selectedCar);


//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     // Navigate to the desired component with bookingInfo prop
//     navigate('/RentalAddOn', { state: { user } });
//   };
//   return (

//     <div>


//       {/* 
//           <h1>{bookingInfo.rentalDate}</h1> */}
//       {/* <h3>{cartype.length}</h3>
//             <h2>CarType Data..</h2>
//             <h3>{cartype[0].carTyepName}</h3>
//             <h3>{cartype[0].dailyRate}</h3> */}


//       {/* <img src="CarType/FirstCar.jpg" alt="car"/> */}
//       <div style={{ backgroundColor: "white", padding: "20px" }}></div>

//       <table align="center" id="car">
//         <thead>
//           <tr >
//             <th id="c1" className="colm-header">CAR CLASS</th>
//             <th id="c1" className="colm-header"  >CAR TYPE</th>
//             <th id="c1" className="colm-header">DAILY RATE</th>
//             <th id="c1" className="colm-header">WEEKLY RATE</th>
//             <th id="c1" className="colm-header">MONTHLY RATE</th>
//             <th id="c1" className="colm-header"></th>

//           </tr>
//         </thead>
//         <tbody>
//           {cartype.map(c => (
//             <tr key={c.carTypeId}>
//               <td><img
//                 src={`CarType/${c.imagePath}.jpg`}
//                 alt={c.carTypeName}
//                 style={{ width: "120px", height: "120px" }}
//               /></td>
//               <td>{c.carTypeName}</td>
//               <td>{c.dailyRate}</td>
//               <td>{c.weeklyRate}</td>
//               <td>{c.monthRate}</td>
//               <td>
//                 <a href="#" onClick={() => handleSelect(`${c.carTyepName} (ID: ${c.carTypeId})`, c.carTypeId)}>Select</a>
//               </td>


//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedCar && <p>Selected Car: {selectedCar}</p>}
//       {/* <button style={{ marginRight: "50px" }}><Link to="/RentalAddOn">Continue Booking</Link></button>
//           <button>Cancel</button> */}

//       <button onClick={handleSubmit}>Submit</button>

//       <Outlet />
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function VehicalSelection() {
  const location = useLocation();
  const bookingInfo = location.state && location.state.bookingInfo;
  const [user, setUser] = useState({
    rentalDate: null,
    returnDate: null,
    setCheckHub: null,
    setCheckReturnHub: null,
    selectedCarTypeId: null,
  });

  useEffect(() => {
    console.log(
      "user values",
      user.rentalDate,
      user.returnDate,
      user.setCheckHub,
      user.setCheckReturnHub,
      user.selectedCarTypeId
    );
  }, [user]);

  const [cartype, setcartype] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (bookingInfo && bookingInfo.setCheckHub) {
      fetch(`http://localhost:8080/CarTypeMaster/getAllbyHubId/ + ${bookingInfo.setCheckHub}`)
        .then((res) => res.json())
        .then((result) => {
          console.log("Fetched cartype data:", result); // Check the fetched data
          if (Array.isArray(result)) {
            setcartype(result);
          } else {
            console.error("Fetched data is not an array:", result);
            setcartype([]); // Set an empty array in case of unexpected data format
          }
        })
        .catch((error) => {
          console.error("Error fetching cartype data:", error);
          setcartype([]); // Set an empty array in case of fetch error
        });
    }
  }, [bookingInfo]);

  const handleSelect = (carName, carTypeId) => {
    console.log("Selected carTypeId in handle select:", carTypeId);

    setUser((prevUser) => ({
      ...prevUser,
      rentalDate: bookingInfo.rentalDate,
      returnDate: bookingInfo.returnDate,
      setCheckHub: bookingInfo.setCheckHub,
      setCheckReturnHub: bookingInfo.setCheckReturnHub,
      selectedCarTypeId: carTypeId,
    }));
    setSelectedCar(carTypeId);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/RentalAddOn", { state: { user } });
  };

  return (
    <div>
      <div style={{ backgroundColor: "white", padding: "20px" }}></div>
      <table align="center" id="car">
        <thead>
          <tr>
            <th id="c1" className="colm-header">CAR CLASS</th>
            <th id="c1" className="colm-header">CAR TYPE</th>
            <th id="c1" className="colm-header">DAILY RATE</th>
            <th id="c1" className="colm-header">WEEKLY RATE</th>
            <th id="c1" className="colm-header">MONTHLY RATE</th>
            <th id="c1" className="colm-header"></th>
          </tr>
        </thead>
        <tbody>
          {cartype.map((c) => (
            <tr key={c.carTypeId}>
              <td>
                <img
                  src={`http://localhost:8080/CarType/${c.imagePath}.jpg`}
                  alt={c.carTypeName}
                  style={{ width: "120px", height: "120px" }}
                />
                
              </td>
              <td>{c.carTypeName}</td>
              <td>{c.dailyRate}</td>
              <td>{c.weeklyRate}</td>
              <td>{c.monthRate}</td>
              <td>
                <a href="#" onClick={() => handleSelect(`${c.carTypeName} (ID: ${c.carTypeId})`, c.carTypeId)}>Select</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCar && <p>Selected Car: {selectedCar}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <Outlet />
    </div>
  );
}