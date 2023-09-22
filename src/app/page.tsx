import { redirect } from 'next/navigation'

const user = true;

export default function Home() {
  redirect('/dashboard')
}
