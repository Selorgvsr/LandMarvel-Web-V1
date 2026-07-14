import { Fragment, type ReactNode } from "react";
import { LogoName } from "./LogoName";

export function LogoText({
  children,
  height = 1,
}: {
  children: ReactNode;
  height?: number;
}) {
  if (typeof children !== "string") return children;
  const parts = children.split("Land Marvel");
  if (parts.length === 1) return children;
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <LogoName height={height} />}
        </Fragment>
      ))}
    </>
  );
}
