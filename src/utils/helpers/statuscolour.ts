 export const GetStatusTextClass = (loanStatus: any) => {
  if (loanStatus === "NEW") {
    return "text-[#854EB5]";
  } else if (loanStatus === "REJECTED") {
    return "text-[#FF0000]";
  } else {
    return "text-[#00BA88]";
  }
};