import './Input.css'

function Input({ nameList }) {

  return (
    <div className="Input">
      {nameList.map((e, index) => <input placeholder={e} key={index} />)}
    </div>
  );
}

export default Input;