import './AuthReg.css'
import regIcon from '../../assets/img/AuthImg/reg.png'
import logIcon from '../../assets/img/AuthImg/log.png'
import Input from './Input/Input'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useState } from 'react'
function AuthReg({type,setType}){

   

    const nameList= type=='reg'?['Email','Username','Password',]:['Username','Password']
    return(
        <div className="AuthReg-body">
            <Header type={type}/>
            <Input nameList={nameList}/>
            <Footer type={type} setType={setType}/>
        </div>
    )
}

function Img({type}){
    console.log(type)
    return(
        <div className='Img'>
            <img  src={type=='reg'?regIcon:logIcon}/>
        </div>
    )
}

function AuthRegContainer({initial}) {

    const [type,setType]=useState(initial)
  
    return (
      <div className="AuthReg">
        <AuthReg type={type} setType={setType}/>
        <Img type={type}/>
      </div>
    );
  }
  
  export default AuthRegContainer;