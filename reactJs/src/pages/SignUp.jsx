import { Link } from "react-router-dom";
import cadastroLogo from "../assets/cadastrologo.svg";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    

  };

  return (
    <div className="bg-gray-900 primary flex-1 h-screen">
      <main className="flex h-full max-w-[1300px] justify-center items-center mx-auto gap-8 ">
        <section className="flex-1 bg-white p-10 rounded-2xl h-2/3 flex justify-center">
          <img className="w-[600px]" src={cadastroLogo} alt="" />
        </section>

        <section className="max-w-[500px]">
          <div>
            <h1 className="text-4xl text-white font-bold">
              Junte-se a nós hoje 👋
            </h1>
            <h3 className="text-gray-400 mt-4">
              Cadastra-se com suas credenciais de acesso, para ter acesso a
              todos os recursos do site
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
            className="mt-10 flex flex-col gap-y-3"
          >
            <div>
              <label className="text-gray-200 font-semibold p-1" htmlFor="name">
                Nome
              </label>
              <input
                placeholder="Digite seu nome"
                type="text"
                id="name"
                {...register("name", { required: true, minLength: 3 })}
                className="w-full rounded-2xl bg-gray-800 focus:outline-blue-500 focus:outline-none focus:outline-2 text-white placeholder:text-gray-400 py-3 px-4 mt-2"
              />
              <div className="h-[30px]">
                {errors.name && (
                  <span className="text-red-500 text-sm">Nome invalido *</span>
                )}
              </div>
            </div>

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
                {...register("email", { required: true })}
                className="w-full rounded-2xl bg-gray-800 focus:outline-blue-500 focus:outline-none focus:outline-2 text-white placeholder:text-gray-400 py-3 px-4 mt-2"
              />
              <div className="h-[30px]">
                {errors.email && (
                  <span className="text-red-500 text-sm">Email invalido *</span>
                )}
              </div>
            </div>

            <div>
              <label
                className="text-gray-200 font-semibold p-1"
                htmlFor="senha"
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
              <div className="h-[30px]">
                {errors.senha && (
                  <span className="text-red-500 text-sm">
                    Senha invalida, minimo 3 caracteres *
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                className="text-gray-200 font-semibold p-1"
                htmlFor="confirm"
              >
                Confirme sua senha
              </label>
              <input
                placeholder="Digite sua senha"
                type="password"
                id="confirm"
                {...register("confirm", {
                  required: true,
                  minLength: 3,
                  validate: (value) => value === watch("senha"),
                })}
                className="w-full rounded-2xl bg-gray-800 focus:outline-blue-600 focus:outline-none focus:outline-2 text-white placeholder:text-gray-400 py-3 px-4 mt-2"
              />
              <div className="h-[30px]">
                {errors?.confirm?.type === "validate" && (
                  <span className="text-red-500 text-sm">
                    Senhas não conferem *
                  </span>
                )}

                {errors.confirm?.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    Senha invalida, minimo 3 caracteres *
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-8">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 w-[200px] rounded-2xl duration-200 hover:opacity-90"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="mt-8">
            <Link className="text-gray-400 hover:underline" to="/auth">
              Já possui conta?{" "}
              <span className="text-blue-600">Faça login agora mesmo</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
