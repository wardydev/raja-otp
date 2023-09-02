import { CardContiner, Layout } from "../../components";
import Card from "./Card";
import Table from "./Table";
import TabsBar from "./TabsBar";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols43 gap-x-0 lg:gap-x-6">
        <Card />
        <div className="col-span-3 bg-[white] shadow-lg shadow-primary-100/10 rounded-xl mt-12 lg:mt-0 md:mt-0">
          <TabsBar />
        </div>
      </div>
      <div className="mt-8">
        <CardContiner>
          <h2 className="text-lg font-semibold text-dark">Informasi Terkini</h2>
          <Table />
        </CardContiner>
      </div>
    </Layout>
  );
};

export default Dashboard;
