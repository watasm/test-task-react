'use client'

import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";

import { useDashboardStore } from "@/stores/dashboard";
import { sortMdaColumn, sortPriceColumn, sortReleaseColumn, sortTitleColumn } from "../utils/sortHandlers";
import dayjs from "dayjs";
import { useMemo } from "react";


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
        <p>{movie.description}</p>
      </div>
    ),
    sorter: sortTitleColumn
  },
  {
    title: 'MDA',
    dataIndex: 'mda',
    key: 'mda',
    render: (text) => <p className="w-fit px-2 rounded-md bg-sky-300">{text}</p>,
    sorter: sortMdaColumn,
  },
  {
    title: 'Release',
    dataIndex: 'release_date',
    key: 'release_date',
    defaultSortOrder: 'descend',
    render: (text) => <p>{dayjs(text).format('DD MMM YY')}</p>,
    sorter: sortReleaseColumn,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: sortPriceColumn
  }
];

const MainTable = () => {
  const movies = useDashboardStore(state => state.movies)
  const dataRange = useDashboardStore(state => state.dataRange)

  const felteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const from = dataRange.from;
      const end = dataRange.end;

      const isInRange = (dayjs(movie.release_date).isAfter(from, 'day') && dayjs(movie.release_date).isBefore(end, 'day'))

      if (!isInRange) {
        return false;
      }

      return true;
    })
  }, [movies, dataRange])

  return (
    <div>
      <AntTable columns={columns} dataSource={felteredMovies} />
    </div>
  )
}

export default MainTable;