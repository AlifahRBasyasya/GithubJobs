import Navbar from "../component/Navbar";

import JobService from "../service/JobService";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

const JobDetail = () => {
    let navigate = useNavigate();
    const parse = require('html-react-parser');
    const [detail, setDetail] = useState({});

    const back = () => {
        navigate(-1);
    }

    useEffect(() => {
        getJobDetail();
    }, [])

    function getJobDetail () {
        const getQueryParam = new URLSearchParams(window.location.search);
        const id = getQueryParam.get("id");

        JobService.getJobDetail(id).then(
            res => {
                setDetail(res);
            }
        )
    }

    return (
        <div className="bg-light">
            <Navbar/>
            <div className="row m-3">
                <div className="col">
                    <button onClick={back} className="border-0 bg-light d-flex justify-content-center">
                        <FontAwesomeIcon icon={faArrowLeftLong} className="fa-2x text-muted"/>
                        <h4 className="my-auto mx-3 text-primary"><strong>Back</strong></h4>
                    </button>
                </div>
            </div>
            <div className="m-3 p-4 border rounded bg-white">
                <div className="row">
                    <p className="text-muted m-0"><span>{detail.type}</span> / <span>{detail.location}</span></p>
                </div>
                <div className="row border-bottom">
                    <h4 className="text-secondary"><strong>{detail.title}</strong></h4>
                </div>
                <div className="row py-3">
                    <div className="col-7">{parse(String(detail.description))}</div>
                    <div className="col-5">
                        <div className="container">
                            <div className="border rounded shadow">
                                <p className="m-0 p-3 border-bottom"><strong>{detail.company}</strong></p>
                                <img className="img-fluid m-3" src={detail.company_logo} alt="Company Logo" />
                                <p className="m-0 p-3 border-top"><a href={detail.company_url} target="_blank">{detail.company_url}</a></p>
                            </div>
                            <div className="border rounded shadow mt-4 bg-info">
                                <p className="m-0 p-3 border-bottom"><strong>How to apply</strong></p>
                                <div className="p-3">
                                    {parse(String(detail.how_to_apply))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail;