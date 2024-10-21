
import './App.css';

function App() {
  return (
    <div className="form-container">
      <h2>Exam Registration Form</h2>
      <form action="/submit_exam_form" method="post">
        {/* Student Information */}
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="rollNo">Roll No:</label>
          <input type="number" id="rollNo" name="rollNo" required />
        </div>

        {/* Exam Information */}
        <div className="form-group">
          <label htmlFor="stream">Select Stream:</label>
          <select id="stream" name="stream" required>
            <option value="BCA">BCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exam_date">Preferred Exam Date:</label>
          <input type="date" id="exam_date" name="exam_date" required />
        </div>

        <div className="form-group">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};



export default App;
