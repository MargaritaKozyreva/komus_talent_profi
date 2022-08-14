import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Button from "@shared/ui/Button/ui";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  text: string;
  buttonText: string;
  linkTo: string;
}

const Review: React.FC<ReviewProps> = props => {
  const { text, buttonText, linkTo } = props;
  return (
    <div className={cn(styles.root)}>
      <span>{text}</span>
      <div className={cn(styles.buttonSection)}>
        <a href={linkTo} target='_blank'>
          <Button mode="red">{buttonText}</Button>
        </a>
      </div>
    </div>
  );
};

export default Review;
