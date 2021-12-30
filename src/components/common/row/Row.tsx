import { CustomRow } from "../../../styles/Elements";

interface IProps {
  width?: string;
  mTop?: string;
  gutter?: number;
  children?: JSX.Element | JSX.Element[] | undefined | 0;
}
export const Row = ({
  width = "100%",
  mTop = "0",
  children,
  gutter = 0,
}: IProps) => {
  return (
    <>
      <CustomRow width={width} mtop={mTop} gutter={gutter}>
        {children}
      </CustomRow>
    </>
  );
};
