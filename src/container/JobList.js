import Navbar from "../component/Navbar";
import Job from "../component/Job";

import JobService from "../service/JobService";

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const JobList = () => {
    const [jobList, setJobList] = useState([]);
    const [title, setTitle] = useState("Job List")
    const [searchValues, setSearchValues] = useState({
        term: "",
        location: "",
        fulltime: false
    })

    useEffect(() => {
        getJobs();
    }, [])

    function getJobs () {
        JobService.getJobList().then(
            res => {
                setJobList(res);
            }
        )
        setTitle("Job List");
    }

    function refreshPage () {
        window.location.reload(false);
    }

    const handleChange = (e) => {
        if (e.target.type == "checkbox") {
            const { name, checked } = e.target;
            setSearchValues({ ...searchValues, [name]: checked});
        }
        else {
            const { name, value } = e.target;
            setSearchValues({ ...searchValues, [name]: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        JobService.searchJob(searchValues).then(
            res => {
                setJobList(res);
                setTitle("Showing " + res.length + " jobs");
            }
        )
    }


    return (
        <div className="bg-light">
            <Navbar/>
            <form>
                <div className="row m-3 align-items-end">
                    <div className="col-4">
                        <p className="m-0"><strong>Job Description</strong></p>
                        <input type="text" name="term" onChange={handleChange} value={searchValues.term} className="w-100 px-2" placeholder="Filter by title, benefits, companies, expertise"/>
                    </div>
                    <div className="col-4">
                        <p className="m-0"><strong>Location</strong></p>
                        <input type="text" name="location" onChange={handleChange} value={searchValues.location} className="w-100 px-2" placeholder="Filter by city, state, zip code, or country"/>
                    </div>
                    <div className="col-2 my-1 text-center">
                        <input type="checkbox" name="fulltime" onChange={handleChange} checked={searchValues.fulltime}/>
                        <span className="m-3"><strong>Full Time Only</strong></span>
                    </div>
                    <div className="col-2 text-center">
                        <button type="submit" onClick={handleSubmit} className="btn btn-secondary w-75">Search</button>
                    </div>
                </div>
            </form>
            <div className="m-3 border rounded bg-white">
                <h2 className="m-4"><strong>{title}</strong></h2>
                {jobList == [] &&
                    <div className="d-flex justify-content-center" id="spinner">
                        <Spinner animation="border" variant="primary" />
                    </div>
                }
                {jobList != [] &&
                    jobList.map((value, idx) => {
                        return <Job state={value} key={idx} />
                    })   
                }
                <div className="row m-3">
                    <button type="button" onClick={refreshPage} className="btn btn-primary w-100">More Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default JobList;