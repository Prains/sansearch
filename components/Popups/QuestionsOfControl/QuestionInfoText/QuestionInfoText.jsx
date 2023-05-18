const QuestionInfoText = ({ children }) => {
  return (
    <p className="hidden text-[16px] mb-[10px] text-white-black text-center md:flex  lg:text-[18px] lg:text-start lg:text-full-black">
      {children}
    </p>
  );
};

export default QuestionInfoText;
