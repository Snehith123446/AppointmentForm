import "./App.css";
import React from "react";
import Details from "./Details";
const getLocalItems = () => {
  let localStoredItems = localStorage.getItem("listName");
  if (localStoredItems) {
    return JSON.parse(localStoredItems);
  } else {
    return [];
  }
};
function App() {
  const [data, setData] = React.useState(emptydataform());
  const [dataarray, setDataarray] = React.useState(getLocalItems());
  function handleText(event) {
    setData((prevstate) => {
      return { ...prevstate, [event.target.name]: event.target.value };
    });
  }
  getLocalItems();
  function addintolist() {
    const updatedarray = [...dataarray, data];
    setDataarray(updatedarray);
    setData(emptydataform());
  }
  function handleedit(index) {
    setData(dataarray[index]);
    handledelete(index);
  }
  function emptydataform() {
    return {
      patientName: "",
      gender: "Male",
      age: "",
      phoneNumber: "",
      date: "",
      time: "",
      doctorName: "",
      type: "Consult",
    };
  }
  function handledelete(index) {
    setDataarray((prev) => {
      let newss = [...prev];
      newss.splice(index, 1);
      return newss;
    });
  }
  React.useEffect(() => {
    localStorage.setItem("listName", JSON.stringify(dataarray));
  }, [dataarray]);
  return (
    <>
      <section className="form-content">
        <div className="container register-form">
          <div className="form">
            <div className="note">
              <p>Welcome to Gradious Doctor Appointment Booking</p>
            </div>

            <form className="form-content" onSubmit={addintolist}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Patient Name *"
                      name="patientName"
                      value={data.patientName}
                      onChange={handleText}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="gender"
                      className="form-control"
                      onChange={handleText}
                      value={data.gender}
                      placeholder="Select Male/Female *"
                      required
                    >
                      <option name="M">Male</option>
                      <option name="F">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleText}
                      name="age"
                      value={data.age}
                      placeholder="Age *"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      onChange={handleText}
                      value={data.phoneNumber}
                      placeholder="Phone Number *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="Date"
                      className="form-control"
                      name="date"
                      value={data.date}
                      onChange={handleText}
                      placeholder="Date *"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="Time"
                      className="form-control"
                      name="time"
                      value={data.time}
                      onChange={handleText}
                      placeholder="Time *"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="doctorName"
                      value={data.doctorName}
                      onChange={handleText}
                      placeholder="Doctor Name *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="type"
                      value={data.type}
                      onChange={handleText}
                      placeholder="Select Consule/Revisit *"
                      required
                    >
                      <option name="Consult">Consult</option>
                      <option name="Revisit">Revisit</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btnSubmit">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
      <section class="main-content">
        <div class="container">
          <br />
          <br />

          <table class="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Status</th>
                <th>Appointment</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            {dataarray.map((value, index) => (
              <Details
                data={value}
                index={index}
                handleedit={handleedit}
                handledelete={handledelete}
              />
            ))}
          </table>
        </div>
      </section>
    </>
  );
}

export default App;
