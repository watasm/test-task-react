'use client'

import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button, Input } from "antd";

const SignInScene = () => {
  const session = useSession()

  const [username, setUsername] = useState('admin_2')
  const [password, setPassword] = useState('adminpass')

  const [isAuth, setIsAuth] = useState(false)

  const signInHandler = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (data.isAuth) {
      setIsAuth(true)
    }
  }

  if (isAuth) {
    redirect('/dashboard');
  }

  const btnIsActive = username && password

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-[500px] h-[600px] p-3 flex flex-col items-center rounded-2xl border border-blue-300">
        <h1 className="mb-10 text-2xl font-medium">Sign In</h1>

        <div className="w-full flex flex-col items-center gap-5">
          <Input className="!w-[60%]" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input.Password className="!w-[60%]" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type={btnIsActive ? 'primary' : 'default'} disabled={!btnIsActive} onClick={() => signInHandler()}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default SignInScene;