import React from 'react'
const styles = {
  aboutHeader: {
    marginTop: 50,
    textAlign: 'center'
  },
  aboutSectionDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid'
  },
  aboutSectionContent: {
    display: 'flex'
  },
  aboutDivContainer: {
    background: 'url(https://thumbs.dreamstime.com/z/thin-line-web-e-commerce-shopping-mint-seamless-pattern-vector-retail-store-market-design-background-trendy-61035544.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    fontFamily: 'Gloria Hallelujah'
  }
}
// display: flex;
// justify-content: center;
// align-items: center;
// flex-wrap: wrap;
// margin-top: 19px;

const About = () => {
  return (
    <div style={styles.aboutDivContainer}>
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
