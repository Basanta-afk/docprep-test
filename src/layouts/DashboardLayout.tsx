import { APIGetAllChapters } from "@/apis/chapter/chapter";
import { APICreateSets } from "@/apis/exam/createSet";
import { APIGetAllExamBoards } from "@/apis/exam/examBoard";
import { APIGetAllExamName } from "@/apis/exam/examName";
import { APIGetAllSubjects } from "@/apis/subject/subject";
import CommonButton from "@/components/common/form/CommonButton";
import Logo from "@/components/partials/Logo";
import { tableRow } from "@/utils/constants/tabledata";
import { setsDTO } from "@/utils/formatters/setDTO";
import {
  AppShell,
  Button,
  Header,
  Modal,
  Navbar,
  Select,
  Tabs,
  TabsProps,
  rem,
} from "@mantine/core";
import Link from "@tiptap/extension-link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const DashboardLayout = ({ children }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [openSetBox, setOpenSetBox] = useState(false);
  const [examBoard, setExamBoard] = useState([]);
  const [examName, setExamName] = useState([]);

  const [subject, setSubject] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [activeTab, setActiveTab] = useState("old-questions");

  const handleTabChange = (value: any) => {
    setActiveTab(value);
    if (value === "chapter-wise-questions") {
      router.push("/dashboard/addQuestion/0");
    }
  };

  const YEARS = Array.from({ length: 31 }, (_, index) =>
    (2085 - index).toString()
  );
  const MONTHS = [
    { value: "1", label: "Baisakh" },
    { value: "2", label: "Jestha" },
    { value: "3", label: "Ashadh" },
    { value: "4", label: "Shrawan" },
    { value: "5", label: "Bhadra" },
    { value: "6", label: "Ashwin" },
    { value: "7", label: "Kartik" },
    { value: "8", label: "Mangsir" },
    { value: "9", label: "Poush" },
    { value: "10", label: "Magh" },
    { value: "11", label: "Falgun" },
    { value: "12", label: "Chaitra" },
  ];
  const hours = ["1", "2", "3", "4", "5"];
  const minutes = [
    "5",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "60",
  ];
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  }: any = useForm<any>({
    defaultValues: {
      boardQuestions: {
        examId: "",
        examBoard: "",
        year: "",
        month: "",
        hours: "",
        minutes: "",
      },
      chapterQuestions: {
        subject: "",
        chapter: "",
      },
    },
    mode: "onChange",
  });

  const selectedExamBoard = watch("boardQuestions.examBoard");

  // const selectedSubject = watch("chapterQuestions.subject");

  useEffect(() => {
    if (selectedExamBoard) {
      setValue("boardQuestions.examId", "");
      getExamName(selectedExamBoard);
    }
  }, [selectedExamBoard]);

  // useEffect(() => {
  //   if (selectedSubject) {
  //     setValue("chapterQuestions.chapter", "");
  //     getChapterName(selectedSubject);
  //   }
  // }, [selectedSubject]);

  const getExamBoard = async () => {
    try {
      const examBoardData = await APIGetAllExamBoards();
      setExamBoard(examBoardData);

      const firstExamBoardId =
        examBoardData.length > 0 ? examBoardData[0].id : "";
      setValue("boardQuestions.examBoard", firstExamBoardId);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const getSubject = async () => {
  //   try {
  //     const examSubjectData = await APIGetAllSubjects();
  //     setSubject(examSubjectData);

  //     const firstExamSubjectId =
  //       examSubjectData.length > 0 ? examSubjectData[0].id : "";
  //     setValue("chapterQuestions.subject", firstExamSubjectId);

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getExamName = async (examBoardId: string) => {
    try {
      const examNameData = await APIGetAllExamName(examBoardId);
      setExamName(examNameData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const getChapterName = async (subjectId: string) => {
  //   try {
  //     const chapterNameData = await APIGetAllChapters(subjectId);
  //     setChapter(chapterNameData);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getExamBoard();
    // getSubject();
  }, []);

  const onSubmit = async (data: any) => {
    if (activeTab === "old-questions") {
      const formData = setsDTO.oldQuestions(data?.boardQuestions);
      const examId = data?.boardQuestions?.examId;
      console.log(examId);

      const res = await APICreateSets(examId, formData);
      if (res) {
        router.push(`/dashboard/addQuestion/${res?.id}`);
      }
    } else if (activeTab === "chapter-wise-questions") {
      router.push("/dashboard/addQuestion/0");

      console.log(data?.chapterQuestions);
    }
  };

  console.log(errors);

  return (
    <AppShell
      header={
        <Header
          height={70}
          p="md"
          className="flex items-center justify-between dynamic-x-padding"
        >
          <section
            className="hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
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
      <Modal
        opened={openSetBox}
        onClose={() => setOpenSetBox(false)}
        title="Add set"
        size={750}
      >
        <div className="flex flex-col justify-start px-10 font-semibold">
          <Tabs
            value={activeTab}
            onTabChange={(v) => handleTabChange(v)}
            unstyled
            styles={(theme) => ({
              tab: {
                // ...theme.fn.focusStyles(),
                backgroundColor:
                  theme.colorScheme === "dark" ? "" : theme.colors.white,
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
              <Tabs.Tab
                value="chapter-wise-questions"
                className="w-full font-semibold"
              >
                Chapter Wise Questions
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="old-questions">
              {activeTab !== "chapter-wise-questions" && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="px-16 h-72">
                    <div className="flex justify-between mb-5 mt-6 gap-10">
                      <label className="w-[20%] text-base">Exam Board</label>
                      <Controller
                        name="boardQuestions.examBoard"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field }: any) => (
                          <Select
                            {...field}
                            data={examBoard?.map((option: any) => ({
                              value: option.id,
                              label: option.name,
                            }))}
                            placeholder="IOM, MOE, KUET"
                            className="w-[80%]"
                            error={errors?.boardQuestions?.examBoard?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="flex justify-between mb-5 mt-6 gap-10">
                      <label className="w-[20%] text-base">Exam Name</label>
                      <Controller
                        name="boardQuestions.examId"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field }: any) => (
                          <Select
                            {...field}
                            data={examName?.map((option: any) => ({
                              value: option.id,
                              label: option.name,
                            }))}
                            placeholder="Entrance, First Term, Mid Term, Final"
                            className="w-[80%]"
                            error={errors?.boardQuestions?.examId?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="flex justify-between mb-5 mt-6 gap-10">
                      <label className="w-[20%] text-base">Exam Period</label>
                      <div className="w-[80%] flex gap-3">
                        <Controller
                          name="boardQuestions.year"
                          control={control}
                          rules={{ required: "required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              data={YEARS}
                              placeholder="Year"
                              className="w-[80%]"
                              searchable
                              nothingFound="No options"
                              maxDropdownHeight={150}
                              error={errors?.boardQuestions?.year?.message}
                            />
                          )}
                        />
                        <Controller
                          name="boardQuestions.month"
                          control={control}
                          rules={{ required: "required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              data={MONTHS}
                              placeholder="Month"
                              className="w-[80%]"
                              searchable
                              nothingFound="No options"
                              maxDropdownHeight={150}
                              error={errors?.boardQuestions?.month?.message}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mb-5 gap-10">
                      <label className="w-[20%] text-base">Time</label>
                      <div className="w-[80%] flex gap-3">
                        <Controller
                          name="boardQuestions.hours"
                          control={control}
                          rules={{ required: "required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              data={hours}
                              placeholder="Hours"
                              className="w-[80%]"
                              searchable
                              nothingFound="No options"
                              maxDropdownHeight={150}
                              error={errors?.boardQuestions?.hours?.message}
                            />
                          )}
                        />
                        <Controller
                          name="boardQuestions.minutes"
                          control={control}
                          rules={{ required: "required" }}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              data={minutes}
                              placeholder="Minutes"
                              className="w-[80%]"
                              searchable
                              nothingFound="No options"
                              maxDropdownHeight={150}
                              error={errors?.boardQuestions?.minutes?.message}
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
              )}
            </Tabs.Panel>
            <Tabs.Panel value="chapter-wise-questions">
              {/* {activeTab !== "old-questions" && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="px-16 h-72">
                    <div className="flex justify-between mb-5 mt-6 gap-10">
                      <label className="w-[20%] text-base">Subject</label>
                      <Controller
                        name="chapterQuestions.subject"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field }) => (
                          <Select
                            {...field}
                            data={subject?.map((option: any) => ({
                              value: option.id,
                              label: option.name,
                            }))}
                            placeholder="Physics, Chemistry , Botany"
                            className="w-[80%]"
                            error={errors?.chapterQuestions?.subject?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="flex justify-between mb-5 mt-6 gap-10">
                      <label className="w-[20%] text-base">Chapter</label>
                      <Controller
                        name="chapterQuestions.chapter"
                        control={control}
                        rules={{ required: "required" }}
                        defaultValue=""
                        render={({ field }) => (
                          <Select
                            {...field}
                            data={chapter?.map((option: any) => ({
                              value: option.id,
                              label: option.name,
                            }))}
                            placeholder="Mechanics, Modern Physics, ..."
                            className="w-[80%]"
                            error={errors?.chapterQuestions?.chapter?.message}
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
              )} */}
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
