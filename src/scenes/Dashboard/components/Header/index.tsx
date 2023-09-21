'use client'

import { useDashboardStore } from "@/stores/dashboard";
import { DatePicker, Typography } from "antd";
import dayjs, { Dayjs } from 'dayjs'

const { RangePicker } = DatePicker;

const DATE_FORMAT = 'DD MMM YY';

const CURRENT_WEEK = dayjs().format('MMMM')


const Header = () => {
  const dataRange = useDashboardStore(state => state.dataRange)
  const setDateRange = useDashboardStore(state => state.setDateRange)

  const onSelectDateRangeHandler = (dates: any, formatString: [string, string]) => {
    if (dates && dates[0] && dates[1]) {
      setDateRange({
        from: dates[0],
        end: dates[1]
      })
    }
  }

  console.log('dataRange', dayjs(dataRange.from).format(DATE_FORMAT), dayjs(dataRange.end).format(DATE_FORMAT));

  return (
    <div className="flex items-center gap-5">
      <Typography className="px-2 py-1 rounded-md border">
        {CURRENT_WEEK}
      </Typography>
      <div>
        <RangePicker
          className=""
          format={DATE_FORMAT}
          defaultValue={[dayjs(dataRange.from, DATE_FORMAT), dayjs(dataRange.end, DATE_FORMAT)]}
          onChange={onSelectDateRangeHandler}
        />
      </div>
    </div>
  )
}

export default Header;