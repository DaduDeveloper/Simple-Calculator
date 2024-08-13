// import React from 'react'
import styles from "./ButtonsContainer.module.css";
import PropTypes from 'prop-types'


const ButtonsContainer = ({handleButtonClick}) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    " 0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonsName.map((buttonName) => (
        <button key={buttonName} className={styles.button} onClick={()=>handleButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

ButtonsContainer.propTypes={
  handleButtonClick:PropTypes.any
}
