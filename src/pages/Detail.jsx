import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import DetailData from "../lib/dummy";
import { Row, Col, Space, Typography } from "antd";

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const { Title, Text } = Typography;
  console.log(DetailData.filter((el) => el.id == id).map((el) => el.title));
  return (
    <Layout>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Title level={2}>Detail : {id}</Title>
      </Space>
      {DetailData.filter((el) => el.id == id).map((el) => (
        <div key={el.id}>
          <Text>{el.title}</Text>
          <Text>{el.body}</Text>
        </div>
      ))}
    </Layout>
  );
};

export default Detail;
