import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Layout.css';

const layout = props => (
    <div className="Layout">
        <Typography variant="h5" gutterBottom>
            SpaceX Launch Programs
        </Typography>
        <br/>
        {props.children}
        <footer className="footer">
            <p><b>Developed by:</b> Vishal Bajaj</p>
        </footer>
    </div>
)

export default layout;