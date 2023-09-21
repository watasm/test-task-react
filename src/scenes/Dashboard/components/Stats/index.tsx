import { Divider } from "antd";

import StatsCart from "./components/StatsCart";
import StatsCartChart from "./components/StatsCartChart";

const Stats = () => {
  return (
    <div className='flex justify-around'>
      <StatsCart
        title={(
          <h4 className='text-3xl font-medium'>$98.5</h4>
        )}
        description='Price'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCart
        title={(
          <h4 className='text-3xl font-medium'>$98.5</h4>
        )}
        description='Price'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCart
        title={(
          <h4 className='text-3xl font-medium'>$98.5</h4>
        )}
        description='Price'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCartChart height={150} />
    </div>
  )
}

export default Stats;