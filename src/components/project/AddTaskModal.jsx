import React, { useState } from "react";
import AsideModal from "../AsideModal";
import CrossIcon from "../../assets/image/cross.svg";
import InputField from "../From-inputs/InputField";
import InputSelect from "../From-inputs/InputSelect";
import InputDate from "../From-inputs/InputDate";
import Button from "../Button";
import { Formik, Form, ErrorMessage } from "formik";
import {
  createProjectTaskAPI,
  updateProjectTaskAPI,
} from "../../services/project.service";
import toast from "react-hot-toast";
import { toastErrorDisplay } from "../../helper/toastErrorDisplay";

const AddTaskModal = ({
  openModal,
  setOpenModal,
  projectId,
  apiCall,
  singleTaskData,
}) => {
  const [taskStatus, setTaskStatus] = useState([
    { value: "COMPLETE", label: "Complete" },
    { value: "STARTED", label: "Started" },
    { value: "NOT_STARTED", label: "Not Started" },
    { value: "REJECTED", label: "Rejected" },
  ]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let res = null;
      if (singleTaskData) {
        const payload = {
          ...values,
          id: projectId,
          task_id: singleTaskData?._id,
        };
        res = await updateProjectTaskAPI(payload);
      } else {
        const payload = {
          ...values,
          id: projectId,
        };
        res = await createProjectTaskAPI(payload);
      }

      toast.success(res.message);
      apiCall(projectId);
      setOpenModal();
    } catch (error) {
      toastErrorDisplay(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AsideModal show={openModal} className="overflow-hidden flex flex-col ">
        <div className={`py-5 border-b px-5 flex items-center justify-between`}>
          <h2 className="text-base font-semibold">
            {singleTaskData ? "Edit" : "Add"} Task
          </h2>
          <button
            onClick={() => setOpenModal()}
            className="bg-bgColor h-6 w-6 rounded-md flex justify-center items-center"
          >
            <img src={CrossIcon} className="h-3 w-3" alt="" />
          </button>
        </div>
        <Formik
          initialValues={{
            name: singleTaskData ? singleTaskData?.name : "",
            start_date: singleTaskData
              ? new Date(singleTaskData?.start_date)
              : null,
            end_date: singleTaskData
              ? new Date(singleTaskData?.end_date)
              : null,
            status: singleTaskData ? singleTaskData?.status : "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting, handleChange }) => (
            <Form className="flex flex-col h-full">
              <section className="flex-1 overflow-y-auto ">
                <section className="my-7 grid grid-cols-2 gap-x-3 gap-y-4 px-5">
                  <div>
                    <InputField
                      label={"Task name"}
                      placeholder={"Enter Task name"}
                      type="text"
                      id={`name`}
                      name={`name`}
                      value={values?.name}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name={`name`}
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div>
                    <InputSelect
                      label={"Select member"}
                      placeholder="Select member"
                      onSelect={(val) => {
                        setFieldValue("status", val?.value);
                      }}
                      selected={
                        taskStatus?.filter(
                          (item) => item.value === values.status
                        )[0]
                      }
                      option={taskStatus}
                    />
                  </div>
                  <div>
                    <InputDate
                      selected={values.start_date}
                      placeholderText="Start date"
                      label="Start date"
                      id={`start_date`}
                      name={`start_date`}
                      onChange={(value) => {
                        setFieldValue("start_date", value);
                      }}
                    />
                    <ErrorMessage
                      name={`start_date`}
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div>
                    <InputDate
                      selected={values.end_date}
                      placeholderText="End date"
                      label="End date"
                      id={`end_date`}
                      name={`end_date`}
                      onChange={(value) => {
                        setFieldValue("end_date", value);
                      }}
                    />
                    <ErrorMessage
                      name={`end_date`}
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </section>
              </section>
              <section
                className={` bg-bgColor  justify-end px-[17px] py-[13px] flex gap-x-[15px] rounded-b-2xl`}
              >
                <Button onClick={() => setOpenModal()} text={"Cancel"} />
                <Button
                  type="submit"
                  text={`${singleTaskData ? "Edit" : "Add"} Task`}
                />
              </section>
            </Form>
          )}
        </Formik>
      </AsideModal>
    </>
  );
};

export default AddTaskModal;
