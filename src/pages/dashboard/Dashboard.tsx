import { Layout } from "antd";
import { useEffect, useState } from "react";
import { UnorderedListOutlined, TableOutlined } from "@ant-design/icons";
import GridLayout from "./GridLayout";
import { TableLayout } from "./TableLayout";
import { useGistContext } from "../../context/AppContext";
import { Heading } from "../../components/common/heading/Heading";
import { Div } from "../../components/common/div/Div";
import { GistProps } from "../../utils/interface";
import NavBar from "../../components/navbar/NavBar";

const { Content, Footer } = Layout;
export const Dashboard = () => {
  const [layout, setLayout] = useState("grid");
  const { state, dispatch } = useGistContext();
  const [gistData, setGistData] = useState<GistProps[]>([]);

  const renderLayout = () => {
    if (layout == "list") return <TableLayout />;
    else return <GridLayout />;
  };
  useEffect(() => {
    setGistData(state.gist);
  }, [state]);

  return (
    <>
      <NavBar />
      <Content style={{ padding: "50px 80px" }}>
        <Div align="end" justify="end" direction="row" gap="10px">
          <TableOutlined
            onClick={() => setLayout("grid")}
            style={styles.iconSize}
          />
          <UnorderedListOutlined
            onClick={() => setLayout("list")}
            style={styles.iconSize}
          />
        </Div>
        {gistData && gistData.length ? (
          renderLayout()
        ) : (
          <Div align="center" justify="center">
            <Heading size="large" color="black">
              No records Found!
            </Heading>
          </Div>
        )}
      </Content>
      ,
    </>
  );
};
const styles = {
  iconSize: {
    fontSize: "25px",
  },
};
