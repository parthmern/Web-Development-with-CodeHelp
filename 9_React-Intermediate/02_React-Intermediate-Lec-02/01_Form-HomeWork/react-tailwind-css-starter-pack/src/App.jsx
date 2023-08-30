import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState(
    {
      firstName : "",
      lastName : "",
      email : "",
      country : "",
      comments : true ,
      Candidates : false ,
      notification : "",
    }
  )

  function changehandler(e){
    console.log(e.target.value);

    setFormData( (prevFormData)=> {

      return{ 
        ...prevFormData , 

        [e.target.name] : (e.target.type === "checkbox") ? e.target.checked : e.target.value
      }
    } )

  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formData);
  }

  //console.log(formData);
  return (
   <div>
    <p>FORM</p>

    <form className="flex flex-col" >

      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={changehandler} value={formData.firstName} ></input>

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={changehandler} value={formData.lastName} ></input>

      <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" placeholder="parth@gmail.com" onChange={changehandler} value={formData.email} ></input>

      <label htmlFor="country">Country</label>
      <select onChange={changehandler} name="country">
        <option name="country" id="country" value="India" >India</option>
        <option name="country" id="country" value="US">US</option>
        <option name="country" id="country" value="Canada">Canada</option>
      </select>

      <br/>
      <label htmlFor="comments">Comments</label>
      <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changehandler}></input>

      <label htmlFor="Candidates">Candidates</label>
      <input type="checkbox" name="Candidates" id="Candidates" checked={formData.Candidates} onChange={changehandler}></input>

      <p>notification</p>
      <label htmlFor="Everything">Everything</label>
      <input type="radio" name="notification" id="Everything" value="Everything" onChange={changehandler} ></input>

      <label htmlFor="sameas">same as email</label>
      <input type="radio" name="notification" id="sameas" value="sameas" onChange={changehandler}></input>

      <button type="submit" onClick={submitHandler} >SAVE</button>

    </form>

   </div>
  );
}

export default App;
