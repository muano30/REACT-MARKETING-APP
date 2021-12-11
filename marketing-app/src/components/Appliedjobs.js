import React from 'react'
import '../style/appliedJob.css'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';




function AppliedJobs() {
  const jobInfo = useSelector(state => state.jobInfo.jobMessage)

  let history = useHistory();

  const direct = () => {
    history.push('/joblist')
}

const handleBack = (e) => {
    e.preventDefault();
    direct()
  };
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
          {jobInfo.map((item, index)=>{

          })}
         
        </tbody>
      </table>
      <button  className="backButton" type="Submit" onClick={handleBack}>Back</button>


    </div>
  )
}

export default AppliedJobs