import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Thead from "../../components/Table/Thead";
import AddTaskModal from "../../components/project/AddTaskModal";
import Avatar from "../../assets/image/avatar.svg";
import { getSingleProjectsAPI } from "../../services/project.service";
import { useParams } from "react-router-dom";
import { toastErrorDisplay } from "../../helper/toastErrorDisplay";
import moment from "moment";

const ProjectDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({});
  const [singleTaskData, setSingleTaskData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleAllProject(id);
    }
  }, [id]);

  const getSingleAllProject = async (id) => {
    try {
      const res = await getSingleProjectsAPI(id);
      setProject(res?.project);
    } catch (err) {
      toastErrorDisplay(err);
    }
  };

  const handleTaskModalClose = () => {
    setSingleTaskData(null);
    setOpenModal(false);
  };
  return (
    <>
      <Layout>
        {openModal && (
          <AddTaskModal
            openModal={openModal}
            setOpenModal={handleTaskModalClose}
            projectId={project?._id}
            apiCall={getSingleAllProject}
            singleTaskData={singleTaskData}
          />
        )}

        <section className="mt-5  flex gap-x-3">
          <div className="flex-[2] filter-bg">
            <h1 className="text-[25px] font-semibold text-gray-900">
              {project?.name}
            </h1>
            <p className="text-sm mt-3">{project?.description}</p>
          </div>
          <section className="flex-1 text-sm space-y-2 filter-bg flex flex-col justify-center">
            <div className="flex gap-x-2 items-center justify-between">
              <span className="text-gray-500 font-semibold">
                Project Manager:
              </span>
              <div className="flex gap-x-3 items-center">
                <img
                  src={Avatar}
                  className="h-8 w-8 object-cover rounded-full"
                />
                <p>{project?.manager?.name}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-semibold">
                Project Start Date:{" "}
              </span>
              <p className="text-gray-600">
                {moment(project?.start_date).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-semibold">
                Project End Date:{" "}
              </span>{" "}
              <p className="text-gray-600">
                {moment(project?.end_date).format("DD-MM-YYYY")}
              </p>
            </div>
          </section>
        </section>

        <section className=" filter-bg flex items-center py-2 justify-between">
          <h1 className="text-[25px] font-semibold text-gray-900 ">Tasks</h1>
          <Button text="New task" onClick={() => setOpenModal(true)} />
        </section>

        <section className="app-table-bg">
          <table className="w-full table ">
            <Thead
              cols={[
                "SN",
                "START DATE",
                "END DATE",
                "DESCRIPTION",
                "STATUS",
                "ACTION",
              ]}
            />
            <tbody>
              {project?.tasks?.map((task, index) => (
                <tr className="text-gray-700 text-xs custom_transition hover:bg-bgColor">
                  <td className="table_td_th  pl-3">{index + 1}</td>
                  <td className="table_td_th ">
                    {moment(task?.start_date).format("DD/MM/YYYY")}
                  </td>
                  <td className="table_td_th ">
                    {moment(task?.end_date).format("DD/MM/YYYY")}
                  </td>
                  <td className="table_td_th ">{task?.name}</td>
                  <td className="table_td_th ">{task?.status}</td>
                  <td className="table_td_th text-center">
                    <span
                      className="underline text-primary font-semibold text-sm"
                      role="button"
                      onClick={() => {
                        setSingleTaskData(task);
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
      </Layout>
    </>
  );
};

export default ProjectDetail;
