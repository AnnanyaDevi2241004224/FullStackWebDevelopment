import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()

      }, d * 1000);
    })
  }
  // const onSubmit = (data) =>{ console.log(data);}
  const onSubmit = async (data) => {
    // await delay(3)
    let r = await fetch("http://localhost:3000/", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    })
    let res =await r.text()
    console.log(data, r);
    // if(data.username !== "shubham"){
    //   setError("myForm",{message:"credentials are invalid"})
    // }
    // if(data.username==="Virat")
    // {
    //   setError("blocked",{message:"Sorry this user is blocked"})
    // }
  }

  return (
    <>
      {isSubmitting && <div>loading......</div>}
      <div className="container">
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("username",{required:true,minLength:3,maxLength:8})} type="text" placeholder="username" /><br />
        {errors.username && <div className='red'>there is some error in username</div>} */}

          <input {...register("username", { required: true, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" placeholder="username" /><br />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input {...register("password", { minLength: { value: 7, message: "paaword must be of length 7 atleast..." } })} type="password" placeholder="password" /><br />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />

          {errors.myForm && <div className='red'>{errors.myForm.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  );
}

export default App;
