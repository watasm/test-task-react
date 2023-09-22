import { Metadata } from "next";

import SignInScene from "@/scenes/SignIn";

export const metadata: Metadata = {
  title: 'Sign In',
}

const SignInPage = async () => {
  return (
    <SignInScene />
  )
}

export default SignInPage;