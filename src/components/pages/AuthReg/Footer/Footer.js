import './Footer.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Footer({ type, setType }) {
    const [isCheck, setCheck] = useState(false)
    return (
        <div className="Footer">
            {type === 'reg' ?
                <div className='Footer-policeLOGIN'>
                    <div className='policeRemember' style={{ marginTop: type === 'reg' ? 45 : 23 }}>
                        <span className='black txt'>with registering your accepting our </span><span className='orange txt click'> terms </span><span className='black txt'>and </span><span className='orange txt click'>privacy <br /> policy</span>
                    </div>
                    <div className='button' style={{ marginTop: type === 'reg' ? 12 : 66 }}>
                        {type === 'reg' ? 'Register' : 'Login'}
                    </div>
                    <div style={{ marginTop: 75, marginBottom: 43 }}>
                        <span className='black txt'>Already have an account? </span><Link to='/login'><span className='orange txt click' onClick={() => setType('log')}>Login</span></Link>
                    </div>
                </div> :
                <div className='qa'>
                    <div className='containerRemember'>
                        <div className='check' onClick={() => setCheck(!isCheck)}>
                            {isCheck ? <div className='checked'></div> : null}

                        </div>
                        <div className='black txt remember' >Remember me</div>
                    </div>

                    <div className='button' style={{ marginTop: type === 'reg' ? 12 : 66 }}>
                        {type === 'reg' ? 'Register' : 'Login'}
                    </div>
                    <div style={{ marginTop: 73, marginBottom: 67 }}>
                        <span className='black txt'>dont have an account?</span><Link to='/registration'><span className='orange txt click' onClick={() => setType('reg')}> Register</span></Link>
                    </div>
                </div>}
        </div>
    );
}

export default Footer;