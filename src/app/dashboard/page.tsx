import { Metadata } from 'next'

import DashboardScene from '@/scenes/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
}

async function getMovies() {
  const res = await fetch('https://api.example.com/...')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const DashboardPage = () => {
  return (
    <DashboardScene />
  )
}

export default DashboardPage;