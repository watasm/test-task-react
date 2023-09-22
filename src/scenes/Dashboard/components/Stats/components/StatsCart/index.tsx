import { FC, ReactNode } from "react";

type Props = {
  title: ReactNode;
  description: string
}


const StatsCart: FC<Props> = ({ title, description }) => {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center">
      {title}
      <span className="my-2 text-center">
        {description}
      </span>
    </div>
  )
}

export default StatsCart;