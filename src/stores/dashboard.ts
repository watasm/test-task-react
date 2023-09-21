import { create } from "zustand";
import { devtools } from "zustand/middleware";

import dayjs, { Dayjs } from "dayjs";

const dateNow = dayjs();

type DashboardState = {
  dataRange: DateRange;
  demographicsRange: DemographicsRange;
};

type DateRange = {
  from: Dayjs;
  end: Dayjs;
};

type DemographicsRange = {
  from: number;
  end: number;
};

type DashboardActions = {
  setDateRange: (newVal: DateRange) => void;
  setDemographicsRange: (newVal: DemographicsRange) => void;
};

export const useDashboardStore = create<DashboardState & DashboardActions>()(
  devtools((set) => ({
    dataRange: {
      from: dateNow,
      end: dateNow.add(7, "day"),
    },
    demographicsRange: {
      from: 18,
      end: 35,
    },

    setDateRange: (newVal) => {
      set(() => ({ dataRange: newVal }));
    },
    setDemographicsRange: (newVal) => {
      set(() => ({ demographicsRange: newVal }));
    },
  }))
);
