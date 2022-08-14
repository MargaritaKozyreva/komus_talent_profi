import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useMemo,
} from "react";

import cn from "classnames";
import styles from "./styles.module.scss";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  type?: "horizont" | "vertical" | "cube";
  hasImage: boolean;
  onClick?: (event: any) => void;
}

const Card: React.FC<CardProps> = props => {
  const { children, className, type, style, hasImage = true, onClick } = props;

  const cStyles = useMemo(
    () =>
      cn(
        { [`${styles.root_type_cube}`]: type === "cube" },
        { [`${styles.root_type_vertical}`]: type === "vertical" },
        { [`${styles.root_type_horizont}`]: type === "horizont" },
        { [`${styles.root_cursor_pointer}`]: onClick },
        className
      ),
    [className, type]
  );

  return (
    <div className={cn(styles.root, cStyles)} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

const BASE = "article";
export { Card };
