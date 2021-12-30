import { CutomParagraph } from "../../../styles/Elements";

interface IProps {
  children: string | JSX.Element | JSX.Element[] | undefined;
}
export const Paragraph = ({ children }: IProps) => {
  return <CutomParagraph>{children}</CutomParagraph>;
};
