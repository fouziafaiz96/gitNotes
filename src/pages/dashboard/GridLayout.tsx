import { Avatar, Card, Comment } from "antd";
import React, { useEffect, useState } from "react";
import { Col } from "../../components/common/col/Col";
import { Heading } from "../../components/common/heading/Heading";
import { Paragraph } from "../../components/common/paragraph/Paragraph";
import { Row } from "../../components/common/row/Row";
import { UserIntro } from "../../components/common/userintro/UserIntro";
import { useGistContext } from "../../context/AppContext";
import { GistProps } from "../../utils/interface";

const GridLayout = () => {
  const { state } = useGistContext();
  const [gistData, setGistData] = useState<GistProps[]>([]);
  useEffect(() => {
    setGistData(state.gist);
  }, [state]);
  return (
    <>
      <Row width="100%" mTop="0" gutter={10}>
        {gistData &&
          gistData.length &&
          gistData.map((item, index) => {
            return (
              <Col xs={24} md={12} lg={6} key={item.id + index} mTop="3%">
                <Card>
                  <Comment
                    author={
                      <Heading color="blue" size="medium">
                        {item?.filename}
                      </Heading>
                    }
                    avatar={
                      <Avatar
                        src={
                          item?.gistImg
                            ? item.gistImg
                            : "https://joeschmoe.io/api/v1/random"
                        }
                        alt="User provided gist image"
                      />
                    }
                    content={<Paragraph>{item?.desc}</Paragraph>}
                  />
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default React.memo(GridLayout);
