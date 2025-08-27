import { FaGoogle } from "react-icons/fa";

import AuthFormInput from "../../../fragment/AuthInput/AuthFormInput";
import Button from "../../../fragment/Button";



const AuthLogin = () => {
  return (
    <section className="w-full md:w-md m-auto p-3">
      <div className="w-full md:w-md m-auto mt-10 flex flex-col bg-white rounded-md px-6 py-3">
        <div className="flex flex-col items-center justify-center gap-1 py-3">
          <h1 className="text-2xl font-bold text-textDark-primary">
            Masuk ke Akun
          </h1>
          <small className="text-sm text-textDark-primary">Yuk, lanjutin belajarmu di videobelajar.</small>
        </div>

        <div className="flex flex-col gap-3 py-3">
          <AuthFormInput
            htmlFor="email"
            label="E-Mail"
            name="email"
            type="email"
          />
          <AuthFormInput
            htmlFor="password"
            label="Password"
            name="password"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-4 py-3">
          <Button
            className="w-full py-2"
            type="button"
            variant="btn-primary"
            onClick={() => console.log("Login")}
          >
            Masuk
          </Button>

          <Button
            className="w-full py-2"
            type="button"
            variant="btn-tertiary"
            onClick={() => console.log("Login")}
          >
            Daftar
          </Button>

          <div className="flex flex-col gap-2">
            <a
              className="text-sm text-textDark-primary text-right hover:underline"
              href="/"
            >
              Lupa Password
            </a>
            <div className="relative w-full h-1 bg-textDark-tertiary my-3">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">atau</p>
            </div>
          </div>

          <Button
            className="w-full py-2 gap-2 flex items-center justify-center border border-gray-300 rounded-md"
            type="button"
            variant="default"
            onClick={() => console.log("Login")}
          >
            <FaGoogle
              size={26}
              className="mr-2"
            />
            <p>Masuk dengan Google</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthLogin;