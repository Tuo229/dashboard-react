import './listproduct.scss';

import { DataGrid} from '@mui/x-data-grid';
import { productColumns, ProductRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const ListProduct = ({title}) => {
    
    const [data, setData] = useState(ProductRows)

    const handleDelete = id => {
        setData(data.filter(item=> (item.id !== id)));
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action", 
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                         <Link to="/users/test" style={{textDecoration: "none"}}>
                            <div className='viewButton'>
                                View
                            </div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="datatable">
            <div className="datatableTitle">
                {title}
                <Link to="/products/new" style={{textDecoration: "none"}} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={productColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}


export default ListProduct