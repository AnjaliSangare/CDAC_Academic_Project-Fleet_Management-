import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MakeReservation.css';


export default function MakeResevation() {
  // Define CSS styles

  const containerStyle = {
    textAlign: 'center',
    border: '1px solid #000',
   // padding: '10px',
    //height: '1800px',
    height: 'auto',
   // width: '1400px',
   width:'auto',
    //marginLeft: '50px',
    marginTop: '50px',
    border: '1px solid #000',
  //  background: `url('/Images/himg4.jpg' )`,
   backgroundSize: 'cover'
  
   
    
  };

  // const containerStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'left',
  //   justifyContent: 'center',
  //   height: '100vh', // Adjust this value if needed
  //   //border: '1px solid #000',
  //   backgroundColor: '#f0f0f0',
  //   // ... other styles
  //   background: `url('/Images/himg4.jpg'),
  //                url('/Images/himg4.jpg')`, 
  //                backgroundSize: 'cover'
  // };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // const columnStyle = {
  //   margin: '10px',
  // };

  const columnStyle = {
    margin: '30px 30px', // Added margin to the sides
  };

  // Define state variables
  const [rentalDate, setRentalDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [rentalTime, setRentalTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [airport, setAirport] = useState('');
  const [returnToDifferentLocation, setReturnToDifferentLocation] = useState(false);
  const [returnCity, setReturnCity] = useState('');
  const [returnState, setReturnState] = useState('');
  const [returnAirport, setReturnAirport] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [airportOptions, setAirportOptions] = useState([]);
  const [airportReturnOptions, setAirportReturnOptions] = useState([]);
  const [showReturnLocation, setShowReturnLocation] = useState(false);
  const [selectedHub, setSelectedHub] = useState(null);
  const [selectedCityObj, setSelectedCityObj] = useState(null);
  const [selectedReturnHub, setSelectedReturnHub] = useState(null);
  const [selectedAirportDetails, setSelectedAirportDetails] = useState(null);
  const[selectedReturnAirportDetails, setSelectedReturnAirportDetails]=useState(null);
  const [bookingStarted, setBookingStarted] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    rentalDate: null,
    returnDate: null,
    checkHUb: null,
    checkreturnhub: null,
  });
  const[checkhub,setCheckHub]=useState(0);
  const[checkreturnhub,setCheckReturnHub]=useState(0);



  useEffect(() => {
    console.log("bookinginfo values", bookingInfo.rentalDate,bookingInfo.returnDate,bookingInfo.setCheckHub,bookingInfo.setCheckReturnHub);
  }, [bookingInfo]);

 

  // Fetch data from the server on component mount
  useEffect(() => {
    //Fetch city options from the server
    fetch("http://localhost:8080/city/getAllCity")
      .then((response) => response.json())
      .then((data) => {
        setCityOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching city options:", error);
      });

    // Fetch state options from the server
    fetch("http://localhost:8080/state/getAllState")
      .then((response) => response.json())
      .then((data) => {
        setStateOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching state options:", error);
      });

    // Fetch Airport options from the server
    fetch("http://localhost:8080/airport/getAllAirportHub")
      .then((response) => response.json())
      .then((data) => {
        setAirportOptions(data);
        setAirportReturnOptions(data);

      })
      .catch((error) => {
        console.error("Error fetching Airport options:", error);
      });
  }, []);

   // Fetch Return  Airport options from the server
  //  fetch("http://localhost:8080/airport/getAllAirportHub")
  //  .then((response) => response.json())
  //  .then((data) => {
  //    setAirportReturnOptions(data);
  //  })
  //  .catch((error) => {
  //    console.error("Error fetching Airport options:", error);
  //  });


  //console.log(bookingInfo);

  // Function to fetch hub details by city id
  const fetchHubDetailsByCityId = (cityId) => {
    console.log("Fetching hub details for city ID:", cityId);
    if (cityId) {
      fetch(`http://localhost:8080/hub/getHubByCityId/${cityId}`)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched hub details:", data);
          setSelectedHub(data);
          // Update the bookingInfo state with the selected hub ID
       
        })
        .catch(error => {
          console.error("Error fetching hub details:", error);
        });
    }
  };

