import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/joblist.css'   
   

function JobList(props) {
  const jobInfo = useSelector(state => state.jobInfo.jobMessage)
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

          {jobInfo.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.jobname}</td>
                <td>{item.place}</td>
                <td className="rand">{item.salary}</td>
                <td>{item.position}</td>
                <td><button type="select">Select Job</button></td>
              </tr>
            )
          }
          )}

        </tbody>
      </table>

    </div>
  )
}



export default JobList