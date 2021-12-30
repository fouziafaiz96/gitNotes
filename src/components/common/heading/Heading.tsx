import { CutomHeading, CutomParagraph } from "../../../styles/Elements";

interface IProps {
  color?: string;
  size?: string;
  children: string | JSX.Element | "" | undefined;
}
export const Heading = ({
  children,
  color = "black",
  size = "large",
}: IProps) => {
  return (
    <CutomHeading color={color} size={size}>
      {children}
    </CutomHeading>
  );
};
