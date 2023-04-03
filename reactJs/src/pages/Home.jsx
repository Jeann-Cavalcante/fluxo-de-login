import TableUsers from "../components/TableUsers";
import { Link, useNavigate } from "react-router-dom";
import { SignOut } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Home = () => {
  const {logout} = useContext(AuthContext) 
  const navigate = useNavigate();
  function handleSignOut() {
    logout()
    navigate("/auth")
    toast.success("Logout realizado com sucesso", {position: "top-center", autoClose: 8000, delay: 1000});
  }
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-blue-600 py-4">
        <h1 className="text-4xl font-bold text-white text-center">
          Fluxo de login
        </h1>

        <div onClick={handleSignOut} className="absolute right-4 top-3 cursor-pointer">
          <SignOut className="fill-white " size={40} weight="bold" />
          <span className="text-white font-semibold">Sair</span>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto mt-10">
        <TableUsers />
      </div>
    </div>
  );
}

export default Home;