import { Button, Col, Input, Row, Typography } from "antd";
import styled from "styled-components";

export const CustomButton = styled(Button)<{
  bg?: string;
  color: string;
  bordercolor: string;
}>`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.02em;
  border: ${({ bordercolor }) => `1px solid ${bordercolor}`};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
`;

export const CustomDiv = styled.div<{
  align?: string;
  justify: string;
  direction: string;
  gap: string;
  padding: string;
}>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
`;

export const CutomParagraph = styled(Typography)<{}>`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: black;
`;
export const CutomHeading = styled(Typography)<{
  color: string;
  size: string;
}>`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ size }) => size};
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ color }) => color};
  margin: 12px;
`;
export const CustomRow = styled(Row)<{
  width: string;
  mtop: string;
}>`
  width: ${({ width }) => width};
  margin-top: ${({ mtop }) => mtop};
`;
export const CustomCol = styled(Col)<{
  mtop: string;
}>`
  margin-top: ${({ mtop }) => mtop};
`;

export const CustomInput = styled(Input)<{
  bgcolor: string;
  width: string;
}>`
background-color:${({ bgcolor }) => bgcolor}
width: ${({ width }) => width};
`;
