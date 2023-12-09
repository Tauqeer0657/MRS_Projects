<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// // import Col from 'react-bootstrap/Col';
// import Container from "react-bootstrap/Container";
// import Modal from "react-bootstrap/Modal";
// import AssignList from "./AssignList";
// // import Row from 'react-bootstrap/Row';

// function MydModalWithGrid(props) {
//   const [code, setCode] = useState("");
//   const [employee_id, setEmployee_id] = useState("");
//   const [assignment, setAssignment] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [assign_date, setAssign_date] = useState("");
//   const [deadline_date, setDeadline_date] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [response, setResponse] = useState(null);


//   // ------for autoupdate code---------
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulate fetching the latest project number from the backend
//         const latestCodeNumber = await fetchLatestCodeNumber("http://localhost:5000/assignments/");

//         // Increment the project number
//         const newCodeNumber = incrementCodeNumber(latestCodeNumber);

//         // Set the new project number in the state
//         setCode(newCodeNumber);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // This effect runs only once when the component mounts

//   // Function to fetch the latest project number (replace with actual API call)
//   const fetchLatestCodeNumber = async (apiUrl) => {
//     try {
//       // Simulate fetching from the backend
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       return data.code; // Replace with the actual field name from the backend response
//     } catch (error) {
//       console.error("Error fetching latest code number:", error);
//       throw error;
//     }
//   };

//   // Function to increment the project number
//   const incrementCodeNumber = (currentCodeNumber) => {
//     // Logic to increment the project number (e.g., convert to number, increment, and format)
//     // This is a simplified example; adjust based on your project number format
//     const currentCode = parseInt(currentCodeNumber.slice(1), 10);
//     const newCode = currentCode + 1;
//     const newCodeNumber = `C${newCode.toString().padStart(3, '0')}`;
//     return newCodeNumber;
//   };

 

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Set loading state to true while waiting for the API response
//     setIsLoading(true);

//     try {
//       const apiUrl = "http://localhost:5000/assignments/"; // Replace with your actual API endpoint
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           code,
//           employee_id,
//           assignment,
//           from,
//           to,
//           assign_date,
//           deadline_date,
//         }),
//       });

//       // Assuming your API returns JSON, you can parse it like this
//       const data = await response.json();
//       // console.log(data, "helo");
//       // Update state with the API response
//       setResponse(data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       // Set loading state back to false, whether the request was successful or not
//       setIsLoading(false);
//       setCode("");
//       setEmployee_id("");
//       setAssignment("");
//       setFrom("");
//       setTo("");
//       setAssign_date("");
//       setDeadline_date("");
//     }
//   };



//   return (
//     <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="xl">
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Give Assignment
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="grid-example">
//         <Container>
//           {/* -----------------form--------------------- */}
//           <form onSubmit={handleSubmit}>
//             <div className="container">
//               <div className="row">

//                 <div className="mb-3 col">
//                   <label for="exampleInputEmail1" className="form-label">
//                     Code:
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     placeholder="5500"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                   />
//                 </div>
                
//                 <div className="mb-3 col">
//                   <label className="form-label">Employee ID:</label>
//                   <input
//                     type="word"
//                     className="form-control"
//                     placeholder="Employee ID..."
//                     value={employee_id}
//                     onChange={(e) => setEmployee_id(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label for="assignment" className="form-label">
//                   Give Assignment below:
//                 </label>
//                 <textarea
//                   type="word"
//                   className="form-control"
//                   id="assignment"
//                   placeholder="Write Something...."
//                   value={assignment}
//                   onChange={(e) => setAssignment(e.target.value)}
//                 />
//               </div>

//               <div className="row">
               
//                 <div className="mb-3 col">
//             <label for="exampleInputEmail1" className="form-label">From:</label>
//                 <select class="form-select" aria-label="Default select example" value={from} onChange={(e) => setFrom(e.target.value)}> 
//                 <option >Azhar sir</option>
//                   <option >Mitesh sir</option>
//             </select>
//                 </div>

//                 <div className="mb-3 col">
//                   <label className="form-label">To:</label>
                  
