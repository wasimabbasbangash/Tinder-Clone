import React from "react";
import rewind from "../../misc/rewind.png";

function Rewind({ userId, modifySuperficialChoices }) {
  return (
    <>
      <button
        type='button'
        className='action-button'
        style={{ border: "1px solid #FDC302" }}
        onClick={() => modifySuperficialChoices(userId, "REWIND_USER")}
      >
        <img src={rewind} alt='Rewind'></img>
      </button>
    </>
  );
}

export default Rewind;
