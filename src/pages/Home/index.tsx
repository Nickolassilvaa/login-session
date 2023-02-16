import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

export function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.singout();
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-5xl">
        <span className="font-bold">Hello,</span> {auth.user?.name}!!
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-800 px-8 py-1 rounded mt-4 hover:bg-red-700 transition-all"
      >
        Sair
      </button>
    </div>
  );
}
