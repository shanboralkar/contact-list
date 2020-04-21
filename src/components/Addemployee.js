import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const Addemployee = () => {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState('');
    const { handleSubmit, register, errors } = useForm();

    const { addEmployee, employees } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        // e.preventDefault();
        //  console.log(fname);

        const newEmployee = {
            id: employees.length + 1,
            fname,
            lname,
            email,
            contact,
            status
        }
        addEmployee(newEmployee);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fname">
                            First Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={fname} onChange={(e) => setFirstName(e.target.value)} type="text" name="fname" placeholder="Enter First Name"
            


                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[a-zA-Z](\s?[a-zA-Z]){2,29}$/,
                                    message: "Only Letters Allowed. Min : 2 And Max : 29"
                                }
                            })}

                        />
                        {errors.fname && errors.fname.message}
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lname">
                            Last Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={lname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name"

                            name="lname"


                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[a-zA-Z](\s?[a-zA-Z]){2,29}$/,
                                    message: "Only Letters Allowed. Min : 2 And Max : 29"
                                }
                            })}

                        />
                        {errors.lname && errors.lname.message}
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"
                            name="email"
                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && errors.email.message}
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact" name="contact"

                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Only Digits Allowed"
                                }
                            })}


                        />
                        {errors.contact && errors.contact.message}
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
                            Status
                        </label>
                        <select id="status" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}