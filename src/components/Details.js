import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const { mhsid } = useParams();
  const [data, setDatachange] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/data/${mhsid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setDatachange(resp);
      })
      .catch((err) => {
        console.log(err.message + "no data");
      });
  }, []);

  const checkIfActive = () => {
    return data.active ? "Yes" : "No" ;
  }

  return (
    <div>
      {/* <div className="row">
        <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2 style={{ textAlign: "center" }} > <b>Data Mahasiswa</b></h2>
          </div>
          <div className="card-body"></div>

          {data && (
            <div>
              <h2>
                NPM : <b>{data.npm}</b>
              </h2>
              <h2>
                Nama: <b>{data.nama}</b>
              </h2>
              <h2>
                kelas: <b>{data.kelas}</b>
              </h2>
              <h2>
                Role: <b>{data.role}</b>
              </h2>

              <h2>
                Rank: <b>{data.rank}</b>
              </h2>
              <h2>
                Sub: <b>{data.sub}</b>
              </h2>
              <h2>
                Active ? : <b>{checkIfActive()}</b>
              </h2>
              <Link className="btn btn-danger" style={{margin : "3 rem"}} to="/">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
    </div> */}
    </div>
  );
}
