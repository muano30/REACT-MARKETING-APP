import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/joblist.css'
import { useHistory } from 'react-router-dom';
import { jobApplied } from '../Redux/actions/jobapplied';

// import { jobMessage } from '../Redux/actions/jobMessage';


function JobList() {
   
  const dispatch = useDispatch()
  const jobInfo = useSelector(state => state.jobInfo.jobMessage)
  const direct = () => {
    history.push('login')
}

let history = useHistory();

const directAppliedJobs = () => {
  history.push('appliedjobs')
}

  const selectJob = (id) => {
    let jobs = jobInfo.find(job => job.id === id)
    dispatch(jobApplied(jobs))
    directAppliedJobs();
  }


const handleBack = (e) => {
    e.preventDefault();
    direct();
    
  };
  // console.log("jobInfo", jobInfo)

  return (
    <div className="container">

      <h1>JOB LIST</h1>
      <table className="jobList-Table">
        <thead>
          <tr>
            <th>JOB NAME</th>
            <th>PLACE</th>
            <th>SALARY</th>
            <th>POSITION</th>
            <th>APPLY JOB</th>

          </tr>
        </thead>

        <tbody>
          {/* {console.log("jobInfo", jobInfo)} */}

          {jobInfo.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.jobname}</td>
                <td>{item.place}</td>
                <td className="rand">{item.salary}</td>
                <td>{item.position}</td>
                <td><button onClick={()=> selectJob(item.id)} type="selectJob">Select Job</button></td>
              </tr>
            )
          }
          )}

        </tbody>
      </table>
          <button  className="backButton" type="Submit" onClick={handleBack}>Back</button>

    </div>
  )
}



export default JobList