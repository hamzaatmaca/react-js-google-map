import React from "react";
import PropTypes from "prop-types";

import { logo } from "../../Images/logo";

const Calender = React.memo(
  ({ status, location, name, doctorDepartment, calenderContent, stars }) => {
    return (
      <div className=" py-5">
        <div
          style={{ width: "100%!important", borderRadius: "15px" }}
          className="row d-flex justify-content-center align-items-center h-100"
        >
          <div
            className="card"
            style={{ width: "100%!important", borderRadius: "15px" }}
          >
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div>
                  <img
                    src={logo}
                    alt="Generic placeholder image"
                    className="img-fluid m-5"
                    style={{ width: "180px", borderRadius: "10px" }}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">{}</h5>
                  <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                    {}
                  </p>
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#9de0b7" }}
                  >
                    <div>
                      <p className="small text-muted mb-1">
                        <b>Doctor</b>
                      </p>
                      <p className="mb-0">Dr.{name}</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">
                        <b>Department</b>
                      </p>
                      <p className="mb-0">{doctorDepartment}</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">
                        <b>Stars</b>
                      </p>
                      <p className="mb-0">
                        {Array(stars)
                          .fill(<i class="fa-solid fa-star"></i>)
                          .map((val, key) => {
                            return val;
                          })}
                      </p>
                    </div>
                  </div>

                  <div
                    className="m-3"
                    style={{
                      width: "300px",
                    }}
                  >
                    {calenderContent}
                  </div>

                  <div className="d-flex pt-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 flex-grow-1"
                    >
                      <i class="fa-solid fa-location-dot"></i>&nbsp;
                      {location}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary flex-grow-1"
                    >
                      {status}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Calender.propTypes = {
  status: PropTypes.string,
  location: PropTypes.string,
  doctorDepartment: PropTypes.string,
  calenderContent: PropTypes.string,
  stars: PropTypes.number,
};

export default Calender;
