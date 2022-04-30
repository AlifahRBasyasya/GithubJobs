import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        if (localStorage.getItem("user-info") != null) {
            let userInfo = JSON.parse(localStorage.getItem("user-info"));
            setName(userInfo.name);
        }
    })

    const onSuccess = (res) => {
        localStorage.removeItem("user-info");
        window.location.reload(false);
    }

    return (
        <div className='row w-100 justify-content-between bg-primary p-3 m-0'>
            <div className='col-4'>
                <h3 className="m-0">
                    <Link to="/" className="text-white text-decoration-none"><strong>GitHub</strong> Jobs</Link>
                </h3>
            </div>
            <div className="col d-flex justify-content-end">
                {name == ""
                ?
                    <h4 className="text-white m-0">Welcome!</h4>
                :
                    <Fragment>
                        <h4 className="text-white m-0">{name}</h4>
                        <button className="border-0 bg-primary" onClick={onSuccess}>
                            <FontAwesomeIcon className="my-auto mx-3 fa-2x text-white" icon={faRightFromBracket} />
                        </button>
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default Navbar;