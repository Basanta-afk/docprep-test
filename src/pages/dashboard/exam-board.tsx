import {
  APIAddChapters,
  APIAddExam,
  APIAddExamBoard,
  APIAddSubject,
  APIGetAllExamBoards,
  APIGetRelatedExams,
  APIGetRelatedSubjects,
} from "@/apis/exam/examBoard";
import CommonButton from "@/components/common/form/CommonButton";
import CommonTextField from "@/components/common/form/CommonTextField";
import DashboardLayout from "@/layouts/DashboardLayout";
import showNotify from "@/utils/notify";
import { Tabs } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Accordion } from "@mantine/core";
import { APIGetRelatedChapters } from "@/apis/subject/subject";

const ExamBoard = () => {
  const [data, setData] = useState<any>([]);
  const [selectedTab, setSelectedTab] = useState<any>("");
  const [selectedExam, setSelectedExam] = useState<any>("");
  const [selectedSubject, setSelectedSubject] = useState<any>("");

  const [exams, setExams] = useState<any>([]);
  const [subjects, setSubjects] = useState<any>([]);
  const [chapter, setChapter] = useState<any>([]);

  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  }: any = useForm<any>({
    defaultValues: {
      examBoard: {
        name: "",
      },
      exam: {
        name: "",
      },
      subject: {
        name: "",
      },
      chapter: {
        name: "",
      },
    },
    mode: "onChange",
  });
  const onSubmitExamBoard = async (values: any) => {
    try {
      await APIAddExamBoard(values?.examBoard);

      setValue("examBoard.name", "");

      getAllBoardData();
      showNotify("success", "Board Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitExam = async (values: any) => {
    try {
      await APIAddExam(selectedTab, values?.exam);

      setValue("exam.name", "");
      getSelectedExam();
      showNotify("success", "Exam Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitSubject = async (values: any) => {
    try {
      await APIAddSubject(values?.subject);

      setValue("subject.name", "");
      getSelectedExamSubject();
      showNotify("success", "Subject Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitChapter = async (values: any) => {
    try {
      await APIAddChapters(selectedSubject, values?.chapter);

      setValue("chapter.name", "");
      getSelectedSubjectChapter();
      showNotify("success", "Chapter Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const getAllBoardData = async () => {
    try {
      const res = await APIGetAllExamBoards();

      setData(res);
      setSelectedTab(res[0]?.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedExam = async () => {
    try {
      const res = await APIGetRelatedExams(selectedTab);

      setExams(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedExamSubject = async () => {
    try {
      const res = await APIGetRelatedSubjects();

      setSubjects(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedSubjectChapter = async () => {
    try {
      const res = await APIGetRelatedChapters(selectedSubject);

      setChapter(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      getAllBoardData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (selectedTab) {
      getSelectedExam();
    }
  }, [selectedTab]);

  useEffect(() => {
    if (selectedExam) {
      getSelectedExamSubject();
    }
  }, [selectedExam]);

  useEffect(() => {
    if (selectedSubject) {
      getSelectedSubjectChapter();
    }
  }, [selectedSubject]);

  return (
    <main className="grid">
      <section className="flex justify-between">
        <p>Exam Board</p>

        {/* <form onSubmit={handleSubmit(onSubmitExamBoard)}>
          <div className="flex gap-2">
            <Controller
              name="examBoard.name"
              rules={{
                required: "Board name is required",
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: "invalid email address",
                // },
              }}
              control={control}
              render={({ field }: any) => (
                <CommonTextField
                  {...field}
                  type="text"
                  width={200}
                  placeholder="Enter Board Name"
                  error={errors.examBoard?.name?.message}
                />
              )}
            />
            <CommonButton type="submit">Add Board</CommonButton>
          </div>
        </form> */}
      </section>
      <section>
        <Tabs
          value={selectedTab?.toString()}
          onTabChange={(e) => setSelectedTab(e)}
        >
          <Tabs.List>
            {data?.map((val: any) => (
              <Tabs.Tab value={val?.id?.toString()} key={val?.id}>
                {val?.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>

        {exams && (
          <>
            <section className="flex justify-end p-3">
              {/* <form onSubmit={handleSubmit(onSubmitExam)}>
                <div className="flex gap-2">
                  <Controller
                    name="exam.name"
                    rules={{
                      required: "Exam name is required",
                      // pattern: {
                      //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      //   message: "invalid email address",
                      // },
                    }}
                    control={control}
                    render={({ field }: any) => (
                      <CommonTextField
                        {...field}
                        type="text"
                        width={200}
                        placeholder="Enter Exam Name"
                        error={errors.exam?.name?.message}
                      />
                    )}
                  />
                  <CommonButton type="submit">Add Exam</CommonButton>
                </div>
              </form> */}
            </section>
            {exams?.map((val: any) => (
              <Accordion
                key={val?.id}
                onChange={(e) => setSelectedExam(e)}
                value={selectedExam}
              >
                <Accordion.Item value={val?.id?.toString()}>
                  <Accordion.Control>{val?.name}</Accordion.Control>

                  <Accordion.Panel>
                    <section className="flex justify-end p-3">
                      <form onSubmit={handleSubmit(onSubmitSubject)}>
                        <div className="flex gap-2">
                          <Controller
                            name="subject.name"
                            rules={{
                              required: "Subject name is required",
                              // pattern: {
                              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              //   message: "invalid email address",
                              // },
                            }}
                            control={control}
                            render={({ field }: any) => (
                              <CommonTextField
                                {...field}
                                type="text"
                                width={200}
                                placeholder="Enter Subject Name"
                                error={errors.subject?.name?.message}
                              />
                            )}
                          />
                          <CommonButton type="submit">Add Subject</CommonButton>
                        </div>
                      </form>
                    </section>
                    {subjects?.map((subject: any) => (
                      <Accordion
                        key={subject?.id}
                        onChange={(e) => setSelectedSubject(e)}
                        value={selectedSubject}
                      >
                        <Accordion.Item value={subject?.id?.toString()}>
                          <Accordion.Control>{subject?.name}</Accordion.Control>

                          <Accordion.Panel className="px-5">
                            <section className="flex justify-end p-3">
                              {/* <form onSubmit={handleSubmit(onSubmitChapter)}>
                                <div className="flex gap-2">
                                  <Controller
                                    name="chapter.name"
                                    rules={{
                                      required: "Chapter name is required",
                                      // pattern: {
                                      //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      //   message: "invalid email address",
                                      // },
                                    }}
                                    control={control}
                                    render={({ field }: any) => (
                                      <CommonTextField
                                        {...field}
                                        type="text"
                                        width={200}
                                        placeholder="Enter Chapter Name"
                                        error={errors.chapter?.name?.message}
                                      />
                                    )}
                                  />
                                  <CommonButton type="submit">
                                    Add Chapters
                                  </CommonButton>
                                </div>
                              </form> */}
                            </section>
                            {chapter?.map((val: any) => (
                              <div key={val?.id}>{val?.name}</div>
                            ))}
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    ))}
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            ))}
          </>
        )}
      </section>
    </main>
  );
};

ExamBoard.Layout = DashboardLayout;
export default ExamBoard;
