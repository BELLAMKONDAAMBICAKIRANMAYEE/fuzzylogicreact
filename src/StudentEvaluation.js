// src/StudentEvaluation.js
import React, { useState } from 'react';

const StudentEvaluation = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    teacherEvaluation: 0,
    selfAssessment: 0,
    testScores: 0,
    attendance: 0,
  });

  // State to store the final evaluation
  const [finalEvaluation, setFinalEvaluation] = useState(null);
  // State to store the final grade
  const [finalGrade, setFinalGrade] = useState(null);

  // Function to handle form data changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  // Function to calculate the final evaluation using fuzzy logic
  const calculateEvaluation = () => {
    // Fuzzy logic rules (adjust as needed)
    const teacherGrade = formData.teacherEvaluation; // Use the raw value for now
    const selfAssessmentGrade = formData.selfAssessment; // Use the raw value for now
    const testScoresGrade = formData.testScores; // Use the raw value for now
    const attendanceGrade = formData.attendance; // Use the raw value for now

    // Combine fuzzy grades (you may need to adjust this based on your logic)
    const combinedGrade = (teacherGrade + selfAssessmentGrade + testScoresGrade + attendanceGrade) / 4;

    // Set the final evaluation based on the combined fuzzy grade
    setFinalEvaluation(combinedGrade);

    // Map the final evaluation to a grade
    const grade = getGrade(combinedGrade);
    setFinalGrade(grade);
  };

  // Function to get the grade based on the final evaluation
  const getGrade = (evaluation) => {
    if (evaluation >= 90) return 'A';
    else if (evaluation >= 80) return 'B';
    else if (evaluation >= 70) return 'C';
    else if (evaluation >= 60) return 'D';
    else return 'F';
  };

  return (
    <div>
      <h1>Student Evaluation</h1>
      <div>
        <label>Teacher Evaluation:</label>
        <input
          type="number"
          name="teacherEvaluation"
          value={formData.teacherEvaluation}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Self Assessment:</label>
        <input
          type="number"
          name="selfAssessment"
          value={formData.selfAssessment}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Test Scores:</label>
        <input
          type="number"
          name="testScores"
          value={formData.testScores}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Attendance:</label>
        <input
          type="number"
          name="attendance"
          value={formData.attendance}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={calculateEvaluation}>Calculate Evaluation</button>
      {finalEvaluation !== null && (
        <div>
          <h2>Final Evaluation:</h2>
          <p>{finalEvaluation}</p>
          <h2>Final Grade:</h2>
          <p>{finalGrade}</p>
        </div>
      )}
    </div>
  );
};

export default StudentEvaluation;
