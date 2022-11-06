import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import ListProduct from '../../components/listproduct/ListProduct'



const List = ({type}) => {

    if (type == "product"){
        return (
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    
                    <ListProduct title="Product List"/>
                </div>
            </div>
        )
    }else {
        return (
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    
                    <Datatable title="User List"/>
                </div>
            </div>
        )
    }

    
}

export default List 