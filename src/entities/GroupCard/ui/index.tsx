import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";
import styles from "./styles.module.scss";

interface GroupCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly onClick?: (event?: any) => void
}

const GroupCard: React.FC<GroupCardProps> = props => {
  const { children, className, onClick } = props;

  return (
    <div className={cn(styles.root, className)} onClick={onClick}>
        {children}
    </div>
  );
};

export { GroupCard };
