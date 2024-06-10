import React, { useState } from 'react';
import { useEffect } from 'react';

// InvoiceDisplay component
export function ReturnInvoice() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [fuelStatus, setFuelStatus] = useState('');
    const [returnSuccess, setReturnSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showReturnInvoice, setShowReturnInvoice] = useState(false);
    const [bookingId, setBookingId] = useState('');
    const [customdetail, setCustomerDetail] = useState([]);
    const [oldCustomDetail, setOldCustomDetail] = useState(null); 
    const [newCustomDetail, setNewCustomDetail] = useState(null);

    const fetchOldCustomerDetails = async () => {
        try {
          const response = await fetch("http://localhost:8080/customer/" + bookingId);
          const data = await response.json();
          setOldCustomDetail(data);
        } catch (error) {
          console.error("Error fetching old customer details:", error);
          setOldCustomDetail(null);
        }
      };

      const handleBookingIdSubmit = (event) => {
        event.preventDefault();
        fetchOldCustomerDetails();
        setBookingId('');
      };
    


    const handleReturnClick = () => {
        setIsPopupOpen(true);
      };
    
      // Handle "Done" click in popup
  const handlePopupDone = () => {
    // Validate and process return
    if (!fuelStatus) {
      setErrorMessage('Please select a valid fuel status.');
      return;
    }


        // Store the current customdetail as oldCustomDetail
    // setOldCustomDetail(customdetail);

         // Perform return operations and call onDone
    setReturnSuccess(true);
    setIsPopupOpen(false);
    setErrorMessage('');
    // On error:
    // setErrorMessage('An error occurred while processing the return.');

     // Update the new custom details
     const updatedCustomDetail = { ...oldCustomDetail, fuelStatus };
      setNewCustomDetail(updatedCustomDetail);
 
    
   };

   useEffect(() => {
    // Clear the old and new custom details when bookingId changes
    setOldCustomDetail(null);
    setNewCustomDetail(null);
  }, [bookingId]);
  


