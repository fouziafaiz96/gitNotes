import { CustomDiv } from "../../../styles/Elements";

interface IProps {
  align: string;
  justify: string;
  direction?: string;
  gap?: string;
  padding?: string;
  children: JSX.Element | JSX.Element[];
}
export const Div = ({
  align,
  justify,
  direction = "row",
  gap = "0",
  padding = "0%",
  children,
}: IProps) => {
  return (
    <CustomDiv
      align={align}
      justify={justify}
      direction={direction}
      gap={gap}
      padding={padding}
    >
      {children}
    </CustomDiv>
  );
};
