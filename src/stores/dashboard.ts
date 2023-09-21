import { create } from "zustand";
import { devtools } from "zustand/middleware";

import dayjs, { Dayjs } from "dayjs";

const dateNow = dayjs();

type DashboardState = {
  dataRange: DateRange;
};

type DateRange = {
  from: Dayjs;
  end: Dayjs;
};

type DashboardActions = {
  setDateRange: (newVal: DateRange) => void;
};

export const useDashboardStore = create<DashboardState & DashboardActions>()(
  devtools((set) => ({
    dataRange: {
      from: dateNow,
      end: dateNow.add(7, "day"),
    },

    setDateRange: (newVal) => {
      set(() => ({ dataRange: newVal }));
    },
  }))
);
