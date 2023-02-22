import Head from "next/head"
import Layout from "../layout/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"
import Image from "next/image";
import { MdEmail, MdOutlineRemoveRedEye, } from "react-icons/md";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";

export default function Login() {

    const [show, setShow] = useState(false)

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
    };

    const formik = useFormik({                  //formik hook
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            const errors = {};

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
            <Head>
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Hey There</h1>
                    <p className="w-3/4 mx-auto text-gray-500">Log in</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input}>
                        <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps("email")} />
                        <span className="icon flex items-center px-4">
                            <MdEmail size={20} />
                        </span>
                    </div>
                    <div className={styles.input}>
                        <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps("password")} />
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            <MdOutlineRemoveRedEye size={20} />
                        </span>
                    </div>

                    <div className={styles.submit_button}>
                        <button type="submit">
                            Login
                        </button>
                    </div>

                    <div onClick={handleGoogleSignIn} className={styles.gmail_button}>
                        <button type="button">
                            Login with Gmail
                        </button>
                        <Image src={"/assets/google.svg"} width={25} height={25}></Image>
                    </div>
                </form>

                <p className="text-center text-gray-500">Don't have an account? <Link href={'/register'} className="text-blue-700">Sign up</Link></p>

            </section>
        </Layout>
    )
}
