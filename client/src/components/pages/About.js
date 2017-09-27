import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  aboutHeader: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  aboutSectionDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid',
    backgroundColor: 'white',
    opacity: 0.7
  },
  aboutSectionContent: {
    display: 'flex'
  }
}

const enhancer = injectSheet(styles)

const About = (props) => {
  return (
    <div>
      <div>
        <h1 className={props.classes.aboutHeader}>About</h1>
      </div>
      <div className='whatWeDo' className={props.classes.aboutSectionDiv}>
        <h3 className={props.classes.aboutSectionContent}>What We Do</h3>
        <p className={props.classes.aboutSectionContent}>This is what we do</p>
      </div>
      <div className='careerOpportunity' className={props.classes.aboutSectionDiv}>
        <h3 className={props.classes.aboutSectionContent}>Career Opportunities</h3>
        <p className={props.classes.aboutSectionContent}>Here is a list of careers</p>
      </div>
    </div>
  )
}

About.propTypes = propTypes
export default enhancer(About)
