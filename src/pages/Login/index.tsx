import { Lock, User } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useForm } from "react-hook-form";

interface FormProps {
  email: string;
  password: string;
  checked: Boolean;
}

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      email: "",
      password: "",
      checked: true,
    },
  });

  const onSubmit = async ({ password, email }: FormProps) => {
    if (email && password) {
      function formatString(string: string) {
        let format = String(string).trim();
        return format;
      }

      const isLogged = await auth.singin(
        formatString(email),
        formatString(password)
      );

      if (isLogged) {
        navigate("/home");
      } else {
        alert("Não deu bom");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 flex flex-col gap-2 items-center justify-center"
      >
        <h1 className="mb-4 text-white text-2xl font-bold">Fazer Login</h1>
        <div className="flex justify-start items-center overflow-hidden pl-2 gap-1 bg-[#f2f2f2] w-full rounded focus-within:outline focus-within:outline-1 focus-within:outline-offset-2">
          <div className="text-black text-[18px]">
            <User weight="bold" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "*E-mail field is required",
            })}
            className="placeholder:text-sm focus:outline-none focus:border-none placeholder:text-zinc-500"
          />
        </div>
        <span className="w-full text-red-500 text-xs">
          {errors.email?.message}
        </span>

        <div className="flex justify-start items-center overflow-hidden pl-2 gap-1 bg-[#f2f2f2] w-full rounded focus-within:outline focus-within:outline-1 focus-within:outline-offset-2">
          <div className="text-black text-[18px]">
            <Lock weight="bold" />
          </div>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "*Password field is required",
              minLength: {
                value: 5,
                message: "*Invalid lenght",
              },
            })}
            className="placeholder:text-sm focus:outline-none focus:border-none placeholder:text-zinc-500"
          />
        </div>

        <span className="w-full text-red-500 text-xs">
          {errors.password?.message}
        </span>

        <div className="flex gap-2 mt-4 w-full">
          <input
            id="checked"
            type="checkbox"
            {...register("checked")}
            className="w-min"
          />
          <label htmlFor="checked">Lerbrar de mim</label>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 rounded text-sm py-2 mt-4"
        >
          Fazer login
        </button>
      </form>
    </div>
  );
}
