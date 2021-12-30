import { Layout, Card, Col } from "antd";
import {
  BlueColorSpan,
  FlexRowCenterContent,
  IconContainer,
} from "../../components/Elements";
import { useState } from "react";
import { StarFilled, StarOutlined, BranchesOutlined } from "@ant-design/icons";
import { Div } from "../../components/common/div/Div";
import { Intro } from "./Intro";
import { Paragraph } from "../../components/common/paragraph/Paragraph";
import { Row } from "../../components/common/row/Row";
import NavBar from "../../components/navbar/NavBar";

export const Profile = () => {
  const [hasStar, setHasStar] = useState(false);
  return (
    <>
      <Layout className="layout">
        <NavBar />

        <FlexRowCenterContent style={{ padding: "0 50px", width: "100%" }}>
          <Row width="100%" mTop="2%">
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              <Intro />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <Div align="end" justify="end" direction="row" gap="0">
                <IconContainer>
                  {hasStar ? (
                    <StarFilled
                      style={styles.blueIcon}
                      onClick={() => setHasStar(!hasStar)}
                    />
                  ) : (
                    <StarOutlined
                      style={styles.blueIcon}
                      onClick={() => setHasStar(!hasStar)}
                    />
                  )}
                  <BlueColorSpan>Star</BlueColorSpan>
                </IconContainer>
                <IconContainer>
                  <BranchesOutlined style={styles.blueIcon} />
                  <BlueColorSpan>Fork</BlueColorSpan>
                </IconContainer>
              </Div>

              <Row>
                <Col span={24}>
                  <Card title="gistfile1.m">
                    <Paragraph>
                      <>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        Eligendi, eveniet eius obcaecati cum voluptas neque esse
                        <br />
                        officiis culpa dignissimos similique commodi natus quis
                        <br />
                        aspernatur nobis nisi eos consequatur vero quos?
                        <br />
                      </>
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </FlexRowCenterContent>
      </Layout>
      ,
    </>
  );
};
const styles = {
  blueIcon: {
    color: "blue",
  },
};
