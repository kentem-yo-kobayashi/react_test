import { ChangeEventHandler } from "react";

const InputComp = ({
  labelText,
  valueState,
  stateChangeFunc,
}: {
  labelText: string;
  valueState: string;
  stateChangeFunc: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="label-input">
      <label className="label">{labelText}</label>
      <input
        className="input"
        placeholder="入力してください"
        value={valueState}
        onChange={(e) => stateChangeFunc(e)}
      ></input>
    </div>
  );
};

export default InputComp;
