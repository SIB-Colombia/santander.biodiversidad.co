import React, {Component, Fragment} from 'react'
import SidebarLayout from "./layout";
import FilterList from "./filterList";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class Sidebar extends Component {
    componentDidMount () {
    }
    handleClick = e => {
        e.stopPropagation()
        this.props.actions.sidebarVisibility(false)
    }
    render () {
        return (
            <SidebarLayout >
                <h4>{ this.props.title ? this.props.title : "Filtros"}</h4>
                {
                    window.innerWidth <= 800 ?  <div className="closeSidebar" onClick={this.handleClick}/> : ""
                }
                {
                    this.props.items.map(item => (
                            <Fragment key={item.id}>
                                <FilterList
                                name={item.nombre}
                                children={!!item.grupoBiologicoHijos}
                                urlImagen={item.urlImagen}
                                {...item}
                                />
                            </Fragment>
                    ))
                }

            </SidebarLayout>
        )
    }
}

const mapStateToProps = ( state ) => {
    return (
        {
            items: state.getIn(['interaction', 'sidebar', 'items']),
        }
    )
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)