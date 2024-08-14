
import React, { useState } from 'react';
import './Attendance.css';
import axios from 'axios';
import NavStaff from '../NavStaffFolder/NavStaff';

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aaliyah', attendance: 'present' },
    { id: 2, name: 'Ahamed razak', attendance: 'present' },
    { id: 3, name: 'Balamaheswari', attendance: 'present' },
    { id: 4, name: 'Banu', attendance: 'present' },
    { id: 5, name: 'Chenthamizh', attendance: 'present' },
    { id: 6, name: 'Chenthamarai', attendance: 'present' },
    { id: 7, name: 'Deepak Ram', attendance: 'present' },
    { id: 8, name: 'Dinesh', attendance: 'present' },
    { id: 9, name: 'Ehzil', attendance: 'present' },
    { id: 10, name: 'Elakiya', attendance: 'present' },
    { id: 11, name: 'Emily', attendance: 'present' },
    { id: 12, name: 'Faizal', attendance: 'present' },
    { id: 13, name: 'Faris', attendance: 'present' },
    { id: 22, name: 'Farik', attendance: 'present' },
    { id: 14, name: 'Feroon', attendance: 'present' },
    { id: 15, name: 'Fathima', attendance: 'present' },
    { id: 16, name: 'Fasil', attendance: 'present' },
    { id: 17, name: 'Guru', attendance: 'present' },
    { id: 18, name: 'Gugana', attendance: 'present' },
    { id: 19, name: 'Haroon', attendance: 'present' },
    { id: 20, name: 'Halimathus Silmiya', attendance: 'present' },
    { id: 21, name: 'Harini', attendance: 'present' },
  ]);

 

  const setAttendance = (id, status) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === id ? { ...student, attendance: status } : student
      )
    );
  };

  const saveAttendance = () => {
    const absentStudents = students.filter(student => student.attendance === 'absent');
    alert("Submitted successfully");
    axios.post('http://localhost:9001/attendance/save', absentStudents)
      .then(response => console.log('Attendance saved:', response.data))
      .catch(error => console.error('There was an error saving attendance!', error));
  };

  return (
    <div>
      <NavStaff />
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: "green", fontFamily: "Georgia", fontSize: "37px" }}>Attendance</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="present"
                      checked={student.attendance === 'present'}
                      onChange={() => setAttendance(student.id, 'present')}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="absent"
                      checked={student.attendance === 'absent'}
                      onChange={() => setAttendance(student.id, 'absent')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={saveAttendance} style={{ backgroundColor: "green" }}>Save Attendance</button>
        </main>
      </div>
    </div>
  );
}

export default Attendance;