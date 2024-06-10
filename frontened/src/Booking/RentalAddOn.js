import React, { useState, useEffect } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RentalAddOn() {

  const containerStyle = {
    textAlign: 'center',
  
   // padding: '10px',
    //height: '1800px',
    height: 'auto',
   // width: '1400px',
   width:'auto',
    //marginLeft: '50px',
    marginTop: '50px',
  
   background: `url('/Images/himg.jpg')`,
   backgroundSize: 'cover'
   
    
  };

  const [addons, setAddons] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [seatRadio, setSeatRadio] = useState(null);


  const location = useLocation();
  const bookingInfo = location.state && location.state.user;

  console.log("hi"+ bookingInfo.rentalDate);

  const [user,setUser]=useState({
    rentalDate:  null,
    returnDate: null ,
    setCheckHub: null,
    setCheckReturnHub: null ,
    selectedCarTypeId: null,
    selectedAddOns:[]
  });

  

  useEffect(() => {
    console.log("user values in addon", user.rentalDate,user.returnDate,user.setCheckHub,user.setCheckReturnHub,user.selectedCarTypeId,user.selectedAddOns);
  }, [user]);



  useEffect(() => {
    fetch("http://localhost:8080/addon")
      .then((res) => res.json())
      .then((result) => {
        setAddons(result);
      })
      .catch((error) => {
        console.error("Error fetching add-ons:", error);
      });
  }, []);

  

  const handleCheckboxChange = (event) => {
    const addonId = event.target.id;
    const isChecked = event.target.checked;
    console.log("in handlecheck"+addonId)
    setSelectedAddons((prevSelectedAddons) => ({
      ...prevSelectedAddons,
      [addonId]: {
        selected: isChecked,
        numberOfChildSeats: isChecked? 1:0, // Default value
      },

      
    }));
  };


  // setUser((prevUser) => ({
  //   ...prevUser,
  //   selectedAddOns: Object.keys(selectedAddons)
  //     .filter((addonId) => selectedAddons[addonId].selected)
  //     .map((addonId) => ({
  //       addonId,
  //       numberOfChildSeats: selectedAddons[addonId].numberOfChildSeats,
  //     })),
  // }));

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      selectedAddOns: Object.keys(selectedAddons)
        .filter((addonId) => selectedAddons[addonId].selected)
        .map((addonId) => ({
          addonId,
          numberOfChildSeats: selectedAddons[addonId].numberOfChildSeats,
        })),      
  rentalDate: bookingInfo.rentalDate ,
  returnDate: bookingInfo.returnDate ,
  setCheckHub: bookingInfo.setCheckHub ,
  setCheckReturnHub: bookingInfo.setCheckReturnHub ,
  selectedCarTypeId:bookingInfo.selectedCarTypeId

    }));
  }, [selectedAddons]);

  console.log("selected addon :"+selectedAddons);


  // rentalDate: bookingInfo.rentalDate ,
  //     returnDate: bookingInfo.returnDate ,
  //     setCheckHub: bookingInfo.setCheckHub ,
  //     setCheckReturnHub: bookingInfo.setCheckReturnHub ,



  const handleChildSeatChange = (event, addonId, value) => {
    setSelectedAddons((prevSelectedAddons) => ({
      ...prevSelectedAddons,
      [addonId]: {
        ...prevSelectedAddons[addonId],
        numberOfChildSeats: value,
      },
 
    }));

    setSeatRadio(value);
  };

  const navigate=useNavigate();
  const handleSubmit = () => {
    // Navigate to the desired component with bookingInfo prop
    navigate('/BlankCustomerInfo', { state: { user } });
  };

  return (
    <div id="add">
    <div style={containerStyle}>
      <h2 style={{ color: 'green',fontWeight: 'bold' }}>Rental Add-ons</h2>
      
      <table align="center" border="3"cellPadding="4" cellSpacing="1" style={{margin: 'auto'}} >
        <thead>
       
          <tr>
            <th></th>
            <th >AddOnName</th>
            <th>AddOnRate</th>
          </tr>
        </thead>
       
        <tbody>
          {addons.map((add) => (
            <tr key={add.addOnId}>
              <td>
                <input
                  type="checkbox"
                  id={add.addOnId}
                  checked={selectedAddons[add.addOnId]?.selected || false}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>
                <label htmlFor={add.addOnId}>{add.addOnName}</label>
              </td>
              <td>
                <label htmlFor={add.addOnId} id="addon1">
                  {add.addOnRate}
                </label>
              </td>
              <td>
                {selectedAddons[add.addOnId]?.selected && add.addOnName === "Child Car Seat" && (
                  <label>
                    <br></br>
                   <h4> Please select the number of seats:</h4>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name={`childSeat_${add.addOnId}`}
                          value={1}
                          checked={selectedAddons[add.addOnId]?.numberOfChildSeats === 1}
                          onChange={(e) => handleChildSeatChange(e, add.addOnId, 1)}
                        />
                        1
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`childSeat_${add.addOnId}`}
                          value={2}
                          checked={selectedAddons[add.addOnId]?.numberOfChildSeats === 2}
                          onChange={(e) => handleChildSeatChange(e, add.addOnId, 2)}
                        />
                        2
                      </label>
                    </div>
                  </label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h5>Selected Add-on Details</h5>
        <p>Seats: {seatRadio}</p>
        <ul>
          {Object.entries(selectedAddons).map(([addonId, addonData]) => (
            addonData.selected && (
              <li key={addonId}>
                Add-on ID: {addonId}
                {addonData.addonName === "Child Seat" && (
                  <span>, Child Seats: {addonData.numberOfChildSeats} (ID: {addonId})</span>
                )}
              </li>
            )
          ))}
        </ul>
      </div>
      {/* <button style={{ marginRight: "50px" }}><Link to="/BlankCustomerInfo">Continue Booking</Link></button> */}

      <button onClick={handleSubmit}>Submit</button>
      <Outlet/>
    </div>
    </div>
  );
}