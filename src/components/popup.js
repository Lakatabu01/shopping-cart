import React from "react";

const PopUp = (props) => {
  return (
    <div className={props.visibility}>
      <div> I am a PopUp</div>
      <div>
        <button onClick={props.close}>X</button>
      </div>
    </div>
  );
};

export default PopUp;
