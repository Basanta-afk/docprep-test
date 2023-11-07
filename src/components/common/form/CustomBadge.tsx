import React from "react";

type CustomBadgeTypes = {
  children: string | number;
  color: string;
  height: number;
  width: number;
  className?: any;
} & any;

const CustomBadge = ({
  children,
  color,
  height,
  width,
  className,
  ...restProps
}: CustomBadgeTypes) => {
  const combineClass = `hover:cursor-pointer font-bold ${className}`;
  return (
    <div
      style={{
        backgroundColor: color || "#E7E2EC",
        height: height,
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={combineClass}
      {...restProps}
    >
      <span>{children}</span>
    </div>
  );
};

export default CustomBadge;
