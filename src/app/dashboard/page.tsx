import { Metadata } from 'next'

import DashboardScene from '@/scenes/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
}
const DashboardPage = () => {
  return (
    <DashboardScene />
  )
}

export default DashboardPage;