import React, { useEffect, useState } from "react";
import moment from "moment";


const AssignList = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const apiUrl = 'http://localhost:5000/assignments/'; // Replace with your actual API endpoint
              const response = await fetch(apiUrl);
              const result = await response.json();

              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
              setIsLoading(false);
          }
      };

      fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render


  const handleDelete = async (_id) => {
      try {
        const apiUrl = `http://localhost:5000/assignments/${_id}`; // Replace with your actual API endpoint
        const response = await fetch(apiUrl, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // If the deletion was successful, update the data state without the deleted item
          setData((prevData) => prevData.filter((item) => item.id !== _id));
          window.location.reload();
        } else {
          console.error('Error deleting item:', response.status);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };

  return (
    <div>
        <h4 className="mb-3">Assignment List</h4>
        <table className='table table-striped'>
                        <thead style={{fontSize:"15px"}}>
                            <tr >
                                <th>code</th>
                                <th>Employee id</th>
                                <th>Assignment</th>
                                <th>from</th>
                                <th>to</th>
                                <th>assign_date</th>
                                <th>deadline_date</th>
                                <th>delete</th>
                                {/* Add more table headers based on your API response */}
                            </tr>
                        </thead>

                        <tbody style={{fontSize:"13px"}}>
                            {data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.code}</td>
                                    <td>{item.employee_id}</td>
                                    <td>{item.assignment}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{moment(item.assign_date).format('DD/MM/YYYY')}</td>
                                    <td>{moment(item.deadline_date).format('DD/MM/YYYY')}</td>

                                    <td style={{textAlign:"center"}}><i className="fa-solid fa-trash-can" style={{cursor:"pointer", color:"red", fontSize:"16px"}} onClick={() => handleDelete(item._id)}></i></td>
          
                                </tr>
                            ))}
                        </tbody>
                    </table>
    </div>
  );
};

export default AssignList;
