import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "../assets/ecommerce.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function Login(){
    return(
        <div>
            <Header></Header>
            
            <section class="bg-whitefont-roboto w-full h-screen">
                <div className="flex flex-col item-center justify-center">
                    <img src={logo} className="w-64 h-64 -mb-10 items-center justify-center mx-auto" alt="" />
                    <div className="w-96 border-2 border-orange-400 border-opacity-20 hover:border-opacity-70 duration-200 h-96 bg-white rounded-lg shadow-lg flex flex-col item-center justify-center mx-auto">
                        <h1 className="text-center text-2xl font-bold uppercase mb-5">Log in</h1>
                        <input type="email" placeholder="example@email.com" className="w-72 border-2 pl-3 focus:border-orange-400 outline-none duration-200 rounded-lg px-4 py-2 bg-gray-100 items-center justify-center mb-2 mx-auto mt-5" />
                        <input type="password" placeholder="" className="w-72 border-2 pl-3 focus:border-orange-400 outline-none duration-200 rounded-lg px-4 py-2 bg-gray-100 items-center justify-center mb-2 mx-auto mt-5" />
                        <p className="underline cursor-pointer text-end mr-3 mb-3">Forgot password</p>
                        <button className="bg-orange-400 border h-10 mb-5 border-orange-400 text-white px-8 mx-auto rounded-lg hover:bg-orange-300 hover-text-orange-400 transition duration-200">Log in</button>
                        <p className="text-center">You don't have an account? <Link to="/register" className="text-orange-400 cursor-pointer underline">Sign up</Link></p>
                    </div>
                </div>
            </section>
        </div>

    )
}