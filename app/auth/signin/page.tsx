"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/components/Button";
import { Signin } from "./_interfaces/signin";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import Link from "next/link";
import LoadingSpinner from "@/components/components/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { UserSignin } from "@/redux/thunks/auth/signinUserThunk";
import { useRouter } from "next/navigation";
import { activeWarning } from "@/redux/slices/globalWarning/globalWarning";
import { updateShoppingCartUserLogged } from "@/utils/shoppingCartForUserLogged/updateShoppingCartUserLogged";
import { updateShoppingCartCounter } from "@/redux/slices/ShoppingCart";

export default function SigninPage() {
  const [signinUser, setSigninUser] = useState<Signin>({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState<boolean>(false);
  //@ts-ignore
  const { isLoading, isLogged } = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      updateShoppingCartUserLogged()
        .then((res) => {
          dispatch(updateShoppingCartCounter({ count: res }));
        })
        .catch((err) => {
          dispatch(
            activeWarning({
              isActiveWarning: true,
              severity: "error",
              warningMessage: `${err}`,
              duration: 4000,
              warningSubMessage: "",
            })
          );
        });

      router.back();
    }
  }, [isLogged]);

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const name = e.target.name;
    setSigninUser((prev) => {
      return {
        ...prev,
        [name]: inputValue,
      };
    });
  };

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(UserSignin(signinUser));
  };
  return (
    <form
      className="sm:p-4 p-2  shadow-lg flex flex-col  sm:gap-2 gap-1 relative"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold text-center">Login Here</h2>
      <h2 className="text-center ">It is fast and easy.</h2>
      <div className="flex items-center sm:p-4 p-2 sm:gap-7 gap-2 flex-wrap">
        <label htmlFor="email">Email</label>
        <input
          required={true}
          className="sm:w-[380px] w-[200px] border border-borderGray p-2 rounded-sm"
          id="email"
          placeholder="Emial"
          type="email"
          name="email"
          onChange={handleInputs}
          value={signinUser.email}
        />
      </div>
      <div className="flex flex-col items-center sm:p-4 p-1 sm:gap-7 gap-1  flex-wrap">
        <div className="flex sm:gap-4 gap-2 items-center relative">
          <label htmlFor="password">Password</label>
          <input
            required={true}
            className="sm:w-[380px] w-[200px] border border-borderGray p-2 rounded-sm"
            id="password"
            placeholder="Password"
            type={showPass ? "text" : "password"}
            onChange={handleInputs}
            name="password"
            value={signinUser.password}
          />
          <div
            onClick={handleShowPass}
            className="scale-150 absolute  sm:-right-5 right-2 bg-white cursor-pointer "
          >
            {showPass ? <BiShow /> : <GrHide />}
          </div>
        </div>
      </div>
      <Button className="m-auto">Login</Button>
      <span>
        {"You do not have an account?  "}
        <Link
          href={"/auth/register"}
          className="text-science-blue-500 underline"
        >
          Register
        </Link>
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-gray-300">
          <LoadingSpinner className="text-3xl text-science-blue-400" />
        </div>
      )}
    </form>
  );
}
