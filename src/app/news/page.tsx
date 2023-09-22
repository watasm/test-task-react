import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'News',
}

const DashboardPage = async () => {
  return (
    <h1>Latest news</h1>
  )
}

export default DashboardPage;