//                   <select class="form-select" aria-label="Default select example" value={to} onChange={(e) => setTo(e.target.value)}> 
//                 <option >Mitesh sir</option>
//                   <option >Asif zia</option>
//                   <option >taqueer</option>
//             </select>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="mb-3 col">
//                   <label for="date" className="form-label">
//                     Given Date:
//                   </label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     value={assign_date}
//                     onChange={(e) => setAssign_date(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3 col">
//                   <label className="form-label">Deadline date:</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     value={deadline_date}
//                     onChange={(e) => setDeadline_date(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-3 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label className="form-check-label" for="exampleCheck1">
//                   Check me out
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={isLoading}
//               >
//                 {" "}
//                 {isLoading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </form>
          
//           {response && " "}
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }



// const Assignment = () => {
//   const [modalShow, setModalShow] = useState(false);

  

//   return (
//     <div className="main-container">
//       <div className="mt-2">
//         <Button
  
//           onClick={() => setModalShow(true)}
//           style={{
//             width: "16%",
//             height: "40px",
//             margin: "10px",
//             borderRadius: "10px",
//             border: "none",
//             background:"#045e83"
//           }}
//         >
//           Create Assignment
//         </Button>

//         <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//       </div>
//       <div className="container mt-3">
//         <AssignList />
//       </div>
//     </div>
//   );
// };

// export default Assignment;



import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import AssignList from "./AssignList";

const AssignmentModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    code: "",
    employee_id: "",
    assignment: "",
    from: "",
    to: "",
    assign_date: "",
    deadline_date: "",
  });

=======
import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import AssignList from "./AssignList";

const AssignmentModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    code: "",
    employee_id: "",
    assignment: "",
    from: "",
    to: "",
    assign_date: "",
    deadline_date: "",
  });

>>>>>>> c769363291aad39896cd4b84af3b770132f48a68
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  
  useEffect(() => {
  const fetchData = async () => {
      try {
        const latestCodeNumber = await fetchLatestCodeNumber(
          "http://localhost:5000/assignments/latest-assignment-code"
        );
        const newCodeNumber = incrementCodeNumber(latestCodeNumber);
        console.log(newCodeNumber)
        setFormData((prevData) => ({ ...prevData, code: newCodeNumber }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const fetchLatestCodeNumber = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.code;
    } catch (error) {
      console.error("Error fetching latest code number:", error);
      throw error;
    }
  };

  const incrementCodeNumber = (currentCodeNumber) => {
    const currentCode = parseInt(currentCodeNumber.slice(1), 10);
    const newCode = currentCode + 1;
    return `C${newCode.toString().padStart(3, "0")}`;
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = "http://localhost:5000/assignments/";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
      setFormData({
        code: "",
        employee_id: "",
        assignment: "",
        from: "",
        to: "",
        assign_date: "",
        deadline_date: "",
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" size="xl">
      <Modal.Header closeButton>
<<<<<<< HEAD
        <Modal.Title id="contained-modal-title-vcenter">Create Assignment</Modal.Title>
=======
        <Modal.Title id="contained-modal-title-vcenter">Give Assignment</Modal.Title>
>>>>>>> c769363291aad39896cd4b84af3b770132f48a68
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
<<<<<<< HEAD
                    Task No.:
=======
                    Code:
>>>>>>> c769363291aad39896cd4b84af3b770132f48a68
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter code"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    readOnly
                  />
                </div>
                <div className="mb-3 col">
                  <label className="form-label">Employee ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee ID..."
                    name="employee_id"
                    value={formData.employee_id}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 col">
                <label htmlFor="assignment" className="form-label">
                  Give Assignment below:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="assignment"
                  placeholder="Write Something...."
                  name="assignment"
                  value={formData.assignment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="from" className="form-label">
                    From:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                  >
                    <option>Azhar sir</option>
                    <option>Mitesh sir</option>
                  </select>
                </div>

                <div className="mb-3 col">
                  <label htmlFor="to" className="form-label">
                    To:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                  >
                    <option>Mitesh sir</option>
                    <option>Asif zia</option>
                    <option>Taqueer</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="assign_date" className="form-label">
                    Given Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="assign_date"
                    value={formData.assign_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="deadline_date" className="form-label">
                    Deadline date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="deadline_date"
                    value={formData.deadline_date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {response && " "}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Assignment = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="main-container">
      <div className="mt-2">
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
          style={{
            width: "17%",
            height: "50px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Create Assignment
        </Button>
        <AssignmentModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="container mt-3">
        <AssignList />
      </div>
    </div>
  );
};

export default Assignment;
<<<<<<< HEAD






=======
>>>>>>> c769363291aad39896cd4b84af3b770132f48a68
