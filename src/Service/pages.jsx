// import logo from './logo.svg';
import './pages.css';
import Sidebar from "../components/sidebar/Sidebar"
import {getRoutes} from '../routes';

function Pagess() {
    return (
        <div >
            <Sidebar />
            <div className="pageContainer">
                {getRoutes()}
            </div>
        </div>

    );
}

export default Pagess;
