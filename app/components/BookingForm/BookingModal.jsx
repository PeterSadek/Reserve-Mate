// "use client";

// import React from "react";
// import styles from "./BookingModal.module.css"

// const BookingModal = ({ bookingDetails, setBookingDetails, onSubmit, onCancel }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <h2 className="text-light mb-4 ">Book Room</h2>
//         <div className={styles.formGroup}>
//         <div className="input-shadow">
       
//           <label>Start Date:</label>
//           <input
//             type="date"
//             value={bookingDetails.startDate}
//             onChange={(e) =>
//               setBookingDetails({ ...bookingDetails, startDate: e.target.value })
//             }
//           />
//           </div>
//         </div>
//         <div className={styles.formGroup}>
//         <div className="input-shadow">
//           <label>End Date:</label>
//           <input
//             type="date"
//             value={bookingDetails.endDate}
//             onChange={(e) =>
//               setBookingDetails({ ...bookingDetails, endDate: e.target.value })
//             }
//           />
//         </div>
//         </div>
//         {/* <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={bookingDetails.name}
//             onChange={(e) =>
//               setBookingDetails({ ...bookingDetails, name: e.target.value })
//             }
//           />
//         </div> */}
    
//         <button onClick={onSubmit} className="primary-btn w-25">
//           Confirm Booking
//         </button>
//         <button onClick={onCancel} className="secondary-btn w-25">
//           Cancel
//         </button>
//     </div>
  
//     </div>
//   );
// };

// export default BookingModal;



// app/components/BookingModal.jsx

"use client";

import React from "react";
import styles from "./BookingModal.module.css";

const BookingModal = ({ bookingDetails, setBookingDetails, onSubmit, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div>
        <h2 className="text-light mb-4 ">Book Room</h2>
          <div className={styles.formGroup}>
          <div className="input-shadow">
            <label>Start Date:</label>
            <input
              type="date"
              value={bookingDetails.startDate}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, startDate: e.target.value })
              }
            />
          </div>
          </div>
          <div className={styles.formGroup}>
          <div className="input-shadow">
            <label>End Date:</label>
            <input
              type="date"
              value={bookingDetails.endDate}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, endDate: e.target.value })
              }
            />
          </div>
          </div>
          {/* <div className={styles.formGroup}>
            <label>Name:</label>
            <input
              type="number"
              min="1"
              value={bookingDetails.name}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, name: e.target.value })
              }
            />
          </div> */}

          <button onClick={onSubmit} className="primary-btn">
            Confirm Booking
          </button>
          <button onClick={onCancel} className="secondary-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

