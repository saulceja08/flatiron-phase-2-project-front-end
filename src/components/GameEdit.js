import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameEdit = () => {
  const { gameid } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [consoleSupported, setConsoleSupported] = useState(""); // Correct state setter function
  const [image, setImage] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    fetch("https://saulceja08-flatiron-phase-2-back-end.onrender.com/games" + gameid)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setDate(resp.dateReleased);
        setConsoleSupported(resp.consoleSupported.join(", ")); // Join consoles as a comma-separated string
        setImage(resp.image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [gameid]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameData = { id, name, dateReleased: date, consoleSupported: consoleSupported.split(", "), image };

    fetch("http://localhost:3000/games/" + gameid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(gameData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update the game.");
        }
        return res.json();
      })
      .then((data) => {
        alert("Saved successfully.");
        navigate("/");
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
                <h2>Game Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input value={id} disabled className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => setValidation(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                      {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date Released</label>
                      <input value={date} onChange={(e) => setDate(e.target.value)} className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Console Supported</label>
                      <input value={consoleSupported} onChange={(e) => setConsoleSupported(e.target.value)} className="form-control" /> {/* Correct state setter function */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
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

export default GameEdit;
