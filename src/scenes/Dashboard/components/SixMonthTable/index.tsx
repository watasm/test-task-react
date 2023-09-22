'use client'

import { useMemo } from "react";
import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

import { useDashboardStore } from "@/stores/dashboard";
import { sortPriceColumn, sortReleaseColumn, sortTitleColumn } from "../utils/sortHandlers";

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

const SixMonthTable = () => {
  const movies = useDashboardStore(state => state.movies)

  const filteredMovies = useMemo(() => {
    return movies.sort((a: Movie, b: Movie): number => {
      const aDate = dayjs(a.release_date);
      const bDate = dayjs(b.release_date);

      const diff = aDate.diff(bDate);

      return diff;
    }).filter(movie => {
      const currentYear = dayjs().get('year')
      const moviewYear = dayjs(movie.release_date).get('year')

      if (currentYear !== moviewYear) {
        return false;
      }

      return dayjs(movie.release_date).get('month') >= 5;
    })
  }, [movies])

  return (
    <div className="desktop:w-1/2 tablet:w-full">
      <div className="mb-6 pt-2 pb-3 flex flex-col items-center">
        <p>6 MONTH FORECAST</p>
      </div>
      <AntTable columns={columns} dataSource={filteredMovies} />
    </div>
  )
}

export default SixMonthTable;