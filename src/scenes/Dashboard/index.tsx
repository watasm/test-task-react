'use client'

import { FC, useEffect } from 'react';
import { Divider } from 'antd';
import cn from 'classnames'

import { useDashboardStore } from '@/stores/dashboard';

import Header from "./components/Header";
import Stats from './components/Stats';
import Demographics from './components/Demographics';
import MainTable from './components/MainTable';
import WeekendTable from './components/WeekendTable';
import SixMonthTable from './components/SixMonthTable';

import s from './style.module.scss';


const DashboardScene: FC = () => {
  const dataRange = useDashboardStore(state => state.dataRange)
  const setMovies = useDashboardStore(state => state.setMovies)
  const setMetrics = useDashboardStore(state => state.setMetrics)

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
        //redirect
      } else {
        setMovies(data.data);
      }
    }

    getMovies()
  }, [])


  useEffect(() => {
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
        //redirect
      } else {
        setMetrics(data.data);
      }
    }

    getMetrics()
  }, [dataRange])


  return (
    <div className="w-full h-full flex gap-5">
      <div className='w-full'>
        <Header />
        <Divider className='!my-3' />
        <Stats />


        <Divider className='!my-3' />

        <Demographics />

        <Divider className='!my-3' />


        <MainTable />
      </div>

      <Divider className='!h-full' type='vertical' />

      <div className={cn(s.rightPanel, "h-full")}>
        <WeekendTable />

        <Divider className='!my-3' />

        <SixMonthTable />
      </div>
    </div>
  )
}
export default DashboardScene;