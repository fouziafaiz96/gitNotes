import { CustomCol } from "../../../styles/Elements";

interface IProps {
  mTop: string;
  xs?: number;
  md?: number;
  lg?: number;
  children?: JSX.Element | JSX.Element[] | undefined | 0;
}
export const Col = ({ mTop, xs = 24, md = 16, children, lg = 6 }: IProps) => {
  return (
    <>
      <CustomCol
        mtop={mTop}
        xs={{ span: xs }}
        md={{ span: md }}
        lg={{ span: lg ? lg : md }}
      >
        {children}
      </CustomCol>
    </>
  );
};
