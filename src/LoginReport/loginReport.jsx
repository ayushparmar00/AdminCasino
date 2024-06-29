import React from 'react';
import './loginReport.css'


const data = [
  { id: 1, name: 'Event 1', openDate: '2024-06-01', competition: 'Competition 1', inplay: 'Yes', details: 'Details 1' },
  { id: 2, name: 'Event 2', openDate: '2024-06-02', competition: 'Competition 2', inplay: 'No', details: 'Details 2' },
  // Add more data as needed
];

const  LoginReport = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Open Date</th>
            <th>Competition</th>
            <th>Inplay</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.openDate}</td>
              <td>{item.competition}</td>
              <td>{item.inplay}</td>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  LoginReport;
