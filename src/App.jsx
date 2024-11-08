import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Avatar, Card, ConfigProvider, List, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Icon, {
  LoadingOutlined,
  CheckCircleOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";

const data = [
  {
    title: "Print Job 1",
    id: "1234567890",
    status: "Queued",
    icon: <LoadingOutlined style={{ color: "white" }} />,
    statusId: 1,
  },
  {
    title: "Print Job 2",
    id: "1234567890",
    status: "Completed",
    icon: <CheckCircleOutlined style={{ color: "green" }} />,
    statusId: 3,
  },
  {
    title: "Print Job 3",
    id: "1234567890",
    status: "Completed",
    icon: <CheckCircleOutlined style={{ color: "green" }} />,
    statusId: 3,
  },
  {
    title: "Print Job 4",
    id: "1234567890",
    status: "In Progress",
    icon: <Loading3QuartersOutlined style={{ color: "white" }} />,
    statusId: 2,
  },
  {
    title: "Print Job 5",
    id: "1234567890",
    status: "In Progress",
    icon: <Loading3QuartersOutlined style={{ color: "white" }} />,
    statusId: 2,
  },
  {
    title: "Print Job 6",
    id: "1234567890",
    status: "In Progress",
    icon: <Loading3QuartersOutlined style={{ color: "white" }} />,
    statusId: 2,
  },
  {
    title: "Print Job 7",
    id: "1234567890",
    status: "Queued",
    icon: <LoadingOutlined style={{ color: "white" }} />,
    statusId: 1,
  },
];

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [filteredData, setFilteredData] = useState(data);

  const handleRoleChange = (value) => {
    if (value === 1) {
      setFilteredData(data);
      setIsAdmin(true);
    } else {
      setFilteredData(data.filter((item) => item.statusId === 2));
      setIsAdmin(false);
    }
  };

  const handleFilterChange = (value) => {
    if (value === 1) {
      setFilteredData(data.filter((item) => item.statusId === 1));
    } else if (value === 2) {
      setFilteredData(data.filter((item) => item.statusId === 2));
    } else if (value === 3) {
      setFilteredData(data.filter((item) => item.statusId === 3));
    } else if (value === 4) {
      setFilteredData(data);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: "#a2a2a2",
          colorText:"white",
          colorBgBase:"#000000"
        },
        components:{
          Select:{
            selectorBg:"ffffff66",
            colorBorder:"6b8e8f",
            optionSelectedBg:"rgb(53 53 53)",
            optionActiveBg:"#00000000",
            colorIcon:"white"
          }
        }
      }}
    >
    <Card
      className="glass"
      style={{
        width: "95vw",
        margin: "5% auto",
      }}
    >
      <Title level={2}>Print Jobs ( {filteredData.length} )</Title>
      <Select
        selec
        showSearch
        defaultValue={1}
        placeholder="Select a Role"
        optionFilterProp="label"
        onChange={handleRoleChange}
        options={[
          {
            value: 1,
            label: "Admin",
          },
          {
            value: 2,
            label: "Technician",
          },
        ]}
        style={{
          marginBottom: "20px",
        }}
      />
      {isAdmin && (
        <Select
          showSearch
          placeholder="Select a Job Status"
          optionFilterProp="label"
          onChange={handleFilterChange}
          options={[
            {
              value: 1,
              label: "Queued",
            },
            {
              value: 2,
              label: "In Progress",
            },
            {
              value: 3,
              label: "Completed",
            },
            {
              value: 4,
              label: "All",
            },
          ]}
          style={{
            marginBottom: "20px",
            marginLeft: "5px",
          }}
        />
      )}
      <List
        itemLayout="horizontal"
        dataSource={filteredData}
        renderItem={(item, index) => (
          <List.Item
            style={{
              padding: "20px",
              width: "85vw",
              borderRadius: "5px",
              marginBottom: "10px",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 0px 5px rgb(189 189 196 / 50%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={
                <div>
                  <p style={{ margin: "0 auto", color: "white" }}>{item.id}</p>
                  <p style={{ margin: "0 auto", color: "#b2aeae" }}>{item.status}</p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
    </ConfigProvider>
  );
}

export default App;
