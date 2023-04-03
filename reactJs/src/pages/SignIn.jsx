import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/auth.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { getRememberMe, setRememberMe } from "../utils/RememberMe";

const SignIn = () => {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try { 
      const response = await signIn(data.email, data.senha);
      if(response.error)  return toast.error("Erro ao realizar login", {position: "top-center", autoClose: 8000, delay: 1000});	
      toast.success("Login realizado com sucesso", {position: "top-center", autoClose: 8000, delay: 1000});
      navigate("/");
      if (data.lembrar) {
        setRememberMe({email: data.email, senha: data.senha});
      }
    } catch (error) {
      toast.error("Erro ao realizar login", {position: "top-center", autoClose: 8000, delay: 1000});
    }
  };

  useEffect(() => {
    const remember = getRememberMe();
    console.log(remember);

    if (remember) {
      setValue("email", remember.email);
      setValue("senha", remember.senha);
      setValue("lembrar", true);
    }



  }, []);

  return (
    <div className="bg-gray-900 primary flex-1 h-screen">
      <main className="flex h-full max-w-[1300px] justify-center items-center mx-auto gap-8 duration-300">
        <section className="max-w-[500px]">
          <div>
            <h1 className="text-4xl text-white font-bold">
              Acesse nosso site 👋
            </h1>
            <h3 className="text-gray-400 mt-4">
              Faça seu login com suas credenciais de acesso
            </h3>
            <button className="flex mt-[40px] duration-300 hover:bg-opacity-50 py-3 w-full items-center justify-center gap-x-2 rounded-2xl bg-gray-800">
              <img
                className="w-[35px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              />
              <span className="text-white font-bold">Login com o Google</span>
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-y-8"
          >
            <div>
              <label
                className="text-gray-200 font-semibold p-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="Digite seu email"
                type="email"
                id="email"
                {...register("email", { required: true, minLength: 3 })}
                className="w-full rounded-2xl bg-gray-800 focus:outline-blue-500 focus:outline-none focus:outline-2 text-white placeholder:text-gray-400 py-3 px-4 mt-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Este campo é obrigatório
                </span>
              )}
            </div>

            <div>
              <label
                className="text-gray-200 font-semibold p-1"
                htmlFor="email"
              >
                Senha
              </label>
              <input
                placeholder="Digite sua senha"
                type="password"
                id="senha"
                {...register("senha", { required: true, minLength: 3 })}
                className="w-full rounded-2xl bg-gray-800 focus:outline-blue-600 focus:outline-none focus:outline-2 text-white placeholder:text-gray-400 py-3 px-4 mt-2"
              />
              {errors.senha && (
                <span className="text-red-500 text-sm">
                  Este campo é obrigatório
                  </span>
                  )}
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex items-center">
                <input
                  className="mr-2 w-5 h-5"
                  type="checkbox"
                  name="lembrar"
                  id="lembrar"
                  {...register("lembrar")}
                />
                <label className="text-gray-400" htmlFor="lembrar">
                  Lembrar-me
                </label>
              </div>
              <button className="bg-blue-600 text-white py-3 w-[200px] rounded-2xl">
                Entrar
              </button>
            </div>
          </form>

          <div className="mt-8">
            <Link className="text-gray-400 hover:underline" to="/registration">
              Não possui conta?{" "}
              <span className="text-blue-600">Faça uma conta agora mesmo</span>
            </Link>
          </div>
        </section>

        <section className="flex-1 bg-white p-10 rounded-2xl h-2/3 flex justify-center">
          <img className="w-[600px]" src={logo} alt="" />
        </section>
      </main>
    </div>
  );
};

export default SignIn;
