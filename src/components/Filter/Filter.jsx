import css from "./Filter.module.css";
export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
