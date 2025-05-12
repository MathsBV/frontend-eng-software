import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function MentorList() {
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/sugestion/1")
      .then((response) => {
        console.log(response);
        setMentors(response.data); // Espera que response.data seja um array de mentores
      })
      .catch((error) => {
        console.error("Erro ao buscar mentores:", error);
      });
  }, []);

  function scheduleMentoring(mentor) {
    console.log(mentor);
    navigate("/schedule-mentoring", { state: { mentor: mentor } });
  }

  return (
    <section className="w-100 py-5 bg-dark text-light min-vh-100">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Mentores Disponíveis
        </h2>
        <div className="row justify-content-center">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="col-lg-4 col-md-6 d-flex justify-content-center mb-4"
              data-aos="fade-up"
              data-aos-delay={mentor.id * 100}
            >
              <div
                className="card bg-secondary text-light border-0 shadow rounded-4 w-100"
                style={{ maxWidth: "350px" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{mentor.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {mentor.areas_of_activity}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {mentor.company_name}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {mentor.mail}
                  </h6>
                  <p className="card-text">{mentor.bio}</p>
                  <button 
                    className="btn btn-outline-light w-100 mt-3"
                    onClick={() => scheduleMentoring(mentor)}
                  >
                    Solicitar Mentoria
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorList;
