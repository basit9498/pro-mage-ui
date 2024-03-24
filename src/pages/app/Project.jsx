import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SearchIcon from "../../assets/image/search.svg";
import Button from "../../components/Button";
import Thead from "../../components/Table/Thead";
import { Link } from "react-router-dom";
import AddProjectModal from "../../components/project/AddProjectModal";
import { getProjectsAPI } from "../../services/project.service";
import { toastErrorDisplay } from "../../helper/toastErrorDisplay";
import moment from "moment";
import { checkProjectStatus } from "../../helper/projectStatus";
import ReactPaginate from "react-paginate";

const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [singleProjectData, setSingleProjectData] = useState(null);

  const [pageCount, setPageCount] = useState(false);
  const [perPageLimit, setPerPageLimit] = useState(10);
  const [offsetLimit, setOffsetLimit] = useState(0);

  useEffect(() => {
    getAllProjects(offsetLimit, perPageLimit);
  }, [perPageLimit, offsetLimit]);

  const getAllProjects = async (offset, limit) => {
    try {
      const res = await getProjectsAPI({ offset, limit });
      setPageCount(Math.ceil(res?.count / perPageLimit));
      setProjects(res?.projects);
    } catch (err) {
      toastErrorDisplay(err);
    }
  };

  const handleModalClose = () => {
    setSingleProjectData(null);
    setOpenModal(false);
  };
  const handlePageSet = (event) => {
    setOffsetLimit(event.selected + 1);
  };
  return (
    <>
      {openModal && (
        <AddProjectModal
          openModal={openModal}
          setOpenModal={handleModalClose}
          apiCall={getAllProjects}
          singleProjectData={singleProjectData}
        />
      )}

      <Layout>
        <section className=" filter-bg flex gap-x-3 justify-between">
          <h1 className="text-[25px] font-semibold text-gray-900">Projects</h1>
          <Button onClick={() => setOpenModal(true)} text="Add project" />
        </section>
        <section className="app-table-bg">
          <table className="w-full table ">
            <Thead
              cols={[
                "SN",
                "NAME",
                "MANAGER",
                "START DATE",
                "END DATE",
                "IS RUNNING",
                "ACTION",
              ]}
            />
            <tbody>
              {projects?.map((project, index) => (
                <tr className="text-gray-700 text-xs custom_transition hover:bg-bgColor">
                  <td className="table_td_th  pl-3">{index + 1}</td>
                  <td className="table_td_th">
                    <Link
                      to={`/project-detail/${project._id}`}
                      className="underline"
                    >
                      {project?.name}
                    </Link>
                  </td>
                  <td className="table_td_th ">{project?.manager?.name}</td>
                  <td className="table_td_th ">
                    {moment(project?.start_date).format("DD/MM/YYYY")}
                  </td>
                  <td className="table_td_th ">
                    {moment(project?.end_date).format("DD/MM/YYYY")}
                  </td>
                  <td className="table_td_th text-center">
                    <input
                      type="checkbox"
                      readOnly
                      className="accent-primary h-4 w-4"
                      checked={checkProjectStatus(project?.end_date)}
                    />
                  </td>
                  <td className="table_td_th text-center">
                    <span
                      className="underline text-primary font-semibold text-sm mr-1"
                      role="button"
                    >
                      <Link
                        to={`/project-detail/${project._id}`}
                        className="underline"
                      >
                        View
                      </Link>
                    </span>
                    <span
                      className="underline text-primary font-semibold text-sm"
                      role="button"
                      onClick={() => {
                        setSingleProjectData(project);
                        setOpenModal(true);
                      }}
                    >
                      Edit
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          {projects?.length > 0 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageSet}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          )}
        </section>
      </Layout>
    </>
  );
};

export default Index;
