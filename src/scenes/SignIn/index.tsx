'use client'

import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button, Input } from "antd";

const SignInScene = () => {
  const router = useRouter()

  const [username, setUsername] = useState('admin_2')
  const [password, setPassword] = useState('adminpass')

  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(false)

  const signInHandler = async () => {
    setLoading(true)

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
      router.push('/dashboard');
    }

    setLoading(false)
  }

  const btnIsActive = username && password

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <div className="w-[500px] mt-[10%] p-3 flex flex-col items-center rounded-2xl bg-white border border-blue-300 shadow-lg">
        <h1 className="mb-10 text-3xl font-semibold text-blue-600">Sign In</h1>

        <div className="w-full flex flex-col items-center justify-center gap-5">
          <Input className="!w-[60%]" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input.Password className="!w-[60%]" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type={'primary'} role='button' loading={loading} disabled={!btnIsActive} onClick={() => signInHandler()}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default SignInScene;