interface IProps {
  register: any;
  errors: any;
  title: string;
  isNumber?: boolean; // QUESTION -- is this the right way to make sure only provides number if required
}

const Input = ({ register, errors, title, isNumber = false }: IProps) => {
  return (
    <div className="mb-3">
      {/* QUESTION -- what does htmlFor and input do?? */}
      <label htmlFor={title} className="form-label">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
      <input
        {...register(title, { valueAsNumber: isNumber })} // QUESTION -- what does register do?? Does it replace value & onChange for React?
        id={title}
        type="text"
        className="form-control"
      />
      {errors && <p className="text-danger">{errors.message}</p>}
    </div>
  );
};

export default Input;
