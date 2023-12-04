import { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { SystemProperties } from "../../styled-system/types";

interface ContainerProps extends SystemProperties {
  children: ReactNode;
  id?: string;
}

const Container = ({ children, id, ...rest }: ContainerProps) => {
  return (
    <section
      id={id}
      className={css({
        py: { mdDown: 40, mdToLg: 40, lgTo2xl: 120, "2xl": 120 },
        px: { mdDown: 20, mdToLg: 40, lgTo2xl: 160, "2xl": 160 },
        ...rest,
      })}
    >
      {children}
    </section>
  );
};

export default Container;
