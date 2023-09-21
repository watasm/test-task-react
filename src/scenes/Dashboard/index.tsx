import { Divider } from 'antd';
import cn from 'classnames'

import Header from "./components/Header";
import Stats from './components/Stats';
import Demographics from './components/Demographics';
import MainTable from './components/MainTable';
import WeekendTable from './components/WeekendTable';
import SixMonthTable from './components/SixMonthTable';

import s from './style.module.scss';

const DashboardScene = () => {
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