import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

const { Header, Sider, Content } = Layout;

const App = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedPg, setSelect] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (selectedPg !== location.pathname) {
        setSelect(location.pathname);
      }
    }
  }, [location, selectedPg]);

  const handleClick = (e) => {
    navigate(e.key);
    // setSelect(e.key);
    // console.log(selectedPg);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <Menu
          onClick={handleClick}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedPg]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "/about",
              icon: <InfoCircleOutlined />,
              label: "About",
            },
            {
              key: "/contact",
              icon: <PhoneOutlined />,
              label: "Contact",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
