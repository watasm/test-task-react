'use client'

import { useMemo } from "react";
import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

import { useDashboardStore } from "@/stores/dashboard";
import { sortPriceColumn, sortReleaseColumn, sortTitleColumn } from "../utils/sortHandlers";
import { getStartAndEndOfWeek } from "../utils/getStartAndEndOfWeek";

type DataType = Movie

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '60%',
    render: (text, movie) => (
      <div>
        <p className="text-sm font-medium">{text}</p>
      </div>
    ),
    sorter: sortTitleColumn
  },
  {
    title: 'Rel',
    dataIndex: 'release_date',
    key: 'release_date',
    defaultSortOrder: 'descend',
    width: '20%',
    render: (text) => <p className="text-center">{dayjs(text).format('DD MMM')}</p>,
    sorter: sortReleaseColumn,
  },
  {
    title: 'Prc',
    dataIndex: 'price',
    key: 'price',
    width: '10%',
    sorter: sortPriceColumn
  }
];

const WeekendTable = () => {
  const movies = useDashboardStore(state => state.movies)

  const startDayWeek = dayjs(getStartAndEndOfWeek()[0])
  const saturday = dayjs(startDayWeek).add(5, 'day')
  const sundey = dayjs(startDayWeek).add(6, 'day')

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {

      return dayjs(movie.release_date).isSame(saturday, 'day') || dayjs(movie.release_date).isSame(sundey, 'day');
    })
  }, [movies])

  return (
    <div className="desktop:w-1/2 tablet:w-full">
      <div className="pt-2 pb-3 flex flex-col items-center">
        <p>WEEKEND</p>
        <p>{saturday.format('DD/MM')} - {sundey.format('DD/MM')}</p>
      </div>
      <AntTable columns={columns} dataSource={filteredMovies} />
    </div>
  )
}

export default WeekendTable;