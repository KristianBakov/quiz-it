import { Outlet } from "react-router-dom";
import Layout from "../components/layouts/layout";

export default function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
