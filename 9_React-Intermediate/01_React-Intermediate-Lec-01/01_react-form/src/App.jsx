import { useState } from "react";
import "./App.css";

function App() {

  // const [firstName,setFirstName]= useState('');
  // const [lastName,setLastName]= useState('');

  // function changeFirstNameHandler(e){
  //   // console.log("firstname");
  //   // console.log(e.target.value);  //(e.target) == perticular element in html format
  //   setFirstName(e.target.value);
  // }
  // console.log(firstName);

  // function changeLastnameHandler(e){
  //   // console.log("last name");
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }
  // console.log(lastName);

  const [formData,setFormData] = useState(
    {
      firstName : "" ,
      lastName : "",
      email : "",
      comments : "",
      isVisible: true,
      mode :"",
      favCar:""
    }
  );

  function submitHandler(event){
      event.preventDefault();
      console.log("submitted");
      console.log(formData);
  }

  function changeHandler(event){

    const {name,value,checked,type} = event.target;

    setFormData( (prevFormData)=>{
      return {
        ...prevFormData,
        [name] : type==="checkbox" ? checked : value 
      }
    } )
  }

  console.log(formData);


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName}></input>
        <br/>
        <br/>
        <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName} ></input>
        <br/>
        <br/>
        <input type="text" placeholder="email" onChange={changeHandler} name="email" value={formData.email} ></input>
        <br/>
        <br/>
        <textarea placeholder="enter cmnts here" onChange={changeHandler} name="comments" value={formData.comments} ></textarea>
        <br />
        <br />

        <label htmlFor="isVisible" >Am i visible?</label>
        <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible}  ></input>
        <br/>
        <br/>


        <fieldset>
          <legend>Mode : </legend>

          {/* in radio button "name" should be similar */}
        <label htmlFor="Online-Mode" >Online mode</label>
        <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode == "Online-Mode"} ></input>
        <label htmlFor="Offline-Mode" >Offline mode</label>
        <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode" checked={formData.mode == "Offline-Mode"} ></input>

        </fieldset>

        <br/>
        <br/>

        <label htmlFor="favCar">fav car ==</label>
        <select onChange={changeHandler} name="favCar">
        
          <option value="scorpio">scorpio</option>
          <option value="mcq">mcq</option>
          <option value="bme">bme</option>
          <option value="thar">thar</option>
        </select>

        <br/>
        <br/>

        {/* <input type="submit"></input> */}

        <button onSubmit={submitHandler}>Submit</button>

      </form>
    </div>
  );
}

export default App;
