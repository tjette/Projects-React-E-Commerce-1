import React from 'react'
const styles = {
  aboutHeader: {
    marginTop: 50,
    backgroundColor: '#00cccc',
    textAlign: 'center'
  },
  aboutSectionDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gray',
    border: 'solid'
  },
  aboutSectionContent: {
    display: 'flex'
  }
}
// display: flex;
// justify-content: center;
// align-items: center;
// flex-wrap: wrap;
// margin-top: 19px;

const About = () => {
  return (
    <div>
      <div>
        <h1 style={styles.aboutHeader}>About</h1>
      </div>
      <div  className="whatWeDo" style={styles.aboutSectionDiv}>
        <h3 style={styles.aboutSectionContent}>What We Do</h3>
        <p style={styles.aboutSectionContent}>This is what we do</p>
      </div>
      <div className="careerOpportunity"style={styles.aboutSectionDiv}>
        <h3 style={styles.aboutSectionContent}>Career Opportunities</h3>
        <p style={styles.aboutSectionContent}>Here is a list of careers</p>
      </div>
    </div>
  )
}

export default About
