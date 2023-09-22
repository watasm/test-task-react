import { create } from "zustand";
import { devtools } from "zustand/middleware";

import dayjs, { Dayjs } from "dayjs";

const dateNow = dayjs();

type DashboardState = {
  dataRange: DateRange;
  demographicsRange: DemographicsRange;
  movies: Movie[];
  metrics: DasboardMetrics;
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
  setMovies: (newVal: Movie[]) => void;
  setMetrics: (newVal: DasboardMetrics) => void;
};

export const useDashboardStore = create<DashboardState & DashboardActions>()(
  devtools((set) => ({
    dataRange: {
      from: dayjs().set("month", 0).set("date", 1),
      end: dateNow,
    },
    demographicsRange: {
      from: 18,
      end: 35,
    },
    movies: [],
    metrics: {
      indastryBoxOffice: 0,
      val: 0,
      seasomasity: 0,
      percent: 0,
    },

    setDateRange: (newVal) => {
      set(() => ({ dataRange: newVal }));
    },
    setDemographicsRange: (newVal) => {
      set(() => ({ demographicsRange: newVal }));
    },
    setMovies: (newVal) => {
      set(() => ({ movies: newVal }));
    },
    setMetrics: (newVal) => {
      set(() => ({ metrics: newVal }));
    },
  }))
);
