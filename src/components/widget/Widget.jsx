import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyFrancOutlinedIcon from '@mui/icons-material/CurrencyFrancOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import './widget.scss'

const  Widget = ({type}) => {

    let data;

    // temporary

    const amount = 1500
    const diff = 20


    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)"
                    }}
                />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartIcon className='icon'
                style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218, 165, 32, 0.2)"
                }}
                />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earning",
                icon: <CurrencyFrancOutlinedIcon className='icon'
                style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)"
                }}
                />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <BalanceOutlinedIcon className='icon'
                style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)"
                }}
                />
            };
            break;
        default:
            break;
    }



    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget