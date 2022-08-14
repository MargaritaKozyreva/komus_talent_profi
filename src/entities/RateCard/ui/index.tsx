import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";
import styles from "./styles.module.scss";
import { RateType } from '@shared/api/types';

interface RateCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    readonly data: RateType;
    readonly className?: string;
    readonly children?: ReactNode;
}

const RateCard: React.FC<RateCardProps> = props => {
  const { data, children, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      {children}
    </div>
  );
};

export { RateCard };
