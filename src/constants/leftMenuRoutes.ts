import {
  LineChartOutlined,
  LogoutOutlined,
  HeartOutlined,
  FireOutlined,
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
    label: "Favorites",
    icon: HeartOutlined,
    path: "/favorites",
  },
  {
    id: 3,
    label: "News",
    icon: FireOutlined,
    path: "/news",
  },
];

export const LeftMenuRoutesBottom: Item[] = [
  {
    id: 1,
    label: "Log Out",
    icon: LogoutOutlined,
    path: "/sign-in",
  },
];
