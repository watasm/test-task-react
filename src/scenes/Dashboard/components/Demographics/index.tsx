'use client'
import { Divider, InputNumber } from 'antd'

import { useDashboardStore } from '@/stores/dashboard';

const Demographics = () => {
  const demographicsRange = useDashboardStore(state => state.demographicsRange)
  const setDemographicsRange = useDashboardStore(state => state.setDemographicsRange)

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center justify-between">
        <span>DEMOGRAPHICS</span>
        <div className="flex items-center gap-5">
          <InputNumber min={1} max={200} value={demographicsRange.from} />
          <InputNumber min={1} max={200} value={demographicsRange.end} />
        </div>
      </div>

      {/* <div className='flex gap-3'>
        <div className='flex flex-col items-start justify-end'>
          <p className='h5'>CMP</p>
          <p className='h5'>INDEX</p>
        </div>
        <div className='w-[200px] flex flex-col'>
          <div className='h-5 flex gap-2'>
            <p className='w-1/3 flex items-center justify-center'>M</p>
            <p className='w-1/3 flex items-center justify-center'>F</p>
            <p className='w-1/3 flex items-center justify-center'>T</p>
          </div>
          <Divider className='!my-1' />
          <div className='w-[200px] h-5 flex gap-2'>
            <p className='w-1/3 pl-2 flex items-center justify-center'>28%</p>
            <Divider className='!h-auto !mx-0' type='vertical' />
            <p className='w-1/3 flex items-center justify-center'>52%</p>
            <Divider className='!h-auto !mx-0' type='vertical' />
            <p className='w-1/3 pr-2 flex items-center justify-center'>80%</p>
          </div>
          <Divider className='!my-1' />
          <div className='w-[200px] h-5 flex gap-2'>
            <p className='w-1/3 pl-2 flex items-center justify-center'>.680000</p>
            <Divider className='!h-auto !mx-0' type='vertical' />
            <p className='w-1/3 flex items-center justify-center'>1.28</p>
            <Divider className='!h-auto !mx-0' type='vertical' />
            <p className='w-1/3 pr-2 flex items-center justify-center'>.95</p>
          </div>
        </div>
      </div> */}

      <div className='flex'>
        <div className='mr-3 flex flex-col items-start justify-end'>
          <p className='h5'>CMP</p>
          <p className='h5'>INDEX</p>
        </div>
        <div className='w-fit flex flex-col'>
          <div className='text-center'>M</div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-between'>28% <Divider className='!h-full !mx-0 !ml-1' type='vertical' /></div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-between'>.6000 <Divider className='!h-full !mx-0 !ml-1' type='vertical' /></div>
        </div>
        <div className='flex flex-col'>
          <div className='text-center'>L</div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-between'>52% <Divider className='!h-full !mx-0 !ml-1' type='vertical' /></div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-between'>1.92 <Divider className='!h-full !mx-0 !ml-1' type='vertical' /></div>

        </div>
        <div className='flex flex-col'>
          <div className='text-center'>T</div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-center'>80% </div>
          <Divider className='!my-1' />
          <div className='px-1 flex justify-center'>.7 </div>

        </div>
      </div>

      <Divider className='!h-auto !mx-3' type='vertical' />

      <div></div>
    </div>
  )
}

export default Demographics;