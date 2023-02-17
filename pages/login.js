import Head from "next/head"
import Layout from "../layout/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"
import Image from "next/image";
import { MdEmail, MdOutlineRemoveRedEye, } from "react-icons/md";
import { useState } from "react";

export default function Login() {

    const [show, setShow] = useState(false)

    return (
        <Layout>
            <Head>                          //allows us to create a title for the page
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Hey There</h1>
                    <p className="w-3/4 mx-auto text-gray-500">Log in</p>
                </div>

                {/* form */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input}>
                        <input type="email" name="email" placeholder="Email" className={styles.input_text}/>
                        <span className="icon flex items-center px-4">
                            <MdEmail size={20}/>
                        </span>
                    </div>
                    <div className={styles.input}>
                        <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text}/>
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            <MdOutlineRemoveRedEye size={20}/>
                        </span>
                    </div>

                    {/* Submit */}
                    <div className={styles.submit_button}>
                        <button type="submit">
                            Login
                        </button>
                    </div>

                    <div className={styles.gmail_button}>
                        <button type="button">
                            Login with Gmail
                        </button>
                        <Image src={"/assets/google.svg"} width={25} height={25}></Image>
                    </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-500">Don't have an account? <Link href={'/register'} className="text-blue-700">Sign up</Link></p>

            </section>
        </Layout>
    )
}