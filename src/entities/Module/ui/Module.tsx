import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";
import styles from "./styles.module.scss";
import { ModuleType } from '@shared/api/types';

interface ModuleCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly className?: string;
  readonly children?: ReactNode;
}

const Module: React.FC<ModuleCardProps> = props => {
  const { children, className, style } = props;

  return (
    <div className={cn(styles.root, className)} style={style}>
      {children}
    </div>
  );
};

export default Module;
