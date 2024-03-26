import { Link } from "react-router-dom"
import logo from "../assets/ecommerce.png";
import Header from "../components/Header";
export default function Register(){
    return(
        <div>
            <Header></Header>
            <section class="bg-white font-roboto w-full h-screen">
                <div className="flex flex-col item-center justify-center">
                    <img src={logo} className="w-64 h-64 -mb-10 items-center justify-center mx-auto" alt="" />
                    <div className="w-96 pr-4 pt-4 pb-4 h-auto border-2 border-orange-400 border-opacity-20 hover:border-opacity-70 duration-200 bg-white rounded-lg shadow-lg flex flex-col item-center justify-center mx-auto">
                        <h1 className="text-center mt-5 font-bold uppercase mb-5">Register</h1>
                        <div className="flex flex-col">
                            <label class="block ml-12 text-gray-700 text-sm text-black -mb-4" for="username">E-mail</label>
                            <input type="email" placeholder="example@mail.com" className="w-72 border-2 pl-3 text-sm outline-none focus:border-orange-400 duration-200 focus:border-orange-400 rounded-lg px-4 py-2 bg-gray-100 items-center justify-center mb-2 mx-auto mt-5" />
                        </div>
                        <div className="flex mt-1 flex-col">
                            <label class="block ml-12 text-gray-700 text-sm text-black -mb-4" for="username"> Password</label>
                            <input type="password" placeholder="" className="w-72 border-2 pl-3 outline-none text-sm focus:border-orange-400 duration-200 focus:border-orange-400 rounded-lg px-4 py-2 bg-gray-100 items-center justify-center mb-2 mx-auto mt-5" />
                        </div>
                        <div className="flex mt-1 flex-col">
                            <label class="block ml-12 text-gray-700 text-sm text-black -mb-4" for="username"> Confirm Password</label>
                            <input type="password" placeholder="" className="w-72 border-2 pl-3 outline-none text-sm focus:border-orange-400 duration-200 focus:border-orange-400 rounded-lg px-4 py-2 bg-gray-100 items-center justify-center mb-2 mx-auto mt-5" />
                        </div>
                        <button className="bg-orange-400 border h-10 mb-5 mt-5 border-orange-400 text-white px-8 mx-auto rounded-lg hover:bg-orange-300  transition duration-200">Register</button>
                        <p className="text-center mb-5">You already have an account? <Link to="/login" className="text-orange-400 cursor-pointer underline">Log in</Link></p>
                    </div>
                </div>
            </section>
        </div>
    )
}