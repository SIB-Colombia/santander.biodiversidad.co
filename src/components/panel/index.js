import React from 'react'
import "../../_styles/components/panel.scss"
import RadarComponent from "../chart/RadarComponent";
import GroupIconComponent from "../illustration/groupIcon";


const Panel = props => (
    <div className={`row VisualizationPanel panel ${props.loading ? `loading` : ` `}`}>
        {props.children}
    </div>

)

export default Panel