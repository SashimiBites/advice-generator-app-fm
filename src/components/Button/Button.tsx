interface ButtonProps {
  content: JSX.Element;
  onBtnClick: () => void;
}

const Button = ({ content, onBtnClick }: ButtonProps) => {
  return (
    <button className='btn' onClick={onBtnClick}>
      {content}
    </button>
  )
}

export default Button;