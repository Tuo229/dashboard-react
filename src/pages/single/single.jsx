import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Tables from '../../components/table/Table';
import { ProductRows } from '../../datatablesource';

const Single = () => {

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                                alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">TUO Navigué</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">tuo@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+225 0759190121</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Abidjan, Port-Bouet</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Countru:</span>
                                    <span className="itemValue">Côte d'Ivoire</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions </h1>
                    <Tables rows={ProductRows} />
                </div>
            </div>
        </div>
    )
}

export default Single 