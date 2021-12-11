import React, {useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {jobMessage} from '../Redux/actions/jobMessage'
import '../style/jobForm.css'
import { useHistory } from 'react-router-dom';



function JobForm() {
   
const dispatch = useDispatch()
const jobInfo = useSelector(state => state.jobInfo.jobMessage)
// console.log("state.jobInfo", jobInfo)
const [advertiseForm, setAdvertiseForm] = useState({
        jobname: '',
        place: '',
        salary: '',
        position: '', 
})
const handleChange = (e) => {
        setAdvertiseForm({...advertiseForm, [e.target.name]: e.target.value});
};

     let history = useHistory();

        const redirect = () => {
          history.push('/joblist')
        }

        const direct = () => {
                history.push('/login')
        }

        const handleBack = (e) => {
                e.preventDefault();
                direct()
              };

const handleSubmit = (e) => {
        e.preventDefault();
if(advertiseForm.jobname && advertiseForm.place && advertiseForm.position && advertiseForm.salary !== ''){
        dispatch(jobMessage(advertiseForm), redirect())

}

}


    return (
      <div className="jobForm-header">
<button  className="backButton" type="Submit" onClick={handleBack}>Back</button>

        <form className="jobForm" onSubmit={handleSubmit}>
<div className="jobForm-Input">
        <h1>ADVERTISING JOB FORM</h1>

        <input type="text" placeholder="Job Name"
              onChange={handleChange}
              name = "jobname"
              value ={advertiseForm.jobname}
              
        />
</div>
<div className="jobForm-Input">
        <input type="text" placeholder="Place"
              onChange={handleChange}
              name = "place"
              value ={advertiseForm.place}
              />

</div>

<div className="jobForm-Input" id ="rand">
        <input type="number" placeholder="Salary"
              onChange={handleChange}
              name = "salary"
              value ={advertiseForm.salary}
              />

</div>
<div className="jobForm-Input">

        <input type="text" placeholder="Position"
              onChange={handleChange}
              name = "position"
              value ={advertiseForm.position}
              />
</div>

<button  className="jobButton" type="submit">Submit</button>

</form>

      </div>
    )
  }
  
  
  
  export default JobForm