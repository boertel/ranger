import React, { Component } from 'react';
import { connect } from 'react-redux';

import Label from '../components/Label';
import Choice from '../components/Choice';


class Picture extends Component {
    render() {
        const { index, count, title, description, url } = this.props;
        return (
            <div className="Content">
                <div className="picture" style={{backgroundImage: 'url(' + url + ')'}}></div>
                <div className="sidebar">
                    <Label
                        index={index}
                        count={count}
                        title={title}>
                            <p>{description}</p>
                        </Label>
                    <Choice index={index} />
                </div>
            </div>
        );
    }
}

function select(store, props) {
    const index = parseInt(props.params.index, 10);
    const key = store.order[index];
    const current = store.pictures[key];
    return {
        ...current,
        index,
        count: Object.keys(store.pictures).length,
    }
}

export default connect(select)(Picture);
