import React from "react";

const Same_btn_2 = (props) => {
  return (
    <div>
      <button
        onClick={props.funxn}
        className=" py-[10px] px-[10px] text-base text-nowrap xl:text-xl shadow-[inset_18rem_0_0_0_#BD7D41] hover:shadow-[inset_0_0_0_0]  duration-500  border-[1px] border-[#BD7D41]   font-ff-pop font-medium text-white bg-[#BD7D41] not-italic leadin-normal text-center"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Same_btn_2;
