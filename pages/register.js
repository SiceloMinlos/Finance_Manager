import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { MdEmail, MdOutlineRemoveRedEye, MdPerson } from "react-icons/md";
import { useState } from "react";
import { useFormik } from "formik";

export default function Register() {

    const [show, setShow] = useState(false)
    const formik = useFormik({                  //formik hook
        initialValues: {
            full_name: "",
            email: "",
            password: ""
        },
        validate: (values) => {
            const errors = {};

            if (!values.full_name) {
                errors.full_name = "Full name is required"
            } else if (!values.full_name.includes(" ")) {
                errors.full_name = "Please enter both first and last name"
            } else if ((values.full_name.split(" ")[0].length > 50 || values.full_name.split(" ")[1].length > 50)) {
                errors.full_name = "Please enter valid Full name"
            }

            if (!values.email) {
                errors.email = 'Email Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password Required';
            } else if (values.password.length < 5 || values.password.length > 15) {
                errors.password = 'Password must be greater than 5 but less than 16';
            }

            return errors;
        },
        onSubmit
    })

    async function onSubmit(values) {
        console.log(values)
    }

    return (
        <Layout>
            <Head>                          //allows us to create a title for the page
                <title>Register</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Hey There</h1>
                    <p className="w-3/4 mx-auto text-gray-500">Register</p>
                </div>

                {/* form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input}>
                        <input type="text" name="full_name" placeholder="Full Name" className={styles.input_text} {...formik.getFieldProps("full_name")} />
                        <span className="icon flex items-center px-4">
                            <MdPerson size={20} />
                        </span>
                    </div>
                    {formik.errors.full_name && formik.touched.full_name ? <span className="text-red-500">{formik.errors.full_name}</span> : <></>}
                    <div className={styles.input}>
                        <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} />
                        <span className="icon flex items-center px-4">
                            <MdEmail size={20} />
                        </span>
                    </div>
                    {formik.errors.email && formik.touched.email ? <span className="text-red-500">{formik.errors.email}</span> : <></>}
                    <div className={styles.input}>
                        <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps("password")} />
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            <MdOutlineRemoveRedEye size={20} />
                        </span>
                    </div>
                    {formik.errors.password && formik.touched.password ? <span className="text-red-500">{formik.errors.password}</span> : <></>}

                    {/* Submit */}
                    <div className={styles.submit_button}>
                        <button type="submit">
                            Register
                        </button>
                    </div>

                </form>

                {/* bottom */}
                <p className="text-center text-gray-500">Already have an account? <Link href={'/login'} className="text-blue-700">Log in</Link></p>

            </section>
        </Layout>
    )
}