function App() {
  const PersonalInformation = {
    username: "Gunasekaran",
    mobile: "9025763856",
    gender: "Male",
    dob: "02-05-2005",
    country: "India",
    state: "Tamil Nadu",
    city: "chennai",
  };

  const Education = {
    degree: "B.A English",
    institution: "Thiruvalluvar University",
    Field: "English literature",
    start: 2022,
    end: 2025,
  };

  const ProfessionalDetails = {
    title: "Full Stack Developer",
    compony: "TCS",
    totallExperience: 2,
    industry: "IT",

    Previous: [
      {
        company: "Infosys",
        role: "Front-end Developer",
        years: 1,
      },
      {
        company: "zoho",
        role: "junior- developer",
        years: 2,
      }
    ],
  };

  return (
    <>


      <div>
        <h2>{PersonalInformation.username}</h2>
        <h2>{PersonalInformation.mobile}</h2>
        <h2>{PersonalInformation.gender}</h2>
      </div>
<h1>Education</h1>
      <div>
        <h4>{Education.degree}</h4>
        <h4>{Education.institution}</h4>
        <h4>{Education.Field}</h4>
        <h4>
          {Education.start} - {Education.end}
        </h4>
      </div>


<h1>Professional</h1>
      <div>
        <h3>{ProfessionalDetails.title}</h3>
        <h3>{ProfessionalDetails.compony}</h3>
        <h3>{ProfessionalDetails.industry}</h3>
      </div>
      <div>
        <h1>previous experience</h1>
        {ProfessionalDetails.Previous.map((item, index) => (
          <div key={index}>
            <div>
              <h4>{item.company}</h4>
              <h4>{item.role}</h4>
              <h4>{item.years}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
