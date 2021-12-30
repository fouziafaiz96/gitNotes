import { Table } from "antd";
import { useEffect, useState } from "react";
import { Row } from "../../components/common/row/Row";
import { useGistContext } from "../../context/AppContext";
import { GistProps } from "../../utils/interface";

export const TableLayout = () => {
  const { state, dispatch } = useGistContext();
  const [gistData, setGistData] = useState<GistProps[]>([]);
  useEffect(() => {
    setGistData(state.gist);
  }, [state]);
  const columns = [
    {
      title: "Filename",
      dataIndex: "filename",
      key: "filename",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
  ];

  return (
    <>
      <Row mTop="2%" width="100%">
        <Table
          columns={columns}
          dataSource={gistData}
          style={{ width: "100%" }}
        />
      </Row>
    </>
  );
};
