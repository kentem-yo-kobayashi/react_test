import { ChangeEventHandler } from 'react';

type Props = {
  labelText: string;
  valueState: string;
  stateChangeFunc: ChangeEventHandler<HTMLInputElement>;
};

const InputComp = ({ labelText, valueState, stateChangeFunc }: Props) => {
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
