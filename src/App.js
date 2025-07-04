import logo from './logo.svg';
import './App.css';

function App() {
   const students = [
    { id: 1, name: 'Vishwa', age: 20, grade: 'A' },
    { id: 2, name: 'Sneha', age: 21, grade: 'B' },
    { id: 3, name: 'Ravi', age: 22, grade: 'C' },
    { id: 4, name: 'Neha', age: 20, grade: 'A' },
    { id: 5, name: 'Kiran', age: 23, grade: 'B+' },
    { id: 6, name: 'Divya', age: 21, grade: 'A-' },
    { id: 7, name: 'Rohit', age: 22, grade: 'C+' },
    { id: 8, name: 'Pooja', age: 20, grade: 'B' },
    { id: 9, name: 'Rahul', age: 23, grade: 'A' },
    { id: 10, name: 'Anjali', age: 21, grade: 'A+' },
  ];
  return (
    <>
    <div style={{ padding: '20px' }}>
      <h2>Student Table</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;