import './MainTitle.scss';
import {Link} from 'react-router-dom';
import {PATHS} from '../../../../utils/urls';

export const MainTitle = (props) => {

    const content = props.flowers.map(elem => <img src={elem.flower} alt={elem.desc}/>)

    return (
        <>
            <div className="main-title-container">
                <div className="main-title-text">
                    <h1 className="main-title-h2">
                        Flowers, 🌻
                        <br/> what the world needs{' '}
                    </h1>
                    <p className="main-title-p">Browse between hundreds of flowers</p>
                    <Link to={PATHS.shop}>
                        <button className="browse-btn">Browse</button>
                    </Link>
                </div>
                <div className="main-title-img">
                    {content}
                </div>
            </div>
        </>
    );
};
