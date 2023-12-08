import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Hehe() {

  const [data, setDatachange] = useState(null);
  const navigate = useNavigate();
  const { mhsid } = useParams();
  const loadDetail = (id) => {
    navigate(`/dataTour/Details/${id}`);
  }
  
  const loadEdit = (id) => {
    navigate(`/dataTour/Edit/${id}`);
    
  }

  const remove = (id) => {
    if(window.confirm("Are you sure you want to delete this?")) {
      fetch(`http://localhost:3001/data/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("Deleted successfully.");
            window.location.reload();
          } else {
            throw new Error("Failed to save.");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }
  

  useEffect(() => {
    fetch("http://localhost:3001/data")
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


  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <div className="recbtn">
          <Link to="/dataTour/create" className = "btn btn-success"> Add New Record (+)
          </Link>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>NPM</th>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Role</th>
              <th>Rank</th>
              <th>Substitute?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  {/* <td>{item.id}</td> */}
                  <td>{item.npm}</td>
                  <td>{item.nama}</td>
                  <td>{item.kelas}</td>
                  <td>{item.role}</td>
                  <td>{item.rank}</td>
                  <td>{item.sub}</td>
                  <td>
                    <a onClick={() => {loadEdit(item.id)}} className="btn btn-success">Edit</a>
                    <a onClick={() => {remove(item.id)}} className="btn btn-danger">Delete</a>
                    <a onClick={() => {loadDetail(item.id)}} className="btn btn-primary">Details</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <br></br>
      </div>
    </Fragment>
  );
}

export default Hehe;
