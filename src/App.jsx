import Dummy from "./lib/dummy.js";
import { Table } from "antd";
import Layout from "./layout/Layout";

const App = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tittle",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (title, record) => <a href={`/user/${record.title}`}>Lihat</a>,
    },
  ];

  return (
    <Layout>
      <Table dataSource={Dummy} columns={columns} />
    </Layout>
  );
};

export default App;
