"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";
import { clearUser, setUser } from "@/slices/user";
import { useAppDispatch } from "@/slices/store";
import Style from "./index.module.scss";

const LoginCard = () => {
  const session = useSession();

  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    signIn("google");
  };
  const handleSignOut = () => {
    signOut();
    dispatch(clearUser());
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      dispatch(setUser({ ...session.data.user }));
    }
    console.log(session);
  }, [session, dispatch]);

  return (
    <div className={Style.main}>
      {(session.status === "unauthenticated" ||
        session.status === "loading") && (
        <button onClick={handleSignIn} disabled={session.status === "loading"}>
          <div>
            <FcGoogle />
          </div>
          <p> Sign in with Google</p>
        </button>
      )}

      {session.status === "authenticated" && (
        <button onClick={handleSignOut}>
          <div>
            <FcGoogle />
          </div>
          <p> Logout</p>
        </button>
      )}
    </div>
  );
};

export default LoginCard;
