import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favorites',
}

const DashboardPage = async () => {
  return (
    <h1>Favorite movies</h1>
  )
}

export default DashboardPage;