import React from "react";
import { Link } from "react-router-dom";
//  importing validateion for form
import validate from '../validateInfo.jsx';
import useForm from '../useForm.jsx';

const Register = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-2">
                <div className="btn-wrapper text-center">
                    <img
                      alt="..."
                      className=" mr-1"
                      src={require("assets/img/eupheus-logo-land.png").default}
                    />
                </div>
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-2 pt-0">
                <form onSubmit={handleSubmit} className='form' noValidate>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      name="username"
                      className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      value={values.username}
                      onChange={handleChange}
                    />
                     {errors.username && <p>{errors.username}</p>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                     {errors.password && <p>{errors.password}</p>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password2"
                      className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={values.password2}
                      onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer pr-4">
                      <input
                        id="customCheckLogin"
                        type="radio"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Parent/Student
                      </span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id=""
                        type="radio"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                       School Teacher
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap relative">
              <div className="w-1/2">
                
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Sign In</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;