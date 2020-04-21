import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Editemployee = (route) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, fname: '', lname: '', email: '', cotnact: '', status: '' });
    const currentUserId = route.match.params.id;
    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        //e.preventDefault();
        editEmployee(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fname">
                            First Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.fname} onChange={(e) => handleOnChange('fname', e.target.value)} type="text" placeholder="First name"

                            name="fname"


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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.lname} onChange={(e) => handleOnChange('lname', e.target.value)} type="text" placeholder="Last Name"
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.email} onChange={(e) => handleOnChange('email', e.target.value)} type="text" placeholder="Enter Email"
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.contact} onChange={(e) => handleOnChange('contact', e.target.value)} type="text" placeholder="Enter contact"
                            name="contact"

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
                        <select id="status" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={selectedUser.status} onChange={(e) => handleOnChange('status', e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Contact
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}