import React from 'react'
import '../style/appliedJob.css'

function AppliedJobs() {
  return (
    <div>
      
      <h1>APPLIED JOBS</h1>

      <table className="jobList-Table2  ">
        <thead>
          <tr>
            <th>JOB NAME</th>
            <th>PLACE</th>
            <th>SALARY</th>
            <th>POSITION</th>

          </tr>
        </thead>

        <tbody>
          <tr>
            <td>IT</td>
            <td>MIDRAND</td>
            <td>R3000</td>
            <td>JUNIOR DEVELOPER</td>

          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default AppliedJobs