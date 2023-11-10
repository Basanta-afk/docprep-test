export const setsDTO = {
  oldQuestions: (data: any) => {
    console.log(data);
    return {
      fullMarks: null,
      totalQuestion: null,
      //   examBoard: data?.examBoard,
      //   examId: data?.examId,
      hours: data?.hours,
      year: data?.year,
      month: data?.month,
      examTypes: "OLD",
    };
  },
  chapterQuestions: (data: any) => {
    return {
      subject: data?.subject,
      chapter: data?.chapter,
    };
  },
};
