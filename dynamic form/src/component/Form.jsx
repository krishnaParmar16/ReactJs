import React, { useState } from "react";
import "../App.css";
function Form() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    skill: [""],
    hobby:[""],
  });
  // const [skill,setskill]=useState([""])

  const addskill = () => {
    setState({ ...state, skill: [...state.skill, ""] });
  };
  const addhobby = () => {
    setState({ ...state, hobby: [...state.hobby, ""] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (isNaN(name)) {
      setState({ ...state, [name]: value });
    // } else {
    //   const arr = [...state.skill];
    //   arr[name] = value;
    //   setState({ ...state, skill: arr });
    // }
  };

  const handleSkill=(e,index)=>{
      const arr=[...state.skill];
      arr[index]=e.target.value;
      setState({...state,skill:arr});
  }

  const handlehobby=(e,index)=>{
    const arr=[...state.hobby];
    arr[index]=e.target.value;
    setState({...state,hobby:arr});
}
  // console.log(state);

  const deleteSkill = (e) => {
    const index = e.target.name;
    console.log(index);
    const arr=[...state.skill]
    arr.splice(index,1);
    setState({...state,skill:arr})
    
  };
  const deletehobby = (e) => {
    const index = e.target.name;
    console.log(index);
    const arr=[...state.hobby]
    arr.splice(index,1);
    setState({...state,hobby:arr})
  };

  const [arr, setarr] = useState([]);

  const handleSubmit = (form) => {
    form.preventDefault();
    setarr([...arr, state]);

    alert("Data added successfully");

    setState({
      firstName: "",
      lastName: "",
      email: "",
      skill: [""],
      hobby:[""],
    });
  };

  console.log(arr);

  return (
    <div className="h-[auto] w-[35%]  ml-[32.5%] mt-[50px] drop-shadow-md shadow-xl ">
      <h1 className="mt-[20px] text-[22px] text-center font-semibold">Form</h1>
      <form
        action=""
        className="flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstName"
          id=""
          className=""
          value={state.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />

        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          id=""
          value={state.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          id=""
          value={state.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <label htmlFor="">
          Skills
          <input
            type="button"
            name=""
            className="h-[30px] bg-[black] text-[white] cursor-pointer text-[12px] ml-[20px] w-[95px]  "
            id=""
            value="Add Skill "
            onClick={addskill}
          />
        </label>

        {state.skill.map((el, index) => {
          return (
            <div className="flex mb-[0px] w-[70%]" key={index}>
              <input
                type="text"
                className="w-[75%]"
                value={el}
                name={index}
                id=""
                placeholder="Enter your skill"
                onChange={(e)=>handleSkill(e,index)}
              />
              {
                state.skill.length>1?
                <input
                  type="button"
                  name={index}
                  id=""
                  value="Delete"
                  onClick={deleteSkill}
                  className="h-[45px] w-[25%] cursor-pointer border text-[12px] bg-[red] text-[white]"
                />:""
              }
            </div>
          )
        })}

        <label htmlFor="">
          Hobbies
          <input
            type="button"
            name=""
            className="h-[30px] bg-[black] text-[white] cursor-pointer text-[12px] ml-[20px] w-[95px]  "
            id=""
            value="Add Hobby "
            onClick={addhobby}
          />
        </label>

        {
        state.hobby.map((el, index) => {
          return (
            <div className="flex mb-[0px] w-[70%]" key={index}>
              <input
                type="text"
                className="w-[75%]"
                value={el}
                name={index}
                id=""
                placeholder="Enter your hobby"
                onChange={(e)=>handlehobby(e,index)}
              />
              {
                state.hobby.length>1?
                <input
                  type="button"
                  name={index}
                  id=""
                  value="Delete"
                  onClick={deletehobby}
                  className="h-[45px] w-[25%] cursor-pointer border text-[12px] bg-[red] text-[white]"
                />:""
              }
            </div>
          )
        })}

        <input
          type="submit"
          className="bg-[black] text-[white] mb-[20px] cursor-pointer hover:bg-[transparent] hover:text-[black] hover:border-[black] mt-[10px] delay-75"
        />
      </form>
    </div>
  );
}

export default Form;
