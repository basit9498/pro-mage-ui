import React, { useEffect, useState } from "react";
import AsideModal from "../AsideModal";
import CrossIcon from "../../assets/image/cross.svg";
import InputField from "../From-inputs/InputField";
import InputSelect from "../From-inputs/InputSelect";
import InputDate from "../From-inputs/InputDate";
import Button from "../Button";
import { Formik, Form, ErrorMessage } from "formik";
import { projectValidationSchema } from "../../validation/project.validation";
import {
  createProjectAPI,
  updateProjectAPI,
} from "../../services/project.service";
import toast from "react-hot-toast";
import { toastErrorDisplay } from "../../helper/toastErrorDisplay";
import { getMangersAPI } from "../../services/user.service";
import TextAreaField from "../From-inputs/TextareaField";

const AddProjectModal = ({
  openModal,
  setOpenModal,
  apiCall,
  singleProjectData,
}) => {
  const [userManagers, setUserManagers] = useState([]);

  useEffect(() => {
    getMangers();
  }, []);

  const getMangers = async () => {
    try {
      const res = await getMangersAPI();
      setUserManagers(
        res?.users?.map((user) => {
          return { value: user?._id, label: user?.name };
        })
      );
    } catch (err) {
      toastErrorDisplay(err);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let res = null;
      if (singleProjectData) {
        const payload = {
          id: singleProjectData?._id,
          name: values?.name,
          description: values?.description,
          start_date: values?.start_date,
          end_date: values?.end_date,
          managerId: values?.id,
        };
        res = await updateProjectAPI(payload);
      } else {
        res = await createProjectAPI(values);
      }
      toast.success(res.message);
      apiCall();
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
            {singleProjectData ? "Edit" : "Add"} Project
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
            id: singleProjectData ? singleProjectData?.manager._id : "",
            name: singleProjectData?.name || "",
            description: singleProjectData
              ? singleProjectData?.description
              : "",
            start_date: singleProjectData
              ? new Date(singleProjectData?.start_date)
              : null,
            end_date: singleProjectData
              ? new Date(singleProjectData?.end_date)
              : null,
          }}
          // validationSchema={projectValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting, handleChange }) => (
            <Form className="flex flex-col h-full">
              <section className="flex-1 overflow-y-auto ">
                <section className="my-7 grid grid-cols-2 gap-x-3 gap-y-4 px-5">
                  <div>
                    <InputField
                      label={"Project name"}
                      placeholder={"Enter Project name"}
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
                        setFieldValue("id", val?.value);
                      }}
                      selected={
                        userManagers?.filter(
                          (item) => item.value === values.id
                        )[0]
                      }
                      option={userManagers}
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
                  <div className="col-span-2">
                    <TextAreaField
                      name="description"
                      id="description"
                      value={values?.description}
                      onChange={handleChange}
                      placeholder={"Enter description"}
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
                  text={`${singleProjectData ? "Edit" : "Add"}  project`}
                />
              </section>
            </Form>
          )}
        </Formik>
      </AsideModal>
    </>
  );
};

export default AddProjectModal;
