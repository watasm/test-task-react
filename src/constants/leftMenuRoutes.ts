import {
  LineChartOutlined,
  HomeOutlined,
  MehOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

type Item = {
  id: number;
  label: string;
  icon: any;
  path: string;
  childred?: Item[];
};

export const LeftMenuRoutesTop: Item[] = [
  {
    id: 1,
    label: "Dasboard",
    icon: LineChartOutlined,
    path: "/dashboard",
  },
  {
    id: 2,
    label: "Test 1",
    icon: HomeOutlined,
    path: "/dashboard",
  },
  {
    id: 3,
    label: "Test 2",
    icon: MehOutlined,
    path: "/dashboard",
  },
];

export const LeftMenuRoutesBottom: Item[] = [
  {
    id: 1,
    label: "Log Out",
    icon: LogoutOutlined,
    path: "/dashboard",
  },
];
