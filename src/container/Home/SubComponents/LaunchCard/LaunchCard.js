import React from "react";
import './LaunchCard.css';

const LaunchCard = props => {
    return (
        <div className="LaunchCard">
            <img src={props.links.mission_patch_small} alt={props.mission_name} />
            <div className="LaunchCardDetails">
                <p className="mission-name">{props.mission_name} #{props.flight_number} </p>
                <p className="detail-heading"><b>Mission Ids:</b></p>
                {props.mission_id.length > 0 && <ul>
                    {props.mission_id.map(missionId => 
                        <li key={missionId}>
                            <p className="detail-heading">{missionId}</p>
                        </li>
                    )}
                </ul>}
                <p className="detail-heading"><b>Launch Year:</b> {props.launch_year}</p>
                <p className="detail-heading"><b>Successful Launch:</b> {props.launch_success ? 'True' : 'False'}</p>
                <p className="detail-heading"><b>Successful Landing:</b> {props.landing_success ? 'True' : 'False' }</p >
            </div>
        </div>
    )
}

export default LaunchCard;