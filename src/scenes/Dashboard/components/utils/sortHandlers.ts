import dayjs from "dayjs";

export const sortTitleColumn = (a: Movie, b: Movie): number => {
  const aTitle = a.title;
  const bTitle = b.title;

  return aTitle.localeCompare(bTitle);
};

export const sortMdaColumn = (a: Movie, b: Movie): number => {
  const aMda = a.mda;
  const bMda = b.mda;

  return aMda.localeCompare(bMda);
};

export const sortReleaseColumn = (a: Movie, b: Movie): number => {
  const aDate = dayjs(a.release_date);
  const bDate = dayjs(b.release_date);

  const diff = aDate.diff(bDate);

  return diff;
};

export const sortPriceColumn = (a: Movie, b: Movie): number => {
  const aPrice = a.price;
  const bPrice = b.price;

  const diff = Number(aPrice) - Number(bPrice);

  if (isNaN(diff)) {
    return 0;
  }

  return diff;
};
