import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "Diana", present: false },
    { id: 5, name: "Ethan", present: true },
  ]);

  const [filter, setFilter] = useState("All");

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true;
  });

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Attendance Manager</h1>
      <p>Total Present: {presentCount}</p>

      <div style={{ marginBottom: "20px" }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student) => (
          <li key={student.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                marginRight: "10px",
                color: student.present ? "green" : "red",
              }}
            >
              {student.name} - {student.present ? "Present" : "Absent"}
            </span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
