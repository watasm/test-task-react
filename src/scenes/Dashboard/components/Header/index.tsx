'use client'

import { useDashboardStore } from "@/stores/dashboard";
import { DatePicker, TimeRangePickerProps, Typography } from "antd";
import dayjs, { Dayjs } from 'dayjs'
import { getStartAndEndOfWeek } from "../utils/getStartAndEndOfWeek";

const { RangePicker } = DatePicker;

const DATE_FORMAT = 'DD MMM YY';

const rangePresets: TimeRangePickerProps['presets'] = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
  { label: 'Last 180 Days', value: [dayjs().add(-180, 'd'), dayjs()] },
  { label: 'Last year', value: [dayjs().add(-1, 'y'), dayjs()] },
  { label: 'Last 3 years', value: [dayjs().add(-3, 'y'), dayjs()] },
  { label: 'Last 5 years', value: [dayjs().add(-5, 'y'), dayjs()] },
  { label: 'Last 10 years', value: [dayjs().add(-10, 'y'), dayjs()] },
  { label: 'Last 20 years', value: [dayjs().add(-20, 'y'), dayjs()] },
  { label: 'Last 30 years', value: [dayjs().add(-30, 'y'), dayjs()] },
];

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

  const startDayWeek = dayjs(getStartAndEndOfWeek()[0]).format('DD MMM')
  const endDayWeek = dayjs(getStartAndEndOfWeek()[1]).format('DD MMM')

  return (
    <div className="flex items-center gap-5">
      <Typography className="px-2 py-1 rounded-md border">
        {startDayWeek} - {endDayWeek}
      </Typography>
      <div>
        <RangePicker
          className=""
          format={DATE_FORMAT}
          defaultValue={[dayjs(dataRange.from, DATE_FORMAT), dayjs(dataRange.end, DATE_FORMAT)]}
          presets={rangePresets}
          onChange={onSelectDateRangeHandler}
        />
      </div>
    </div>
  )
}

export default Header;