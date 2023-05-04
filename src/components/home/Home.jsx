import { useState } from "react"
import { useSendMailMutation } from "./redux/mailApiSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SkillBox from "../../components/shared/SkillBox"
import htmlSrc from "../../assets/logos/html.png"
import cssSrc from "../../assets/logos/css.png"
import jsSrc from "../../assets/logos/js.png"
import materialUiSrc from "../../assets/logos/materialui.png"
import mongoDbSrc from "../../assets/logos/mongodb.png"
import nodeJsSrc from "../../assets/logos/nodejs.png"
import reactJsSrc from "../../assets/logos/reactjs.png"
import reduxSrc from "../../assets/logos/redux.png"
import tailwindCssSrc from "../../assets/logos/tailwindcss.png"
import {
    AiFillFacebook,
    AiFillGithub,
    AiOutlineSelect,
    AiOutlineGithub,
    AiOutlineUnorderedList,
    AiOutlineMail,
    AiFillMail,
} from "react-icons/ai"

function Home() {
    const [clientMail, setClientMail] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientMessage, setClientMessage] = useState("")
    const [formIsDirty, setFormIsDirty] = useState(false)

    const [sendMail, { isLoading }] = useSendMailMutation()

    const canSave =
        (!clientMail && !clientMessage) ||
        clientMail === "" ||
        clientMessage === ""

    const handleClickSendMail = async () => {
        setFormIsDirty(true)

        if (canSave) return

        toast.success(
            `Thank you ${clientName}, your message have  been sent!`,
            {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        )

        const response = await sendMail({
            clientName,
            clientMail,
            clientMessage,
        })

        if (response) {
            setClientName("")
            setClientMail("")
            setClientMessage("")
            setFormIsDirty(false)
        } else {
            toast.error("Sorry, your message cannot be sent at this time", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const handleSetClientName = (event) => {
        setClientName(event.target.value)
    }

    const handleSetClientMail = (event) => {
        setClientMail(event.target.value)
    }

    const handleSetClientMessage = (event) => {
        setClientMessage(event.target.value)
    }

    return (
        <>
            <div className="scroll-smooth">
                <nav className="bg-sky-950 text-white">
                    <div className={styles.container}>
                        <div className="flex justify-center md:justify-between">
                            <h1 className="hidden text-lg font-semibold tracking-widest md:block">
                                YOW
                            </h1>

                            <div>
                                <ul className="flex flex-wrap">
                                    <li className="mb-2 mr-5 md:mb-0 md:mr-9">
                                        <a href="#me">ME</a>
                                    </li>

                                    <li className="mb-2 mr-5 md:mb-0 md:mr-9">
                                        <a href="#skills">SKILLS</a>
                                    </li>

                                    <li className="mb-2 mr-5 md:mb-0 md:mr-9">
                                        <a href="#projects">PROJECTS</a>
                                    </li>

                                    <li className="mb-2 mr-5 md:mb-0 md:mr-9">
                                        <a href="#contact_me">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <section
                    id="me"
                    className="flex items-center justify-center bg-sky-950 pb-10 text-white"
                >
                    <div className={styles.container}>
                        <div className="flex">
                            <div className="hidden items-center justify-center md:flex md:w-[40%]">
                                <img
                                    className="max-w-[80%]"
                                    src="https://khushmeen.com/img/illustrations/min/meditation.png"
                                    alt="avatar image"
                                />
                            </div>

                            <div className="flex w-full items-center justify-center md:w-[60%]">
                                <div className="max-w-[75ch]">
                                    <div className="text-center md:text-left">
                                        <h1 className="mb-2 text-3xl">
                                            Roger Pantil
                                        </h1>

                                        <h2 className="text-md mb-10 uppercase text-sky-100">
                                            Full stack MERN developer
                                        </h2>

                                        <p className="mb-8 leading-8 text-sky-100 ">
                                            Hi there, My name is Roger, and I am
                                            a full-stack <b>MERN</b> developer
                                            with a specialized focus on{" "}
                                            <b>React</b> and <b>Node.js</b>. I
                                            possess expertise in both client and
                                            backend programming, and I have been
                                            actively engaged in the field of
                                            JavaScript development for two
                                            years. Over the course of my career,
                                            I have accrued one year of practical
                                            experience and spent eight months
                                            dedicated specifically to React and
                                            Node.js.
                                        </p>
                                    </div>

                                    <div className="flex justify-center text-4xl md:justify-normal">
                                        <a className="icon-blue mr-4 cursor-pointer duration-300">
                                            <AiFillFacebook />
                                        </a>

                                        <a className="icon-blue mr-4 cursor-pointer duration-300">
                                            <AiFillGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="bg-sky-900 py-10 text-white">
                    <div className={styles.container}>
                        <div className="mb-12 flex flex-col items-center text-center">
                            <h1 className="mb-4 text-4xl font-semibold tracking-wide">
                                Skills
                            </h1>

                            <p className="flex max-w-[75ch]">
                                Skills I acquired throughout my years of
                                programming, with my specialty javascript. Click
                                complex for more details.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7 lg:grid-cols-5">
                            <SkillBox label="HTML" img={htmlSrc} />

                            <SkillBox label="CSS" img={cssSrc} />

                            <SkillBox label="JAVASCRIPT" img={jsSrc} />

                            <SkillBox label="REACT JS" img={reactJsSrc} />

                            <SkillBox label="NODE JS" img={nodeJsSrc} />

                            <SkillBox label="MONGO DB" img={mongoDbSrc} />

                            <SkillBox label="REDUX" img={reduxSrc} />

                            <SkillBox
                                label="TAILWIND CSS"
                                img={tailwindCssSrc}
                            />

                            <SkillBox label="MATERIAL UI" img={materialUiSrc} />
                        </div>
                    </div>
                </section>

                <section id="projects" className="bg-sky-950 py-10 text-white">
                    <div className={styles.container}>
                        <div className="mb-12 flex flex-col items-center text-center">
                            <h1 className="mb-4 text-4xl font-semibold tracking-wide">
                                Projects
                            </h1>

                            <p className="flex max-w-[75ch]">
                                My projects. Click the detailed info button for
                                more information such as features, libraries I
                                used and how it was made.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <div
                                        className="relative mb-2 rounded-sm bg-red-100 "
                                        style={{
                                            paddingBottom: "75%",
                                        }}
                                    >
                                        <img
                                            // className="mb-2 h-96 w-full rounded-sm object-cover"
                                            className="absolute h-full w-full object-cover"
                                            src="https://picsum.photos/600/600"
                                            alt="inventory management"
                                        />

                                        <h3 className="absolute left-4 top-4 flex rounded-md bg-gray-700/60 px-4 py-1 text-sm leading-6 text-white">
                                            New
                                        </h3>
                                    </div>

                                    <h1 className="mb-4 text-xl">
                                        Inventory management
                                    </h1>

                                    <p className="mb-8 text-sky-100">
                                        A simple inventory management with
                                        Material ui for the interface and
                                        implement of MUI Data Grid for the
                                        tables. The main focus of this system is
                                        the CRUD functions and track user
                                        events. I also implemented a simple role
                                        base account feature.
                                    </p>
                                </div>

                                <a className="cursor-pointer text-3xl duration-300 hover:text-sky-300"></a>

                                <div className="">
                                    <button
                                        type="button"
                                        className="btn btn-blue"
                                    >
                                        <AiOutlineSelect className="mr-3 text-lg" />
                                        Live demo
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-gray"
                                    >
                                        <AiOutlineGithub className="mr-3 text-lg" />
                                        View code
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-purple"
                                    >
                                        <AiOutlineUnorderedList className="mr-3 text-lg" />
                                        Detailed info
                                    </button>
                                </div>
                            </div>

                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <div
                                        className="relative mb-2 rounded-sm bg-red-100 "
                                        style={{
                                            paddingBottom: "75%",
                                        }}
                                    >
                                        <img
                                            // className="mb-2 h-96 w-full rounded-sm object-cover"
                                            className="absolute h-full w-full object-cover"
                                            src="https://picsum.photos/600/600"
                                            alt="inventory management"
                                        />

                                        <h3 className="absolute left-4 top-4 flex rounded-md bg-gray-700/60 px-4 py-1 text-sm leading-6 text-white">
                                            In progress
                                        </h3>
                                    </div>

                                    <h1 className="mb-4 text-xl">
                                        Secured login system with authentication
                                    </h1>

                                    <p className="mb-8 text-sky-100">
                                        A secured login system with Json web
                                        token authentication, bcrypt and node
                                        mailer and more. Some of the features
                                        include persist login, email password
                                        recovery, email verification, role
                                        authorization to limit access to
                                        specific resources or task.
                                    </p>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-blue"
                                    >
                                        <AiOutlineSelect className="mr-3 text-lg" />
                                        Live demo
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-gray"
                                    >
                                        <AiOutlineGithub className="mr-3 text-lg" />
                                        View code
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-purple"
                                    >
                                        <AiOutlineUnorderedList className="mr-3 text-lg" />
                                        Detailed info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact_me"
                    className="bg-sky-900 py-10 text-white"
                >
                    <div className={styles.container}>
                        <div className="mb-12 grid grid-cols-1 md:grid-cols-2">
                            <div className="mb-12 md:m-0">
                                <h1 className="mb-4 text-4xl font-semibold tracking-wide">
                                    Contact me
                                </h1>

                                <p className="mb-10 flex text-lg text-sky-100 md:max-w-[75%]">
                                    Send me a message or contact one of the
                                    accounts below
                                </p>

                                {/* <div className="flex gap-4 text-4xl text-sky-100"> */}
                                {/* <div className="flex flex-col gap-4"> */}
                                <div className="">
                                    <a className="link cursor-default">
                                        <AiFillMail className="mr-3 text-xl" />
                                        <p>rogepantilyowger@gmail.com</p>
                                    </a>

                                    <a className="link 3 hover:text-sky-300">
                                        <AiFillFacebook className="mr-3 text-xl" />
                                        <p>Facebook</p>
                                    </a>

                                    <a className="link hover:text-sky-300">
                                        <AiFillGithub className="mr-3 text-xl" />
                                        <p>Github</p>
                                    </a>
                                </div>
                            </div>

                            <div className="">
                                <form>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Full name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            className="text-input"
                                            value={clientName}
                                            onChange={handleSetClientName}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Your email*
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            className="text-input"
                                            value={clientMail}
                                            onChange={handleSetClientMail}
                                            required
                                        />
                                    </div>

                                    <div className="">
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-medium text-white"
                                        >
                                            Your message*
                                        </label>

                                        <textarea
                                            id="message"
                                            rows="7"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Write your message here..."
                                            value={clientMessage}
                                            onChange={handleSetClientMessage}
                                            required
                                        />
                                    </div>
                                    {formIsDirty &&
                                        (!clientMail || !clientMessage) && (
                                            <p className="mt-3 text-sm text-rose-500">
                                                Please fill out email and
                                                message fields
                                            </p>
                                        )}

                                    <button
                                        onClick={handleClickSendMail}
                                        type="button"
                                        className="btn btn-blue mt-6"
                                        disabled={isLoading}
                                    >
                                        Send{" "}
                                        <AiOutlineMail className="ml-3 text-lg" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

const styles = {
    container: "container mx-auto max-w-screen-lg p-6",
}

export default Home
