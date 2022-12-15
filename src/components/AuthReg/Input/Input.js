import './Input.css'

function Input({nameList}) {
  
    return (
      <div className="Input">
        {nameList.map(e=><input placeholder={e}/>)}
        
      </div>
    );
  }
  
  export default Input;