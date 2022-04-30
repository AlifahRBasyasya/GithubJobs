import { Fragment } from "react";
import { Link } from "react-router-dom";

const Job = (props) => {
    const calculateDate = (newdate) => {
        const now = Date.now();
        const date = new Date(newdate);

        var difference = now - date.getTime();

        var diffInDays = Math.floor(difference / (1000 * 3600 * 24));

        if (diffInDays >= 365) {
            if (Math.floor(diffInDays/365) == 1) {
                return Math.floor(diffInDays/365) + " year";
            }
            return Math.floor(diffInDays/365) + " years";
        }

        if (diffInDays >= 30) {
            if (Math.floor(diffInDays/30) == 1) {
                return Math.floor(diffInDays/30) + " month";
            }
            return Math.floor(diffInDays/30) + " months";
        }

        return diffInDays + " days"
    }

    return (
        <Fragment>
            {props != null &&
                <Link to={"/job-detail?id=" + props.state.id} className="text-decoration-none">
                    <div className='row m-3 pt-3 border-top'>
                        <div className='col'>
                            <div className="row">
                                <h5 className="m-0 text-primary"><strong>{props.state.title}</strong></h5>
                            </div>
                            <div className="row">
                                <p className="m-0">
                                    <span className="text-muted">{props.state.company} - </span>
                                    <span className="text-success"><strong>{props.state.type}</strong></span>
                                </p>
                            </div>
                        </div>
                        <div className="col text-end">
                            <div className="row">
                                <h5 className="m-0 text-muted"><strong>{props.state.location}</strong></h5>
                            </div>
                            <div className="row">
                                <p className="m-0 text-muted">about {calculateDate(props.state.created_at)} ago</p>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </Fragment>
    )
}

export default Job;