// Function to fetch hub details by city id for return location
const fetchHubDetailsByReturnCityId = (cityId) => {
    console.log("Fetching hub details for return city ID:", cityId);
    if (cityId) {
      fetch(`http://localhost:8080/hub/getHubByCityId/${cityId}`)
        .then(response => response.json())
        .then(data => {
          console.log("Fetched return hub details:", data);
          setSelectedReturnHub(data);
       
        })
        .catch(error => {
          console.error("Error fetching return hub details:", error);
        });
    }
  };

  //Function to fetch Airport details by airportid
  const fetchAirportDetailsById = (airportId) => {
    console.log("Fetching airport details for airport ID:", airportId);
    if (airportId) {
      fetch(`http://localhost:8080/airport/getAirportById/${airportId}`)
        .then(response => response.json())
        .then(data => {
          console.log("Fetched airport details:", data);
          setSelectedAirportDetails(data); // Set the fetched airport details
        })
        .catch(error => {
          console.error("Error fetching airport details:", error);
        });
    } else {
      console.log("Airport ID is not provided");
    }
  };

  //Function to fetch Return Airport details by airportid
  // Function to fetch Airport details by airportid
  const fetchAirportReturnDetailsById = (airportId) => {
    console.log("Fetching airport details for airport ID:", airportId);
    if (airportId) {
      fetch(`http://localhost:8080/airport/getAirportById/${airportId}`)
        .then(response => response.json())
        .then(data => {
          
          setSelectedReturnAirportDetails(data);

          console.log("in fetch"+selectedReturnAirportDetails);
        })
        .catch(error => {
          console.error("Error fetching airport details:", error);
        });
    } else {
      console.log("Airport ID is not provided");
    }
  };

  



  // Handle the search button click
  const handleSearch = () => {
    console.log(`Searching for Pick-up City: ${city}, State: ${state}`);
    console.log(`Return to Different Location: ${returnToDifferentLocation}`);
    if (returnToDifferentLocation) {
      console.log(`Return City: ${returnCity}, Return State: ${returnState}`);
      fetchHubDetailsByCityId(returnCity); // Fetch hub details based on returnCity id
    } else {
      fetchHubDetailsByCityId(selectedCityObj.cityId); // Fetch hub details based on city id
    }
  };

 // Handle the search button click for return city
const handleSearch1 = () => {
    console.log(`Searching for Return City: ${returnCity}, Return State: ${returnState}`);
    if (returnCity) {
      // Find the selected return city object from cityOptions
      const selectedReturnCity = cityOptions.find(option => option.cityName === returnCity);
      if (selectedReturnCity) {
        fetchHubDetailsByReturnCityId(selectedReturnCity.cityId); // Fetch hub details based on returnCity id
      } else {
        console.log("Selected Return City object not found");
      }
    } else {
      console.log("Return City is not selected");
    }
  };
  

  // Handle the checkbox change
  const handleCheckboxChange = () => {
    setReturnToDifferentLocation(!returnToDifferentLocation);
    setShowReturnLocation(!showReturnLocation);
  };

  // Handle the continue booking button click (you can implement redirection logic here)
  const handleClick = () => {
    setBookingStarted(true)
  };

  const today = new Date();

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Navigate to the desired component with bookingInfo prop
    navigate('/VehicalSelection', { state: { bookingInfo } });
  };

 
 
  return (

    
    <div style={containerStyle} id="start2">
    
      <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>
        {/* <u>
          <a href='https://www.google.co.in/'>Make Reservation</a></u> */}
          <h2 align="center" id="start-booking">Make Reservation</h2>
      </h3>
      <div id="start1">
      <h5 style={{ textAlign: 'left', paddingLeft: '50px' }}>
        <u>Rental Date And Time</u>
        <span style={{ marginRight: '100px' }}></span>
        <u>Return Date And Time</u>
      </h5>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <p>Rental Date</p>
          <DatePicker
            placeholderText='Select Booking Date'
            selected={rentalDate}
            onChange={(date) =>  {
                setRentalDate(date);
                // Update the bookingInfo state with the selected rental date
                setBookingInfo(prevInfo => ({ ...prevInfo, rentalDate: date }));
                console.log("bookinginfo"+bookingInfo.rentalDate)
            }}
            dateFormat="MM/dd/yyyy"
            minDate={today} // Set minimum date to today
            name="rentaldate"
            style={{ width: '160px' }}
          />
        </div>
        <div style={columnStyle}>
          <p>Return Date</p>
          <DatePicker
            placeholderText='Select Return Date'
            selected={returnDate}
            onChange={(date) => {
                setReturnDate(date);
                console.log("return date"+date);
                // Update the bookingInfo state with the selected return date
                setBookingInfo(prevInfo => ({ ...prevInfo, returnDate: date }));
                console.log("booking info"+bookingInfo.returnDate);
            }}
            dateFormat="MM/dd/yyyy"
            minDate={today} // Set minimum date to today
            //name="returndate"
          />
        </div>
      </div>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <p>Rental Time</p>
          <input
            type="time"
            value={rentalTime}
            onChange={(e) => setRentalTime(e.target.value)}
            style={{ width: '80px' }}
          />
        </div>
        <div style={columnStyle}>
          <p>Return Time</p>
          <input
            type="time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h6 style={{ textAlign: 'left', paddingLeft: '50px' }}>
          <em>Pick-up Location</em>
        </h6>


        {/* Airport Dropdown */}


        <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
          Airport
          <select
            name="Airport"
            value={airport}
            style={{ width: '120px', marginLeft: '20px', fontSize: '12px' }}
            onChange={(e) => {
                setAirport(e.target.value);
                // Find the selected airport object from airportOptions
                const selectedAirport = airportOptions.find(option => option.airportName === e.target.value);
                console.log(selectedAirport);
                console.log(selectedAirport.airporId);
                if (selectedAirport) {
                  fetchAirportDetailsById(selectedAirport.airporId); // Fetch airport details by ID
                } else {
                  console.log("Selected Airport object not found");
                  setSelectedAirportDetails(null); // Clear selected airport details
                }
              }}
          >
            <option value="">Select an Airport</option>
            {airportOptions.map((option) => (
              <option key={option.airportId} value={option.airportName}>
                {option.airportName}
              </option>
            ))}
          </select>
        </h4>


        {/* Display selected airport details */}
{selectedAirportDetails && (
  <div>
    <h4>Selected Airport Details:</h4>
    <p>Airport ID: {selectedAirportDetails.airporId}</p>
    <p>Airport Name: {selectedAirportDetails.airportName}</p>
    <p>State: {selectedAirportDetails.stateId.stateName}</p>
    {/* Display other airport details here */}
  </div>
)}


          {/* State Dropdown */}

          

        <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>OR</h3>

        
        <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
          State
          <select
            name="State"
            value={state}
            style={{ width: '100px', marginLeft: '20px', fontSize: '12px' }}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select a state</option>
            {stateOptions.map((option) => (
              <option key={option.stateId} value={option.stateName}>
                {option.stateName}
              </option>
            ))}
          </select>



          {/* City Dropdown */}

          <span style={{ marginLeft: '10px' }}>City</span>
          <select
            name="City"
            value={city}
            style={{ width: '100px', marginLeft: '20px', fontSize: '12px' }}
            onChange={(e) => {
                setCity(e.target.value);
                // Find the selected city object from cityOptions
                const selectedCity = cityOptions.find(option => option.cityName === e.target.value);
                setSelectedCityObj(selectedCity); // Set the selected city object
              }}
          >
            <option value="">Select a city</option>
            {cityOptions.map((option) => (
              <option key={option.cityId} value={option.cityName}>
                {option.cityName}
              </option>
            ))}
          </select>
          <button onClick={handleSearch} style={{ marginLeft: '20px' }}>Search</button>
        </h4>
      </div>
      
       {/* Display selected city details and get cityid through city name */}
       {/* {selectedCityObj && (
        <div>
          <h4>Selected City Details:</h4>
          <p>City ID: {selectedCityObj.cityId}</p>
          <p>City Name: {selectedCityObj.cityName}</p>
        </div>
      )} */}


       {/* Display selected hub details */}
       {/* {selectedHub && (
        <div> */}
          {/* <h4>Selected Hub Details:</h4> */}
          {/* <p>Hub ID: {selectedHub.hub_id}</p>
          <p>Closing Time: {selectedHub.closing_time}</p>
          <p>Hub Address: {selectedHub.hub_address}</p> */}
          {/* ... (display other hub details) */}
          {/* <thead>
          <h4>Selected Hub Details:</h4>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>Address</th>
                <th>phone no</th>
                <th>opening time</th>
                <th>Week day</th>
            </tr>
          </thead>
          <tbody>
            {selectedHub.map(h=>(
                <tr key={h.hub_id}>
                    <th>{h.hubId}</th>
                    <th>{h.hubName}</th>
                    <th>{h.hubAddress}</th>
                    <th>{h.hubPhoneNo}</th>
                    <th>{h.openingTime}</th>
                    <th>{h.weekDay}</th>
                </tr>
            ))

            }

          </tbody> */}

{selectedHub && (
  <div className="hub-options">
    {/* <h4>Selected Hub Details:</h4> */}
    {selectedHub.map((hub) => (
      <label key={hub.hubId} className="hub-option">
        <input
          type="radio"
          name="hub"
          value={hub.hubId}
          onChange={() => {
            console.log("check"+hub.hubId);
           // setSelectedHub(hub.hubId); // Update the selected hub ID
           setCheckHub(hub.hubId);
            setBookingInfo(prevInfo => ({ ...prevInfo, setCheckHub: hub.hubId }));
            console.log("Selected Hub ID:", checkhub);
          }}
          // Set any other necessary attributes for the radio button
          
        />
        <div className="hub-details">
          <p><strong>Name:</strong> {hub.hubName}</p>
          <p><strong>Opening Time:</strong> {hub.openingTime}</p>
          {/* You can display other hub details as well */}
        </div>
      </label>
    ))}
  </div>
)}


        {/* </div>
      )} */}





      <div style={{ textAlign: 'left', paddingLeft: '50px' }}>
        <input
          type="checkbox"
          id="returnToDifferentLocation"
          checked={returnToDifferentLocation}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="returnToDifferentLocation">
          <b>I may return the car to a different location</b>
        </label>
      </div>


 {/* Return location */}

      {showReturnLocation && (
        <div>
          <h6 style={{ textAlign: 'left', paddingLeft: '50px', paddingTop: '50px' }}>
            <em>Return Location</em>
          </h6>


          {/* Airport Retrun  */}
          
          <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
            Airport
            <select
              name="ReturnAirport"
              value={returnAirport}
              style={{ width: '120px', marginLeft: '20px', fontSize: '12px' }}
              onChange={(e) =>{
                setReturnAirport(e.target.value);
                const selectedReturnAirport = airportReturnOptions.find(option => option.airportName === e.target.value);
                console.log(selectedReturnAirport);
                if (selectedReturnAirport) {
                  // Fetch return airport details by ID
                  console.log("**"+selectedReturnAirport.airporId)
                  fetchAirportReturnDetailsById(selectedReturnAirport.airporId);
                } else {
                  console.log("Selected Return Airport object not found");
                  setSelectedReturnAirportDetails(null); // Clear selected return airport details
                }
              }}
            >
              <option value="">Select an Airport</option>

              console.log("new"+airportReturnOptions);
              {airportReturnOptions.map((option) => (
             
                <option key={option.airportId} value={option.airportName}>
                  {option.airportName}
                </option>
              ))}
            </select>
          </h4>

       


          {/* Display selected return airport details */}
{selectedReturnAirportDetails && (
            <div>
              <h4>Selected Return Airport Details:</h4>
              <p>Airport ID: {selectedReturnAirportDetails.airporId}</p>
              <p>Airport Name: {selectedReturnAirportDetails.airportName}</p>    
              <p>Airport Name: {selectedReturnAirportDetails. closingTime}</p>
              {/* Display other return airport details here */}
            </div>
          )}





          {/* return state */}

          <h3 style={{ textAlign: 'left', paddingLeft: '50px' }}>OR</h3>
          <h4 style={{ textAlign: 'left', paddingLeft: '50px' }}>
            State
            <select
              name="ReturnState"
              value={returnState}
              style={{ width: '150px', marginLeft: '20px', fontSize: '12px' }}
              onChange={(e) => setReturnState(e.target.value)}
            >
              <option value="">Select a state</option>
              {stateOptions.map((option) => (
                <option key={option.stateId} value={option.stateName}>
                  {option.stateName}
                </option>
              ))}
            </select>
            <span style={{ marginLeft: '10px' }}>City</span>
            <select
              name="ReturnCity"
              value={returnCity}
              style={{ width: '150px', marginLeft: '20px', fontSize: '12px' }}
              onChange={(e) => setReturnCity(e.target.value)}
            >
              <option value="">Select a city</option>
              {cityOptions.map((option) => (
                <option key={option.cityId} value={option.cityName}>
                  {option.cityName}
                </option>
              ))}
            </select>
            <button onClick={handleSearch1} style={{ marginLeft: '20px' }}>Search</button>
          </h4>
        </div>
      )}

{/* // Display selected return hub details */}
{selectedReturnHub && (
  <div className="hub-options">
    {/* <h4>Selected Hub Details:</h4> */}
    {selectedReturnHub.map((hub) => (
      <label key={hub.hubId} className="hub-option">
        <input
          type="radio"
          name="hub"
          value={hub.hubId}
          onChange={() => {
            console.log("check"+hub.hubId);
           // setSelectedHub(hub.hubId); // Update the selected hub ID
           setCheckReturnHub(hub.hubId);
            setBookingInfo(prevInfo => ({ ...prevInfo,  setCheckReturnHub: hub.hubId }));
            console.log("Selected Return Hub ID:", checkreturnhub);
          }}
          // Set any other necessary attributes for the radio button
          
        />
        <div className="hub-details">
          <p><strong>Name:</strong> {hub.hubName}</p>
          <p><strong>Opening Time:</strong> {hub.openingTime}</p>
          {/* You can display other hub details as well */}
        </div>
      </label>
    ))}
  </div>
  
)}


{/* continue booking div tag style={{ position: 'absolute', width: '100%', textAlign: 'left', marginBottom: '20px' }} */}


      {/* anothe box div style={{ position: 'absolute', top: '150px', right: '150px', border: '1px solid #000', padding: '10px', width: '500px', height: '700px', marginTop: '20px', marginRight: '20px' }} */}
      {/* <div >
        <h5 style={{ textAlign: 'center' }} onClick={handleClick}>
          Another Box

          <img src="/Images/contact1.jpg" alt="human"/>
        </h5>
      </div> */}

{/* , border: '1px solid #000' */}
      {/* <div style={{ position: 'absolute', top: '120px', right: '150px', padding: '10px', width: '300px', height: '300px', marginTop: '20px', marginRight: '20px' }}> */}
  {/* <h5 style={{ textAlign: 'center' }}>Another Box</h5> */}
  {/* <img src="/Images/droom.jpg" alt="human" style={{ width: '150%', height: 'auto' }} />
</div> */}
{/* <Link to="/VehicalSelection">Continue Booking</Link> */}

{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> */}
<button onClick={handleSubmit}  >Submit</button>
</div>
</div>
    
  );
}