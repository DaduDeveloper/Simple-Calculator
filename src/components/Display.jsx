// import React from 'react'
import styles from "./Display.module.css"
import PropTypes from 'prop-types'



const Display = ({displayValue}) => {
  return (
    <div>
            <input className={styles.display} type="text" value={displayValue} readOnly />
    </div>
  )
}

export default Display


Display.propTypes={
  displayValue:PropTypes.any
}
