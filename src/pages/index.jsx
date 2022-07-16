import Dummy from "../lib/dummy.js";
import { Table, Input, Row, Col } from "antd";
import Layout from "../layout/Layout";
import { Columns } from "../lib/columns";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(Dummy);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let val = e.target.value;
    setSearch(val);
    if (val) {
      const filteredData = data.filter((x) => x.title.includes(val));
      setData(filteredData);
    } else {
      setData(Dummy);
    }
  };
  return (
    <Layout>
      <Row>
        <Col style={{ marginBottom: "15px" }}>
          <Input
            placeholder="Cari berdasarkan judul"
            onChange={handleSearch}
            value={search}
          />
        </Col>
      </Row>
      <Table dataSource={data} columns={Columns} rowKey="id" />
    </Layout>
  );
};

export default Home;
