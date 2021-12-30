import { Col } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { Heading } from "../../components/common/heading/Heading";
import { Div } from "../../components/common/div/Div";
import { Button } from "../../components/common/button/Button";

export const Intro = () => {
  return (
    <>
      <Div align="center" justify="center" direction="column" gap="10px">
        <>
          <Avatar
            style={{ width: "150px", height: "150px" }}
            src="https://joeschmoe.io/api/v1/random"
          />
          <Heading color="black" size="x-large">
            Anya Hassan
          </Heading>
          <Button
            title=" View github profile"
            bgColor="white"
            color="blue"
            bordercolor="black"
          ></Button>
        </>
      </Div>
    </>
  );
};
