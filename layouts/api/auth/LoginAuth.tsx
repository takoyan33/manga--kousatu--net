import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SiteButton } from "layouts/components/button";
import Link from "next/link";
import { Stack, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successNotify, errorNotify } from "layouts/components/text";
import { useLogin, SignInWithGoogle } from "./useAuth";
import GoogleIcon from "@mui/icons-material/Google";

// フォームの型
type FormInput = {
  email: string;
  password: string;
};

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required("必須です")
    .email("正しいメールアドレス入力してください"),
  password: yup.string().required("必須です").min(8, "文字数が足りません"),
});

export default function LoginAuth() {
  const auth = getAuth();
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const { success, error, login } = useLogin();

  const handleSignIn = async (data: FormInput) => {
    try {
      await login(data.email, data.password);
      successNotify("ログインしました");
      setTimeout(() => {
        router.push("/top");
      }, 2000);
    } catch (e) {
      errorNotify("ログインに失敗しました");
      console.log(e);
    }
  };

  const SignInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(() => {
        successNotify("ログインしました");
        setTimeout(() => {
          router.push("/top");
        }, 2000);
      })
      .catch((e) => {
        errorNotify("ログインに失敗しました");
        console.log(e);
      });
  };

  return (
    <>
      <div className="w-11/12 md:w-4/12 m-auto">
        <ToastContainer />
        <div className="my-4 md:my-8">
          <label className="my-4 text-center">
            メールアドレス<span className="text-red-600">*</span>
          </label>
          <div className="my-2">
            <TextField
              id="outlined-basic"
              label="sample@gmail.com"
              className="m-auto mb-6 w-80"
              variant="outlined"
              {...register("email")}
              error={"email" in errors}
              helperText={errors.email?.message}
            />
          </div>
        </div>
        <div>
          <label className="my-4 text-center">
            パスワード（8文字以上)<span className="text-red-600">*</span>
          </label>
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className="m-auto mb-6 w-80"
            {...register("password")}
            error={"password" in errors}
            helperText={errors.password?.message}
          />
        </div>
        <SiteButton
          href=""
          onClick={handleSubmit(handleSignIn)}
          text="ログイン"
          className="m-auto my-4 w-80 text-center"
        />
        <div className="m-auto flex justify-center p-4 w-6/12">
          <button className="m-auto" onClick={SignInWithGoogle}>
            <GoogleIcon />
            <br></br>
            <p className="text-center">Google</p>
          </button>
        </div>
        <div className="">
          <Link href="/register">
            <p className="my-2 md:my-4 underline">会員登録はこちら</p>
          </Link>
          <Link href="/profile/edit/password">
            <p className="my-2 md:my-4 underline">
              パスワードを忘れた方はこちら
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
