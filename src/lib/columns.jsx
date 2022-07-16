import { Link } from "react-router-dom";
export const Columns = [
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
    render: (title, record) => <Link to={`/detail/${record.id}`}>Lihat</Link>,
  },
];
