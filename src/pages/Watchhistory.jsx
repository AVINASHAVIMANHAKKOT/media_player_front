import React, { useState, useEffect } from 'react';


function Watchhistory() {
  const [history, setHistory] = useState([]);

  const fetchWatchHistory = async () => {
    try {
      const response = await getWatchHistory(); // Use the correct function here
      setHistory(response.data); // Assuming the response contains an array of watch history items
    } catch (error) {
      console.error('Error fetching watch history:', error);
    }
  };

  useEffect(() => {
    fetchWatchHistory();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <h1>Watch History</h1>
      <table className='table-shadow border rounded m-3'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Url</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.url}</td>
              <td>{item.date}</td>
            </tr>
          ))}
       
  {history.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.url}</td>
      <td>{item.date}</td>
    </tr>
  ))}


        </tbody>
      </table>
    </>
  );
}

export default Watchhistory;
