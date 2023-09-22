'use client'

import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";

import { useDashboardStore } from "@/stores/dashboard";
import dayjs from "dayjs";

const sortReleaseColumn = (a: Movie, b: Movie): number => {
  const aDate = dayjs(a.release_date)
  const bDate = dayjs(b.release_date)


  return 1;
}

type DataType = Movie

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'MDA',
    dataIndex: 'mda',
    key: 'mda',
    render: (text) => <p className="w-fit px-1 rounded-md bg-blue-300">{text}</p>
  },
  {
    title: 'Release',
    dataIndex: 'release_date',
    key: 'release_date',
    sorter: sortReleaseColumn,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }
];

const MainTable = () => {
  const movies = useDashboardStore(state => state.movies)

  return (
    <div>
      <AntTable columns={columns} dataSource={movies} />
    </div>
  )
}

export default MainTable;