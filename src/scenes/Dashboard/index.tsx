'use client'

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Divider, Spin } from 'antd';

import { useDashboardStore } from '@/stores/dashboard';

import Header from "./components/Header";
import Stats from './components/Stats';
import Demographics from './components/Demographics';
import MainTable from './components/MainTable';
import WeekendTable from './components/WeekendTable';
import SixMonthTable from './components/SixMonthTable';


const DashboardScene: FC = () => {
  const router = useRouter()

  const dataRange = useDashboardStore(state => state.dataRange)
  const setMovies = useDashboardStore(state => state.setMovies)
  const setMetrics = useDashboardStore(state => state.setMetrics)

  const [isFetchingMovies, setIsFetchingMovies] = useState(true)
  const [isFetchingMetrics, setIsFetchingMetrics] = useState(true)


  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(`/api/movies`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();

      console.log('movies', data.data);

      if (data.data.code === 'token_not_valid') {
        router.push('/sign-in')
      } else {
        setMovies(data.data);
      }

      setIsFetchingMovies(false)
    }

    const getMetrics = async () => {
      const res = await fetch(`/api/metrics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({ from: dataRange.from, end: dataRange.end })
      });

      const data = await res.json();

      console.log('metrics', data.data);

      if (data.data.code === 'token_not_valid') {
        router.push('/sign-in')
      } else {
        setMetrics(data.data);
      }

      setIsFetchingMetrics(false)
    }

    getMetrics()
    getMovies()
  }, [dataRange])


  if (isFetchingMovies || isFetchingMetrics) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <div className="w-full h-full px-5 py-5 flex gap-5 desktop:flex-col desktop:gap-2">
      <div className='w-full'>
        <Header />
        <Divider className='!my-3' />
        <Stats />


        <Divider className='!my-3' />

        <Demographics />

        <Divider className='!my-3' />


        <MainTable />
      </div>

      <Divider className='!h-auto desktop:hidden' type='vertical' />
      <Divider className='!my-0 hidden desktop:block desktop:!mb-1 desktop:!mt-0' type='horizontal' />

      <div className={"min-w-[300px] w-[300px] h-full desktop:w-full desktop:flex desktop:gap-5 tablet:flex-col tablet:gap-2"}>
        <WeekendTable />

        <Divider className='!my-3 desktop:hidden tablet:block tablet:!mb-1 tablet:!my-0' type='horizontal' />
        <Divider className='!h-auto hidden desktop:block tablet:hidden' type='vertical' />

        <SixMonthTable />
      </div>
    </div >
  )
}
export default DashboardScene;