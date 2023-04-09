import "./App.css";
function Details(props) {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div class="user-info">
              <div class="user-info__img">
                <img src="img/prof.png" alt="User Img" />
              </div>
              <div class="user-info__basic">
                <h5 class="mb-0">{props.data.patientName}</h5>
                <p class="text-muted mb-0">
                  {props.data.age} yrs, {props.data.gender}
                </p>
              </div>
            </div>
          </td>
          <td>
            <span class="btn btn-success">Consult</span>
          </td>
          <td>
            <h6 class="mb-0">{props.data.time}</h6>
            <small>{props.data.date}</small>
          </td>
          <td>
            <h6 class="mb-0">{props.data.date}</h6>
            <a href="#!">
              <small>Contact</small>
            </a>
          </td>
          <td>
            <h6 class="mb-0">Dr{props.data.doctorName}</h6>
          </td>
          <td>
            <button
              class="bottom"
              onClick={() => props.handleedit(props.index)}
            >
              Edit
            </button>
            <button
              class="bottom"
              onClick={() => props.handledelete(props.index  )}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
export default Details;
