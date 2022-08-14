import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { UserType } from "@api/types";

interface UsersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: UserType[];
  className?: string;
}

const GroupUsers: React.FC<UsersProps> = props => {
  const { data, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <h1>Моя группа</h1>
      <div></div>
    </div>
  );
};

export { GroupUsers };
