import React from "react";
import { Formik } from "formik";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <br />
      <br />
      <Formik
        initialValues={{
          firstName: "Ali",
          lastName: "Veli",
          email: "4950@gmail.com",
          gender: "male",
          hobies:[],
          country:"Turkey"

        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="male"
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="female"
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input type="checkbox" name="hobies" value="Play Football" onChange={handleChange}/>
              Football
            </div>
            <div>
              <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/>
              Cinema
            </div>
            <div>
              <input type="checkbox" name="hobies" value=" Photography" onChange={handleChange}/>
              Photography
            </div>
            <br/>
            <br/>

            <select name="country" onChange={handleChange} value={values.country}>
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>


            </select>


            <button type="submit">Submit</button>
            <br />
            <br />

            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
