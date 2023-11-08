import TextEditor from "@/components/common/TextEditor";
import CommonSelect from "@/components/common/form/CommonSelect";
import showNotify from "@/utils/notify";
import { Button, Group, Radio } from "@mantine/core";
import { AlertCircle, Search } from "lucide-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const index = () => {
  const [data, setData] = useState("option1");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const router = useRouter();
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
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      router.back();
    } catch (error) {
      setLoading(false);
      showNotify("error", "Unable to add Question...");
    }
  };
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
              render={({ field: { value, onChange } }) => (
                <CommonSelect
                  placeholder="Question type"
                  data={["React", "Angular", "Vue", "Svelte"]}
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
              render={({ field: { value, onChange } }) => (
                <CommonSelect
                  placeholder="Subject"
                  data={["React", "Angular", "Vue", "Svelte"]}
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
              render={({ field: { value, onChange } }) => (
                <CommonSelect
                  placeholder="Chapter"
                  data={["React", "Angular", "Vue", "Svelte"]}
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
              <TextEditor placeholder="Question" />
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

        <Radio.Group className="pt-3" value={data} onChange={setData}>
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
                    <TextEditor placeholder="Option 1" />
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
                    <TextEditor placeholder="Option 2" />
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
                    <TextEditor placeholder="Option 3" />
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
                    <TextEditor placeholder="Option 4" />
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
              <TextEditor placeholder="Reason" />
            )}
          />
        </section>
      </form>
      <section className="grid grid-cols-2 gap-4">
        <section className="col-span-2">
          <embed
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

export default index;
