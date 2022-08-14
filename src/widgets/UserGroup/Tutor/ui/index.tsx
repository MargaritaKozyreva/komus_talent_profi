import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { UserType } from "@api/types";

interface TutorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: UserType;
  className?: string;
}

const Tutor: React.FC<TutorProps> = props => {
  const { data, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <div></div>
    </div>
  );
};

export { Tutor };
