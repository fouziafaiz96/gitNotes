import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { Button, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";

export const BgButton = styled(Button)<{}>`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: white;
  background-color: green;
  margin-bottom: 20px;
`;
export const FlexRowEnd = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`;
export const FlexRowStart = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`;
export const FlexRowCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FlexRowCenterContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;
export const CustomTypo = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0;
`;
export const IconContainer = styled.p`
  padding: 1%;
  display: inline-block;
  margin: 2%;
`;

export const BlueColorIcon = styled(Icon)`
  color: blue;
`;
export const BlueColorSpan = styled.span`
  color: blue;
`;