//    const handleBookingIdSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:8080/customer/" + bookingId)
//       .then(res => res.json())
//       .then((result) => {
//         setCustomerDetail(result);
//       });
//     setBookingId(''); // Clear the input field after submission
//   };



  return (
    <div>
      <h2>Invoice Display</h2>

      <form className="booking-id-form" onSubmit={handleBookingIdSubmit}>
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(event) => setBookingId(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {oldCustomDetail && (
  <div className="receipt">
    <h3>Customer Details At the time of Handover</h3>
    <div className="receipt-details">
      <div className="detail-column">
        <p><strong>Name:</strong> {oldCustomDetail.firstName} {oldCustomDetail.lastName}</p>
        <p><strong>Email:</strong> {oldCustomDetail.email}</p>
        <p><strong>Date of Birth:</strong> {oldCustomDetail.dob}</p>
        <p><strong>Driving License:</strong> {oldCustomDetail.drivingLicence}</p>
        <p><strong>Credit Card Type:</strong> {oldCustomDetail.creditCardType}</p>
      </div>
      <div className="detail-column">
        <p><strong>Address:</strong> {oldCustomDetail.address1}, {oldCustomDetail.address2}</p>
        <p><strong>City:</strong> {oldCustomDetail.cityId.cityName}</p>
        <p><strong>State:</strong> {oldCustomDetail.stateId.stateName}</p>
        <p><strong>Pin:</strong> {oldCustomDetail.pin}</p>
        <p><strong>Phone:</strong> {oldCustomDetail.phone}</p>
      </div>
      <div className="detail-column">
        <p><strong>Driving License Issued By:</strong> {oldCustomDetail.dlIssuedBy}</p>
        <p><strong>Driving License Valid Through:</strong> {oldCustomDetail.dlValidThrough}</p>
        <p><strong>Passport Number:</strong> {oldCustomDetail.passportNumber}</p>
        <p><strong>Passport Issued By:</strong> {oldCustomDetail.passportIssuedBy}</p>
        <p><strong>Passport Valid Upto:</strong> {oldCustomDetail.passportValidUpto}</p>
      </div>
    </div>
  </div>
)}






        {!errorMessage && newCustomDetail && Object.keys(newCustomDetail).length > 0 && (
  <div className="receipt">
    <h3>Customer Details At the time of Return</h3>
    <div className="receipt-details">
      <div className="detail-column">
        <p><strong>Name:</strong> {newCustomDetail.firstName} {newCustomDetail.lastName}</p>
        <p><strong>Email:</strong> {newCustomDetail.email}</p>
        <p><strong>Date of Birth:</strong> {newCustomDetail.dob}</p>
        <p><strong>Driving License:</strong> {newCustomDetail.drivingLicence}</p>
        <p><strong>Credit Card Type:</strong> {newCustomDetail.creditCardType}</p>
      </div>
      <div className="detail-column">
        <p><strong>Address:</strong> {newCustomDetail.address1}, {newCustomDetail.address2}</p>
        <p><strong>City:</strong> {newCustomDetail.cityId.cityName}</p>
        <p><strong>State:</strong> {newCustomDetail.stateId.stateName}</p>
        <p><strong>Pin:</strong> {newCustomDetail.pin}</p>
        <p><strong>Phone:</strong> {newCustomDetail.phone}</p>
      </div>
      <div className="detail-column">
        <p><strong>Driving License Issued By:</strong> {newCustomDetail.dlIssuedBy}</p>
        <p><strong>Driving License Valid Through:</strong> {newCustomDetail.dlValidThrough}</p>
        <p><strong>Passport Number:</strong> {newCustomDetail.passportNumber}</p>
        <p><strong>Passport Issued By:</strong> {newCustomDetail.passportIssuedBy}</p>
        <p><strong>Passport Valid Upto:</strong> {newCustomDetail.passportValidUpto}</p>
      </div>
    </div>
    <p>
      <strong style={{ color: 'blue' }}>Fuel Status at the time of Handover:</strong>
      <span style={{ color: 'red', fontWeight: 'bold' }}>Half</span>
    </p>

    <p>
      <strong style={{ color: 'blue' }}>Return Date:</strong>
      <span style={{ color: 'green', fontWeight: 'bold' }}>{new Date().toLocaleString()}</span>
    </p>

    <p>
    <strong style={{ color: 'blue' }}>Fuel Status at the time of Return:</strong>
    <span style={{ color: 'red', fontWeight: 'bold' }}>{newCustomDetail.fuelStatus}</span>
  </p>

  
  </div>
)}


<button onClick={handleReturnClick}>Process Return</button>



{isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Select Fuel Status</h2>
            <label>
              <input
                type="radio"
                value="Empty"
                checked={fuelStatus === 'Empty'}
                onChange={() => setFuelStatus('Empty')}
              />
              Empty
            </label>
            <label>
              <input
                type="radio"
                value="Half"
                checked={fuelStatus === 'Half'}
                onChange={() => setFuelStatus('Half')}
              />
              Half
            </label>
            <label>
              <input
                type="radio"
                value="Full"
                checked={fuelStatus === 'Full'}
                onChange={() => setFuelStatus('Full')}
              />
              Full
            </label>
            <br />
            <button onClick={handlePopupDone}>Done</button>
          </div>
        </div>
      )}

<style>
        {`

.error-message {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .error-text {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }

          .receipt {
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          }

          .receipt-details {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #ccc;
            padding-top: 10px;
            margin-top: 10px;
          }

          .detail-column {
            flex: 1;
            padding: 0 10px;
          }

          .success-message {
            background-color: #4caf50;
            color: white;
            border: 1px solid #388e3c;
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        `}
      </style>


    
    

      {returnSuccess &&  <div className="success-message">
        <p>Return has been successfully processed! Thank you.</p>
    </div>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

// ReturnPopup component
function ReturnPopup({ vehicleRegNo, setVehicleRegNo, onDone }) {
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleVehicleRegNoChange = (event) => {
      setVehicleRegNo(event.target.value);
    };
  
    const handleDoneClick = () => {
      if (vehicleRegNo.trim() === '') {
        setErrorMessage('Please enter a valid vehicle registration number.');
        return;
      }
      onDone();
    };
  
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>Return Confirmation</h2>
          <label>
            Vehicle Registration Number:
            <input type="text" value={vehicleRegNo} onChange={handleVehicleRegNoChange} />
          </label>
          <br />
          <button onClick={handleDoneClick}>Done</button>
        </div>
      </div>
    );
  }
  

