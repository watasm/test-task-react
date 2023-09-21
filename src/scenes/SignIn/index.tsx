'use client'

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Button, Input } from "antd";


const SignInScene = () => {
  const session = useSession()

  const [username, setUsername] = useState('admin_2')
  const [password, setPassword] = useState('adminpass')

  const signInHandler = async () => {
    const res = await fetch("https://service-1-lh4l.onrender.com/api/token/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();

    console.log(user);
  }

  const btnIsActive = username && password

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-[500px] h-[600px] p-3 flex flex-col items-center rounded-2xl border border-blue-300">
        <h1 className="mb-10 text-2xl font-medium">Sign In</h1>

        <p>{JSON.stringify(session.data) || ''}</p>

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