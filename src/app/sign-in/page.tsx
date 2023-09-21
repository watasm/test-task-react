import { Metadata } from "next";
import { getServerSession } from "next-auth/next";

import SignInScene from "@/scenes/SignIn";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: 'Sign In',
}

const SignInPage = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      {JSON.stringify(session)}
      <SignInScene />
    </>
  )
}

export default SignInPage;