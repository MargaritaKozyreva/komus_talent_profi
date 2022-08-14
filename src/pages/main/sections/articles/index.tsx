import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { UserType } from "@api/types";

interface ArticleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: UserType;
  className?: string;
}

const Article: React.FC<ArticleProps> = props => {
  const { data, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <div>Articles</div>
    </div>
  );
};

export { Article };
