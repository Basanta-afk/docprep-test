import CommonButton from "@/components/common/form/CommonButton";
import Logo from "@/components/partials/Logo";
import { tableRow } from "@/utils/constants/tabledata";
import { AppShell, Button, Header, Modal, Navbar, Select, Tabs, TabsProps, rem } from "@mantine/core";
import Link from "@tiptap/extension-link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const DashboardLayout = ({ children }: any) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [openSetBox, setOpenSetBox] = useState(false);
  const hours = ["1", "2", "3"];
  const minutes = ["1", "2", "3", "4"];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      examId: "",
      examBoard: "",
      year: "",
      month: "",
      hours: "",
      minutes: "",
      subject: "",
      chapter: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <AppShell
      header={
        <Header height={70} p="md" className="flex items-center justify-between dynamic-x-padding">
          <section className="hover:cursor-pointer" onClick={() => router.push("/")}>
            {/* <Logo height={50} width={200} /> */}
            <Logo height={50} width={200} />
          </section>
        </Header>
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ xs: "100vw", sm: 200, lg: 300 }}
          className={" transition-transform bg-opacity-96"}
        >
          <h1 className="text-lg text-title-active mb-10 text-center">Home</h1>
          <div onClick={() => setOpenSetBox(!openSetBox)}>
            <CommonButton>Add set</CommonButton>
          </div>
        </Navbar>
      }
      style={{
        backgroundColor: "#EFF0F6",
      }}
    >
      <Modal opened={openSetBox} onClose={() => setOpenSetBox(false)} title="Add set" size={750}>
        <div className="flex flex-col justify-start px-10 font-semibold">
          <Tabs
            defaultValue="old-questions"
            unstyled
            styles={(theme) => ({
              tab: {
                // ...theme.fn.focusStyles(),
                backgroundColor: theme.colorScheme === "dark" ? "" : theme.colors.white,
                // color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
                border: theme.colors.gray,
                padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                cursor: "pointer",
                fontSize: theme.fontSizes.lg,
                alignItems: "center",
                "&[data-active]": {
                  backgroundColor: theme.fn.rgba("#228BE6", 0.1),
                  borderColor: theme.colors.blue[7],
                  color: "#164E99",
                },
              },
              tabIcon: {
                marginRight: theme.spacing.xs,
                display: "flex",
                alignItems: "center",
              },

              tabsList: {
                display: "flex",
                justifyContent: "center",
                gap: 6,
              },
            })}
            // className="flex justify-between"
          >
            <Tabs.List className="">
              <Tabs.Tab value="old-questions" className="w-full font-semibold">
                Old Questions
              </Tabs.Tab>
              <Tabs.Tab value="chapter-wise-questions" className="w-full font-semibold">
                Chapter Wise Questions
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="old-questions">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-16 h-72">
                  <div className="flex justify-between mb-5 mt-6 gap-10">
                    <label className="w-[20%] text-base">Exam Board</label>
                    <Controller
                      name="examBoard"
                      control={control}
                      rules={{ required: "required" }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Select
                          onChange={onChange}
                          value={value}
                          data={hours}
                          placeholder="IOM, MOE, KUET"
                          className="w-[80%]"
                          error={errors?.examBoard?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-between mb-5 mt-6 gap-10">
                    <label className="w-[20%] text-base">Exam Id</label>
                    <Controller
                      name="examId"
                      control={control}
                      rules={{ required: "required" }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Select
                          onChange={onChange}
                          value={value}
                          data={hours}
                          placeholder="Entrance, First Term, Mid Term, Final"
                          className="w-[80%]"
                          error={errors?.examId?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-between mb-5 mt-6 gap-10">
                    <label className="w-[20%] text-base">Exam Period</label>
                    <div className="w-[80%] flex gap-3">
                      <Controller
                        name="year"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <Select
                            onChange={onChange}
                            value={value}
                            data={hours}
                            placeholder="Year"
                            className="w-[80%]"
                            error={errors?.year?.message}
                          />
                        )}
                      />
                      <Controller
                        name="month"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <Select
                            onChange={onChange}
                            value={value}
                            data={hours}
                            placeholder="Month"
                            className="w-[80%]"
                            error={errors?.month?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-5 gap-10">
                    <label className="w-[20%] text-base">Time</label>
                    <div className="w-[80%] flex gap-3">
                      <Controller
                        name="hours"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <Select
                            onChange={onChange}
                            value={value}
                            data={hours}
                            placeholder="Hours"
                            className="w-[80%]"
                            error={errors?.hours?.message}
                          />
                        )}
                      />
                      <Controller
                        name="minutes"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <Select
                            onChange={onChange}
                            value={value}
                            data={minutes}
                            placeholder="Minutes"
                            className="w-[80%]"
                            error={errors?.minutes?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-16 flex justify-end gap-10">
                  <Button type="reset">Cancel</Button>
                  <Button type="submit">Create Set</Button>
                </div>
              </form>
            </Tabs.Panel>
            <Tabs.Panel value="chapter-wise-questions">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-16 h-72">
                  <div className="flex justify-between mb-5 mt-6 gap-10">
                    <label className="w-[20%] text-base">Subject</label>
                    <Controller
                      name="subject"
                      control={control}
                      rules={{ required: "required" }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Select
                          onChange={onChange}
                          value={value}
                          data={hours}
                          placeholder="Physics, Chemistry , Botany"
                          className="w-[80%]"
                          error={errors?.subject?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="flex justify-between mb-5 mt-6 gap-10">
                    <label className="w-[20%] text-base">Chapter</label>
                    <Controller
                      name="chapter"
                      control={control}
                      rules={{ required: "required" }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Select
                          onChange={onChange}
                          value={value}
                          data={hours}
                          placeholder="Mechanics, Modern Physics, ..."
                          className="w-[80%]"
                          error={errors?.chapter?.message}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="px-16 flex justify-end gap-10">
                  <Button type="reset">Cancel</Button>
                  <Button type="submit">Create Set</Button>
                </div>
              </form>
            </Tabs.Panel>
          </Tabs>

          {/* <section></section> */}
        </div>
      </Modal>
      <div className={"px-4 md:px-8 py-5 bg-white"}>{children}</div>
      {/* </div> */}
    </AppShell>
  );
};

export default DashboardLayout;
