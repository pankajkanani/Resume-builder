import React, { useState, useEffect } from 'react';
import Files from 'react-files';
import '../styles/Form.scss';

const Form = ({ data, setData }) => {
  const { name, photoUrl, location, phone, email, linkedin, github } = data.contact;
  // const skills = data.skills;
  const languages = data.languages;
  const references = data.references;
  const objective = data.objective;
  const education = data.education;
  const experience = data.experience;
  const certifications = data.certifications;
  const projects = data.projects;
  const projects_link = data.projects_link;
  const workshops = data.workshops;

  const [skills, setSkills] = useState('');
  useEffect(() => {
    let temp = '';
    data.skills.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setSkills(temp);
  }, [data]);

  const handleFileUpload = (file) => {
    var fileReader = new FileReader();
    fileReader.onload = (event) => {
      setData();
      setData(JSON.parse(event.target.result));
    };
    fileReader.readAsText(file[0]);
  };

  // Contact
  const handleContactChange = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Skills
  const handleSkillsUpdate = () => {
    var array = skills.split(',');
    setData({
      ...data,
      skills: array,
    });
  };

  // Languages
  const addLanguageRow = (e) => {
    let temp = languages;
    temp.push({});
    setData({
      ...data,
      languages: temp,
    });
  };
  const removeLanguageRow = (e, index) => {
    let temp = languages;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      languages: temp,
    });
  };
  const handleLanguageChange = (e, index, type) => {
    let temp = languages;
    if (type === 'language') {
      temp[index].language = e.target.value;
    } else if (type === 'level') {
      if (e.target.value > 5) {
        temp[index].level = 5;
      } else if (e.target.value < 1) {
        temp[index].level = 1;
      } else {
        temp[index].level = e.target.value;
      }
    }
    setData({
      ...data,
      languages: temp,
    });
  };

  // References
  const addReferenceRow = (e) => {
    let temp = references;
    temp.push({});
    setData({
      ...data,
      references: temp,
    });
  };
  const removeReferenceRow = (e, index) => {
    let temp = references;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      references: temp,
    });
  };
  const handleReferenceChange = (e, index, type) => {
    let temp = references;
    if (type === 'name') {
      temp[index].name = e.target.value;
    } else if (type === 'desig') {
      temp[index].desig = e.target.value;
    } else if (type === 'phone') {
      temp[index].phone = e.target.value;
    } else if (type === 'email') {
      temp[index].email = e.target.value;
    }
    setData({
      ...data,
      referencess: temp,
    });
  };

  // Education
  const addEducationRow = (e) => {
    let temp = education;
    temp.push({ year: '', course: '', institution: '', university: '', percentage: '' });
    setData({
      ...data,
      education: temp,
    });
  };
  const removeEducationRow = (e, index) => {
    let temp = education;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      education: temp,
    });
  };
  const handleEducationChange = (e, index, type) => {
    let temp = education;
    if (type === 'year') {
      temp[index].year = e.target.value;
    } else if (type === 'course') {
      temp[index].course = e.target.value;
    } else if (type === 'institution') {
      temp[index].institution = e.target.value;
    } else if (type === 'university') {
      temp[index].university = e.target.value;
    } else if (type === 'percentage') {
      temp[index].percentage = e.target.value;
    }
    setData({
      ...data,
      education: temp,
    });
  };

  // Experience
  const addExperienceRow = (e) => {
    let temp = experience;
    temp.push({ year: '', company: '', position: '', description: '' });
    setData({
      ...data,
      experience: temp,
    });
  };
  const removeExperienceRow = (e, index) => {
    let temp = experience;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      experience: temp,
    });
  };
  const handleExperienceChange = (e, index, type) => {
    let temp = experience;
    if (type === 'year') {
      temp[index].year = e.target.value;
    } else if (type === 'company') {
      temp[index].company = e.target.value;
    } else if (type === 'position') {
      temp[index].position = e.target.value;
    } else if (type === 'description') {
      temp[index].description = e.target.value;
    }
    setData({
      ...data,
      experience: temp,
    });
  };

  // Certifications
  const addCertificationRow = (e) => {
    let temp = certifications;
    temp.push({ year: '', institution: '', course: '', description: '' });
    setData({
      ...data,
      certifications: temp,
    });
  };
  const removeCertificationRow = (e, index) => {
    let temp = certifications;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      certifications: temp,
    });
  };
  const handleCertificationChange = (e, index, type) => {
    let temp = certifications;
    if (type === 'year') {
      temp[index].year = e.target.value;
    } else if (type === 'institution') {
      temp[index].institution = e.target.value;
    } else if (type === 'course') {
      temp[index].course = e.target.value;
    } else if (type === 'description') {
      temp[index].description = e.target.value;
    } else if (type === 'score') {
      temp[index].score = e.target.value;
    }
    setData({
      ...data,
      certifications: temp,
    });
  };

  // Projects
  const addProjectRow = (e) => {
    let temp = projects;
    temp.push({ title: '', link: '', description: '' });
    setData({
      ...data,
      projects: temp,
    });
  };
  const removeProjectRow = (e, index) => {
    let temp = projects;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      projects: temp,
    });
  };
  const handleProjectChange = (e, index, type) => {
    let temp = projects;
    if (type === 'title') {
      temp[index].title = e.target.value;
    } else if (type === 'link') {
      temp[index].link = e.target.value;
    } else if (type === 'description') {
      temp[index].description = e.target.value;
    }
    setData({
      ...data,
      projects: temp,
    });
  };

  // Workshops
  const addWorkshopRow = (e) => {
    let temp = workshops;
    temp.push({ year: '', description: '' });
    setData({
      ...data,
      workshops: temp,
    });
  };
  const removeWorkshopRow = (e, index) => {
    let temp = workshops;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      workshops: temp,
    });
  };
  const handleWorkshopChange = (e, index, type) => {
    let temp = workshops;
    if (type === 'year') {
      temp[index].year = e.target.value;
    } else if (type === 'description') {
      temp[index].description = e.target.value;
    }
    setData({
      ...data,
      workshops: temp,
    });
  };

  return (
    <div className='form-container'>
      <Files
        className='files-dropzone'
        onChange={(file) => handleFileUpload(file)}
        onError={(err) => console.log(err)}
        accepts={['.json']}
        multiple
        maxFiles={1}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Upload JSON File
      </Files>

      <div className='form'>
        <div className='section contact'>
          <hr />
          <h3 className='heading'>Contact</h3>
          <p className='label'>Name</p>
          <input type='text' name='name' value={name} onChange={handleContactChange} />
          <p className='label'>Photo URL</p>
          <input type='text' name='photoUrl' value={photoUrl} onChange={handleContactChange} />
          <p className='label'>Location</p>
          <input type='text' name='location' value={location} onChange={handleContactChange} />
          <p className='label'>Phone</p>
          <input type='text' name='phone' value={phone} onChange={handleContactChange} />
          <p className='label'>Email</p>
          <input type='text' name='email' value={email} onChange={handleContactChange} />
          <p className='label'>LinkedIn</p>
          <input type='text' name='linkedin' value={linkedin} onChange={handleContactChange} />
          <p className='label'>Github</p>
          <input type='text' name='github' value={github} onChange={handleContactChange} />
        </div>

        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Skills</h3>
            <button className='btn btn-sm btn-primary' onClick={handleSkillsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>

        <div className='section languages'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Languages</h3>
            <button className='btn btn-sm btn-dark' onClick={addLanguageRow}>
              Add
            </button>
          </div>
          {languages.map((item, index) => {
            return (
              <div className='row'>
                <input
                  type='text'
                  name='language'
                  placeholder='Language'
                  value={item.language}
                  onChange={(e) => handleLanguageChange(e, index, 'language')}
                />
                <input
                  type='number'
                  name='level'
                  placeholder='Level'
                  value={item.level}
                  onChange={(e) => handleLanguageChange(e, index, 'level')}
                />
                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeLanguageRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className='section references'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>References</h3>
            <button className='btn btn-sm btn-dark' onClick={addReferenceRow}>
              Add
            </button>
          </div>
          {references.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={item.name}
                    onChange={(e) => handleReferenceChange(e, index, 'name')}
                  />
                  <textarea
                    name='desig'
                    cols='30'
                    rows='3'
                    placeholder='Designation'
                    value={item.desig}
                    onChange={(e) => handleReferenceChange(e, index, 'desig')}
                  />
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone number'
                    value={item.phone}
                    onChange={(e) => handleReferenceChange(e, index, 'phone')}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={item.email}
                    onChange={(e) => handleReferenceChange(e, index, 'email')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeReferenceRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className='section objective'>
          <hr />
          <h3 className='heading'>Objective</h3>
          <textarea
            name='objective'
            cols='50'
            rows='5'
            value={objective}
            onChange={(e) => setData({ ...data, objective: e.target.value })}
          ></textarea>
        </div>

        <div className='section education'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Education</h3>
            <button className='btn btn-sm btn-dark' onClick={addEducationRow}>
              Add
            </button>
          </div>
          {education.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleEducationChange(e, index, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course/Degree'
                    value={item.course}
                    onChange={(e) => handleEducationChange(e, index, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='School/College'
                    value={item.institution}
                    onChange={(e) => handleEducationChange(e, index, 'institution')}
                  />
                  <input
                    type='text'
                    name='university'
                    placeholder='Board/University'
                    value={item.university}
                    onChange={(e) => handleEducationChange(e, index, 'university')}
                  />
                  <input
                    type='number'
                    name='percentage'
                    placeholder='Percentage/GPA'
                    value={item.percentage}
                    onChange={(e) => handleEducationChange(e, index, 'percentage')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeEducationRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className='section experience'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Experience</h3>
            <button className='btn btn-sm btn-dark' onClick={addExperienceRow}>
              Add
            </button>
          </div>
          {experience.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleExperienceChange(e, index, 'year')}
                  />
                  <input
                    type='text'
                    name='position'
                    placeholder='Role/Position'
                    value={item.position}
                    onChange={(e) => handleExperienceChange(e, index, 'position')}
                  />
                  <input
                    type='text'
                    name='company'
                    placeholder='Company'
                    value={item.company}
                    onChange={(e) => handleExperienceChange(e, index, 'company')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleExperienceChange(e, index, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeExperienceRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className='section certifications'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Certifications</h3>
            <button className='btn btn-sm btn-dark' onClick={addCertificationRow}>
              Add
            </button>
          </div>
          {certifications.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleCertificationChange(e, index, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course'
                    value={item.course}
                    onChange={(e) => handleCertificationChange(e, index, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='Institution'
                    value={item.institution}
                    onChange={(e) => handleCertificationChange(e, index, 'institution')}
                  />
                  <input
                    type='text'
                    name='score'
                    placeholder='Score'
                    value={item.score}
                    onChange={(e) => handleCertificationChange(e, index, 'score')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleCertificationChange(e, index, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeCertificationRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className='section projects'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Projects</h3>
            <button className='btn btn-sm btn-dark' onClick={addProjectRow}>
              Add
            </button>
          </div>
          {projects.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={item.title}
                    onChange={(e) => handleProjectChange(e, index, 'title')}
                  />
                  <input
                    type='text'
                    name='link'
                    placeholder='Project URL'
                    value={item.link}
                    onChange={(e) => handleProjectChange(e, index, 'link')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleProjectChange(e, index, 'description')}
                  />
                </div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeProjectRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <input
            type='text'
            name='projects_link'
            placeholder='URL of More Projects'
            value={projects_link}
            onChange={(e) => setData({ ...data, projects_link: e.target.value })}
          />
        </div>

        <div className='section workshops'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Workshops</h3>
            <button className='btn btn-sm btn-dark' onClick={addWorkshopRow}>
              Add
            </button>
          </div>
          {workshops.map((item, index) => {
            return (
              <div className='row'>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleWorkshopChange(e, index, 'year')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleWorkshopChange(e, index, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeWorkshopRow(e, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
