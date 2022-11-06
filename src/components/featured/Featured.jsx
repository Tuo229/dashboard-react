import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";

const Featured = () => {

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transactions processing. Last payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        
                        <div className="itemResult negative">
                            <ExpandMoreIcon fontSize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last week</div>
                        
                        <div className="itemResult positive">
                            <ExpandLessIcon fontSize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last month</div>
                        
                        <div className="itemResult positive">
                            <ExpandLessIcon fontSize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured