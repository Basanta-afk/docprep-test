interface IFormTitle {
  isRequired: boolean;
  title: string;
  withoutExtraOptions?: boolean;
}

const FormTitle = ({ isRequired, title, withoutExtraOptions = true }: IFormTitle) => {
  return (
    <>
      <div className={"pb-2 text-placeholder "}>
        {title}
        {withoutExtraOptions && (
          <span className={`${isRequired ? "text-red-500" : "text-gray-500 font-light"}`}>
            {isRequired ? " *" : " (Optional)"}
          </span>
        )}
      </div>
    </>
  );
};

export default FormTitle;
