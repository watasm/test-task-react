import { Divider, Typography } from "antd";

import StatsCart from "./components/StatsCart";
import StatsCartChart from "./components/StatsCartChart";
import { useDashboardStore } from "@/stores/dashboard";

const Stats = () => {
  const metrics = useDashboardStore(state => state.metrics)

  return (
    <div className='flex justify-around'>
      <StatsCart
        title={(
          <h4 className='text-4xl font-semibold'>{metrics.indastryBoxOffice}M</h4>
        )}
        description='Indastry box office'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCart
        title={(
          <h4 className='text-4xl font-semibold'>{metrics.val}M</h4>
        )}
        description='Val'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCart
        title={(
          <h4 className='text-4xl font-semibold'>{metrics.seasomasity}</h4>
        )}
        description='Seasomasity'
      />
      <Divider className='!h-auto' type='vertical' />
      <StatsCartChart data={{ percent: metrics.percent }} width={300} height={150} />
    </div>
  )
}

export default Stats;