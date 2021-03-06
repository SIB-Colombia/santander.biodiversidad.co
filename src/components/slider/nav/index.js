import React,  { PureComponent } from 'react'
import "../../../_styles/components/slider.scss"


class SliderNav extends PureComponent {
    render () {
        return (
            <div
                className={`SliderNav ${this.props.direction}`}
                onClick={this.props.handleClick}>
                {this.props.direction}
            </div>
        )
    }
}

export default SliderNav