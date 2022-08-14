import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import cn from "classnames";
import "./Button.scss";
import Arrow from "@ui/icons/Arrow";
import { useWindowSize } from "@shared/helpers/hooks/useWindowSize";

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: "s" | "l";
  mode?: "red" | "blue" | "lightBlue" | "orange" | "ghost" | "white";
  icon?: React.ReactNode;
  children?: any;
  value?: string;
  active?: boolean;
  withCircle?: boolean;
  arrowColor?:  "red" | "blue" | "lightBlue" | "orange" | "ghost" | "white";
};

export default function Button({
  size = "l",
  mode = "ghost",
  children,
  value,
  icon,
  className,
  active,
  withCircle,
  arrowColor,
  ...props
}: Props) {
  const windowSize = useWindowSize();
  const [btnSize, setBtnSize] = useState<string>(size);

  const text = value || children;
  const isHaveText = !!text;

  useEffect(() => {
    setBtnSize(() => {
      if (windowSize.width < 600) {
        return "s";
      } else if (windowSize.width >= 600) {
        return "l";
      }
      return "l";
    });
  }, [windowSize.width]);

  const styles = useMemo(
    () => ({
      container: cn(
        BASE,
        `${BASE}_size_${btnSize}`,
        `${BASE}_mode_${mode}`,
        { [`${BASE}_with-text`]: isHaveText },
        { [`${BASE}_withCircle`]: withCircle },
        className
      ),
      icon: cn(ICON, { [`${ICON}_margin`]: isHaveText }),
      text: cn(TEXT),
    }),
    [className, isHaveText, mode, size, withCircle, btnSize]
  );

  return (
    <button {...props} className={styles.container}>
      <span className={styles.text}>{text}</span>
      {icon}
      {arrowColor && <Arrow color={arrowColor} />}
    </button>
  );
}

const BASE = "komus-design-button";
const ICON = `${BASE}__icon`;
const TEXT = `${BASE}__text`;
