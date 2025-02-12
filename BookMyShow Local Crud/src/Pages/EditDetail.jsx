import React, { useEffect, useState } from "react";
import Navbarcode from "../Component/Navbarcode";
import { useParams } from "react-router";

function EditDetail() {
 

  return (
    <div>
      <Navbarcode></Navbarcode>
      {/* <div className="h-[500px] w-[100%] flex justify-center items-center bg-[#EBEBEB] ">
        <div className="h-[80%] w-[35%] bg-[white] drop-shadow-xl">
          <h1 className="text-center text-[22px] mt-[8%]">Edit Movie Detail</h1>
          <form action="">
            <input
              type="text"
              name="img"
             
              placeholder="Image URL"
              className="h-[40px] pl-[10px] w-[85%] ml-[7.5%] border mt-[5%]"
              id=""
            />
            <input
              type="text"
              name="title"
              
              placeholder="Title"
              className="h-[40px] pl-[10px] w-[85%] ml-[7.5%] border mt-[20px]"
              id=""
            />
            <input
              type="text"
              name="des"
              
              placeholder="Description"
              className="h-[40px] pl-[10px] w-[85%] ml-[7.5%] border mt-[20px]"
              id=""
            />
            <input
              type="submit"
              name=""
              className="h-[45px] w-[85%] ml-[7.5%] hover:shadow-sm cursor-pointer rounded-[5px] bg-[#F84464] text-[white]  border mt-[25px]"
             
              id=""
            />
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default EditDetail;
