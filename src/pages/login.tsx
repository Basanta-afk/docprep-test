import { APILoginUser } from "@/apis/auth/auth";
import CommonButton from "@/components/common/form/CommonButton";
import CommonTextField from "@/components/common/form/CommonTextField";
import useIsAuth from "@/hooks/useIsAuth";
import { authDTO } from "@/utils/formatters/authDTO";
import notify from "@/utils/helpers/notify";
import { ILoginData, ILoginResponse } from "@/utils/interface/auth";
import { Checkbox } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const isAuth = useIsAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginData> = async (data) => {
    try {
      setLoading(true);
      const formattedData = authDTO.login({ ...data, rememberMe: remember });
      const response: ILoginResponse = await APILoginUser(formattedData);
      router.push("/dashboard");
      const responseData = response?.user;
      localStorage.setItem("data", JSON.stringify(responseData));
      localStorage.setItem("token", response?.token);
      notify("success", response?.message);
    } catch (error: any) {
      setLoading(false);
      notify("error", error);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     router.back();
  //   }
  // }, [isAuth]);

  return (
    <main className="flex items-center justify-center h-[100vh] check">
      <div className="w-[450px] card-layout p-5 lg:p-10 bg-white space-y-6 ">
        <h1 className="text-title-active font-medium text-2xl lg:text-3xl pb-5">
          Login In
        </h1>
        <span className="text-lg">Login to your existing account</span>
        <form className="pt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            rules={{
              required: "required",
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "invalid email address",
              // },
            }}
            control={control}
            render={({ field }) => (
              <CommonTextField
                {...field}
                placeholder="Email"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            rules={{
              required: "required",
            }}
            control={control}
            render={({ field }) => (
              <CommonTextField
                {...field}
                type="password"
                placeholder="Password"
                error={errors.password?.message}
              />
            )}
          />

          <div className="flex justify-between items-center pt-5 text-sm hover:cursor-pointer sm:text-lg">
            <div className="flex gap-2 items-center">
              <Checkbox
                size="xs"
                color="green"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </div>
          </div>

          <div className="pt-10">
            <CommonButton
              className="bg-secondary h-14 text-lg hover:text-white font-medium text-title-active"
              type="submit"
              size="xl"
              loading={loading}
            >
              Login
            </CommonButton>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
