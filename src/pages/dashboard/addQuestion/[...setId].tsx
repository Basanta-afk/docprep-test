import { APIGetAllChapters } from "@/apis/chapter/chapter";
import { APIPostQuestions } from "@/apis/questions/question";
import { APIGetAllSubjects } from "@/apis/subject/subject";
import TextEditor from "@/components/common/TextEditor";
import CommonSelect from "@/components/common/form/CommonSelect";
import { questionsDTO } from "@/utils/formatters/questionsDTO";
import showNotify from "@/utils/notify";
import { Button, Group, Radio } from "@mantine/core";
import { AlertCircle, Search } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Index = () => {
  const [correctOption, setCorrectOption] = useState("option1");

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [subject, setSubject] = useState([]);
  const [chapter, setChapter] = useState([]);
  const router = useRouter();
  const { query } = router;
  const id = query?.setId ? query.setId[0] : null;

  useEffect(() => {
    console.log(id);
  }, [id]);

  const {
    control,
    getValues,
    watch,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    defaultValues: {
      questionType: "",
      subject: "",
      chapter: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      reason: "",
    },
    mode: "onChange",
  });

  const selectedSubject = watch("subject");

  const getSubjects = async () => {
    try {
      const examSubjectData = await APIGetAllSubjects();
      setSubject(examSubjectData);

      const firstExamSubjectId =
        examSubjectData.length > 0 ? examSubjectData[0].id : "";
      setValue("chapterQuestions.subject", firstExamSubjectId);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getChapterName = async (subjectId: string) => {
    try {
      const chapterNameData = await APIGetAllChapters(subjectId);
      setChapter(chapterNameData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedSubject) {
      setValue("chapter", "");
      getChapterName(selectedSubject);
    }
  }, [selectedSubject]);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      console.log(data, correctOption);

      const formData = questionsDTO.addQuestions(data, correctOption, id);
      const res = await APIPostQuestions(formData);
      console.log(formData);
    } catch (error) {
      setLoading(false);
      showNotify("error", "Unable to add Question...");
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <main className="grid grid-cols-2 gap-4 bg-[#EFF0F6] p-5 h-[100vh]">
      <form className=" bg-white  p-3" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex justify-between pt-2">
          <div className="flex justify-center items-center px-2">
            Add Question
          </div>
          <div>
            <Button className="bg-[#164E99]" type="submit">
              Add Question
            </Button>
          </div>
        </section>
        <section className="grid grid-cols-3 pt-3">
          <div>
            <Controller
              name={"questionType"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }: any) => (
                <CommonSelect
                  placeholder="Question type"
                  data={["OLD", "NEW"]}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name={"subject"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }: any) => (
                <CommonSelect
                  placeholder="Subject"
                  data={subject?.map((option: any) => ({
                    value: option.id,
                    label: option.name,
                  }))}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name={"chapter"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }: any) => (
                <CommonSelect
                  placeholder="Chapter"
                  data={chapter?.map((option: any) => ({
                    value: option.id,
                    label: option.name,
                  }))}
                  {...field}
                />
              )}
            />
          </div>
        </section>
        <section className="pt-3">
          <Controller
            name={"question"}
            control={control}
            defaultValue={""}
            rules={{
              required: "Required",
            }}
            render={({ field: { value, onChange } }) => (
              <TextEditor
                placeholder="Question"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </section>

        <div className="flex py-3">
          <div className="bg-[#ffebcf] flex justify-center items-center px-2 py-1">
            <AlertCircle color="#DB880D" />
          </div>
          <div className="bg-[#ffebcf] text-[#DB880D] flex justify-center items-center pr-2">
            Tick the correct Option
          </div>
        </div>

        <Radio.Group
          className="pt-3"
          value={correctOption}
          onChange={setCorrectOption}
        >
          <Group className="grid grid-cols-2">
            <div className="flex w-full">
              <div className="px-2">
                <Radio value="option1" />
              </div>
              <div className="w-full h-[10rem]">
                <Controller
                  name={"option1"}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field: { value, onChange } }) => (
                    <TextEditor
                      placeholder="Option 1"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="px-2">
                <Radio value="option2" />
              </div>
              <div className="w-full h-[10rem]">
                <Controller
                  name={"option2"}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field: { value, onChange } }) => (
                    <TextEditor
                      placeholder="Option 2"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="px-2">
                <Radio value="option3" />
              </div>
              <div className="w-full h-[10rem]">
                <Controller
                  name={"option3"}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field: { value, onChange } }) => (
                    <TextEditor
                      placeholder="Option 3"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="px-2">
                <Radio value="option4" />
              </div>
              <div className="w-full h-[10rem]">
                <Controller
                  name={"option4"}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field: { value, onChange } }) => (
                    <TextEditor
                      placeholder="Option 4"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
          </Group>
        </Radio.Group>
        <section className="pt-5">
          <Controller
            name={"reason"}
            control={control}
            defaultValue={""}
            rules={{
              required: "Required",
            }}
            render={({ field: { value, onChange } }) => (
              <TextEditor
                placeholder="Reason"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </section>
      </form>
      <section className="grid grid-cols-2 gap-4">
        <section className="col-span-2">
          <iframe
            src="https://damipasal.s3.ap-south-1.amazonaws.com/1/LEGALDOCUMENTS/fb0f0350d7cd8427b05554ed5a67a541.pdf"
            className="h-full w-full"
          />
        </section>
        <section className=" bg-white">
          <div className="flex justify-between p-5">
            <div>Added Questions</div>
            <div className="flex justify-center items-center">
              <Search />
            </div>
          </div>
        </section>
        <section className=" bg-white">
          <div className="flex justify-between p-5">
            <div>Documents</div>
            <div className="flex justify-center items-center">Documents</div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Index;
