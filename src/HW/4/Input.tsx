import { ChangeEvent } from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ done
	setCurrentText: (value:string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ done
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
		// НУЖНО ДОПИСАТЬ done
		props.setCurrentText(event.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
