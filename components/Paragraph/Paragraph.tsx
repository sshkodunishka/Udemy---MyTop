import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";

export const Paragraph = ({
  font = 'middle',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.little]: font == "little",
        [styles.middle]: font == "middle",
        [styles.big]: font == "big",
      })}
      {...props}
    >{children}</p>
  );
};
