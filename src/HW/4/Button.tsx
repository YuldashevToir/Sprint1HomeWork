type ButtonPropsType = {
  callBack: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ done
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ done
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.callBack() // НУЖНО ДОПИСАТЬ done
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
