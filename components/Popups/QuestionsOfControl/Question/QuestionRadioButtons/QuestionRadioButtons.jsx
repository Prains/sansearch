const QuestionRadioButtons = ({ answers, value, setValue }) => {
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className="flex flex-col basis-[30%] justify-around h-[100px] mx-auto order-2 md:order-3 md:ml-[30px] md:basis-[100%]">
      {answers.map((answer) => (
        <label
          key={answer.id}
          className="text-[18px] cursor-pointer lg:text-[24px]"
        >
          <input
            className="mr-[10px] cursor-pointer lg:mr-[15px]"
            type="radio"
            checked={value === answer.value}
            onChange={() => handleChange(answer.value)}
          />
          {answer.label}
        </label>
      ))}
    </div>
  );
};

export default QuestionRadioButtons;
