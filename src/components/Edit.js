import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Edit = () => {
  const { mhsid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/data/${mhsid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setNpm(resp.npm);
        setNama(resp.nama);
        setKelas(resp.kelas);
        setRole(resp.role);
        setRank(resp.rank);
        setSub(resp.sub);
        setActive(resp.active);
      })
      .catch((err) => {
        console.log(err.message + "no data");
      });
  }, []); //only runs once when the component is mounted


  const [id, setId] = useState("");
  const [npm, setNpm] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [role, setRole] = useState("");
  const [rank, setRank] = useState("");
  const [sub, setSub] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navHook = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id, npm, nama, kelas, role, rank, sub, active };

    fetch(`http://localhost:3001/data/${mhsid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Saved successfully.");
          navHook("/");
        } else {
          throw new Error("Failed to save.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ textAlign: "center" }}>Edit Data</h2>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>NPM</label>
                        <input
                          required
                          value={npm}
                          onMouseDown={(e) => setValidation(true)}
                          onChange={(e) => setNpm(e.target.value)}
                          className="form-control"
                        ></input>
                        {npm.length == 0 && validation && (
                          <span className="text-danger">
                            NPM Must be Filled
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Nama</label>
                        <input
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Kelas</label>
                        <input
                          value={kelas}
                          onChange={(e) => setKelas(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Role</label>
                        <input
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Rank</label>
                        <input
                          value={rank}
                          onChange={(e) => setRank(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Sub</label>
                        <input
                          value={sub}
                          onChange={(e) => setSub(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          checked={active}
                          onChange={(e) => setActive(e.target.value)}
                          type="checkbox"
                          className="form-check-input"
                        ></input>
                        <label className="form-check-label">
                          Mahasiswa Aktif
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link to={"/"} className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
