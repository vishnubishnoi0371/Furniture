import React from "react";

const Samebtn = (props) => {
  return (
    <button
      id="fifth"
      className="px-[20px] md:px-[48px] buttonbox py-3 md:py-[19px] shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500 hover:text-[#BD7D41] border-[1px] border-[#BD7D41]  text-white  text-lg font-ff-pop font-semibold not-italic uppercase text-center"
    >
      {props.text}
    </button>
  );
};

export default Samebtn;
