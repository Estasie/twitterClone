import React from 'react';
import './post-status-filter.css';

import {Button} from 'reactstrap';
export default class PostStatusFilter extends React.Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }

    render() {

        const buttons = this.buttons.map(({name, label})=> {
            const active = this.props.filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <Button 
                
                key={name} 
                className={`btn ${activeClass}`}
                onClick={()=> this.props.onFilterSelect(name)}>{label}</Button>
            )
        });
        return (
            <div className="btn-group">       
                {buttons}
            </div>
        )
    }
}


