import React from "react";
import { Children } from "react";

type EachUtilsProps = {
  of: any[];
  render: (item: any, index?: number) => React.ReactNode;
};

const EachUtils = ({ of, render }: EachUtilsProps) => {
  return (
    <> {Children.toArray(of.map((item, index) => render(item, index)))} </>
  );
};

export default EachUtils;
