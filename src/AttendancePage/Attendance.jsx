
import React, { useState } from 'react';
import './Attendance.css';
import NavStaff from '../NavStaffFolder/NavStaff';

function App() {
  const [students, setStudents] = useState([
    { id: 2, name: 'Aaliyah', attendance: null },
    { id: 1, name: 'Ahamed razak', attendance: null },
    { id: 3, name: 'Balamaheswari', attendance: null },
    { id: 4, name: 'Banu', attendance: null },
    { id: 5, name: 'Chenthamizh', attendance: null },
    { id: 6, name: 'Chenthamarai', attendance: null },
    { id: 7, name: 'Deepak Ram', attendance: null },
    { id: 8, name: 'Dinesh', attendance: null },
    { id: 9, name: 'Ehzil', attendance: null },
    { id: 10, name: 'Elakiya', attendance: null },
    { id: 11, name: 'Emily', attendance: null },
    { id: 12, name: 'Faizal', attendance: null },
    { id: 13, name: 'Faris', attendance: null },
    { id: 22, name: 'Farik', attendance: null },
    { id: 14, name: 'Feroon', attendance: null },
    { id: 15, name: 'Fathima', attendance: null },
    { id: 16, name: 'Fasil', attendance: null },
    { id: 17, name: 'Guru', attendance: null },
    { id: 18, name: 'Gugana', attendance: null },
    { id: 19, name: 'Haroon', attendance: null },
    { id: 20, name: 'Halimathus Silmiya', attendance: null },
    { id: 21, name: 'Harini', attendance: null },



  ]);

  const setAttendance = (id, status) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === id ? { ...student, attendance: status } : student
      )
    );
  };

  return (
    
      <div>
        <NavStaff/>
    <div className="App">
      
      <header className="App-header">
        <h1 style={{color:"green",fontFamily:"Georgia",fontSize:"37px"}}>Attendance</h1>
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
                    className={`attendance-checkbox present ${student.attendance === 'present' ? 'checked' : ''}`}
                    checked={student.attendance === 'present'}
                    onChange={() => setAttendance(student.id, 'present')}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    className={`attendance-checkbox absent ${student.attendance === 'absent' ? 'checked' : ''}`}
                    checked={student.attendance === 'absent'}
                    onChange={() => setAttendance(student.id, 'absent')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    </div>
  );
}

export default App;
