export const questionsDTO = {
  addQuestions: (data: any, correctOption: any) => {
    const options = Array.from({ length: 4 }, (_, i) => {
      const optionName = `option${i + 1}`;
      return {
        option: data[optionName],
        isCorrect: optionName === correctOption,
        remarks: optionName === correctOption ? data.reason : "",
      };
    });

    return {
      questionTypes: data.questionType,
      question: data.question,
      chapter: {
        id: data.chapter,
      },
      set: {
        id: data.subject,
      },
      options: options,
    };
  },
};
