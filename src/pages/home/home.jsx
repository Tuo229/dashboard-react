import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Tables from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'
import { ProductRows } from '../../datatablesource';

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" /> 
                    <Widget type="order" /> 
                    <Widget type="earning" /> 
                    <Widget type="balance" /> 
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Last six months (Revenue) (Stoped at 1:224:16)"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <Tables rows={ProductRows}/>
                </div>
            </div>
        </div>
    )
}

export default Home 