import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import DashboardScene from '@/scenes/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
}

async function getMovies() {
  const res = await fetch(`/api/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const data = await res.json();

  console.log(data);
  if (!res.ok) {
    redirect('/sign-in');
  }

  return data
}

const DashboardPage = async () => {
  return (
    <DashboardScene />
  )
}

export default DashboardPage;