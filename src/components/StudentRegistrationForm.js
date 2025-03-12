import React, { useState } from 'react'

function StudentRegistrationForm() {
  const[studentName , setStudentName] = useState('');
  const[age , setAge] = useState('');
  const[course , setCourse] = useState('science');
  const[consent , setConsent] = useState('');
  
  //Handle Change
  const handleNameChange =(e) => {
    setStudentName(e.target.value);
  }
  const handleAgeChange =(e) => {
    setAge(e.target.value);
  }
  const handleCourseChange =(e) => {
    setCourse(e.target.value);
  }
  const handleConsentChange =(e) => {
    setConsent(e.target.value);
  }

  //handle submit
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log({
      studentName,
      age,
      course,
      consent
    });
    
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Student Registration Form</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" value={studentName} onChange={handleNameChange} />
      </div>
    <br />
      <div>
        <label htmlFor="age">Age: </label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
    <br />
      <div>
        <label htmlFor="course">Course: </label>
        <select value={course} onChange={handleCourseChange}>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
        </select>
        
      </div>
      <br />
      <div>
        <label htmlFor="Consent">Consent: </label>
        <input type="checkbox" checked={consent} onChange={handleConsentChange} />
      </div>
    <br />
    <button type="submit">Register</button>
    </form>
  )
}

export default StudentRegistrationForm