import { Divider } from 'antd';
import cn from 'classnames'

import Header from "./components/Header";
import Stats from './components/Stats';

import s from './style.module.scss';

const DashboardScene = () => {
  return (
    <div className="w-full h-full flex gap-5">
      <div className='w-full'>
        <Header />
        <Divider className='!my-3' />
        <Stats />


        <Divider className='!my-3' />

      </div>
      <div className={cn(s.rightPanel, "h-full border !border-green-500")}></div>
    </div>
  )
}
export default DashboardScene;