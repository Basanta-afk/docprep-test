// import { APIRegisterUser } from "@/apis/auth/auth";
import CommonButton from "@/components/common/form/CommonButton";
import CommonTextField from "@/components/common/form/CommonTextField";
// import SmeNavBar from "@/components/partials/SmeNavBar";
import { UserType } from "@/utils/enums/userType";
import { authDTO } from "@/utils/formatters/authDTO";
import notify from "@/utils/helpers/notify";
import { ISignUpData } from "@/utils/interface/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Signup = () => {
  const router = useRouter();
  const {
    control,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<ISignUpData> = async (data) => {
    try {
      const formattedData = authDTO.signup(data, UserType.BUSINESS);
      const response: any = formattedData;
      // const response = await APIRegisterUser(formattedData);
      reset();
      notify("success", response);
      await router.push("/login");
    } catch (error: any) {
      notify("error", error);
      console.log(error);
    }
  };

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-[450px] card-layout p-5 lg:p-10 bg-white space-y-5 ">
        <h1 className="text-title-active font-medium text-2xl sm:text-3xl pb-5">
          Register
        </h1>
        <span className="text-lg lg:text-xl">Create New Account</span>
        <form className="pt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            rules={{ required: "required" }}
            control={control}
            render={({ field }) => (
              <CommonTextField
                {...field}
                placeholder="BFI/SME name"
                error={errors.fullName?.message}
              />
            )}
          />
          <Controller
            name="email"
            rules={{
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }}
            control={control}
            render={({ field }) => (
              <CommonTextField
                {...field}
                type="email"
                placeholder="Email"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            rules={{
              required: "required",
              minLength: {
                value: 8,
                message: "password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                message:
                  "password must contain at least one capital letter and one special character",
              },
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
          <Controller
            name="confirmPassword"
            rules={{
              required: "required",
              validate: (value) =>
                value === password || "password do not match",
            }}
            control={control}
            render={({ field }) => (
              <CommonTextField
                {...field}
                type="password"
                placeholder="Confirm Password"
                error={errors.confirmPassword?.message}
              />
            )}
          />

          <div className="pt-10">
            <CommonButton
              className="bg-secondary h-14 text-lg hover:text-white font-medium text-title-active"
              type="submit"
              size="xl"
            >
              Register
            </CommonButton>
          </div>
          <div className="flex w-full justify-end py-2 ">
            <span>
              Already have an account? <Link href="/login">Sign in</Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

// Signup.Layout = SmeNavBar;
export default Signup;
