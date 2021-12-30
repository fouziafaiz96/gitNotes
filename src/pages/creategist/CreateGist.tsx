import { Layout, Col, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { FlexRowCenterContent } from "../../components/Elements";
import { Heading } from "../../components/common/heading/Heading";
import { Button } from "../../components/common/button/Button";
import { useGistContext } from "../../context/AppContext";
import { GistProps } from "../../utils/interface";
import { convertBase64 } from "../../utils/gist";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import { Row } from "../../components/common/row/Row";

export const CreateGist = () => {
  console.log("create gist is rendering");

  const { TextArea } = Input;
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useGistContext();
  const history = useHistory();
  const handleUpload = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  };
  const [localState, setLocalState] = useState<GistProps>({
    id: 0,
    desc: "",
    filename: "",
    content: "",
    gistImg: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const fileUploaded: File = event.target.files[0];
      let gistId: number = Math.floor(Math.random() * 100);
      const base64: string | unknown = await convertBase64(fileUploaded);
      let img: string = base64 as string;
      setLocalState({ ...localState, gistImg: img, id: gistId });
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem("obj" + localState.id, JSON.stringify(localState));
    dispatch({ type: "ADD_GIST", payload: localState });
    history.push("/");
  };
  const { state } = useGistContext();
  return (
    <>
      <Layout className="layout">
        <NavBar />

        <FlexRowCenterContent style={{ padding: "0 50px", width: "100%" }}>
          <Heading size="x-large" color="black">
            Create Gist
          </Heading>
          <Row mTop="2%" width="75%">
            <Col span={24}>
              <Input
                placeholder="Enter gist description"
                name="desc"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row mTop="2%" width="75%">
            <Col span={24}>
              <Input
                placeholder="Enter file Name"
                name="filename"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row mTop="2%" width="75%">
            <Col span={24}>
              <TextArea
                placeholder="Enter file content..."
                name="content"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row mTop="2%" width="75%">
            <input
              type="file"
              ref={inputRef}
              style={styles.hidden}
              onChange={handleFileChange}
            />
            <Button
              title="  Click to Upload"
              bgColor="green"
              color="white"
              bordercolor="transparent"
              icon={<UploadOutlined />}
              handleClick={handleUpload}
            ></Button>
          </Row>
          <Row mTop="2%" width="75%">
            <Button
              title="Create Gist"
              bgColor="green"
              color="white"
              bordercolor="transparent"
              handleClick={handleSubmit}
            ></Button>
          </Row>
        </FlexRowCenterContent>
      </Layout>
      ,
    </>
  );
};
const styles = {
  hidden: {
    display: "none",
  },
};
