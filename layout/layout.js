import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {        //children being the content that is in the file that imported this function
    return (
        <div className="flex min-h-screen bg-gray-200 justify-center items-center">
            <div className="bg-gray-300 rounded-lg w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.imageStyle}>
                    <div className={styles.gif}>
                    </div>
                </div>
                <div className="right flex flex-col justify-evenly bg-gray-300 rounded-md">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}