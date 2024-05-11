
import axios from "axios";
import { useEffect, useState } from "react";
import DataList from "../components/DataList";
import PaginationPage from "../components/PaginationPage";
import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  //? Data verisini 10'luk verilere böldük.
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getBlog = async () => {
    try {
      setLoading(true);
      const res = await axios.get(" https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <Header data={data}/>
      <DataList data={data} setData={setData} loading={loading} getBlog={getBlog} currentData={currentData}/>
      <PaginationPage dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} currentPage={currentPage}  />
    </div>
  );
};

export default Home;
