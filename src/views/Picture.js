import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Label from '../components/Label';
import Choice from '../components/Choice';


class Picture extends Component {
    notFound(props) {
        props = props || this.props;
        const { dispatch, index, count } = props;
        if (index > count) {
            dispatch(push('/404'));
        }
    }

    componentDidMount() {
        this.notFound();
    }

    componentWillReceiveProps(nextProps) {
        this.notFound(nextProps);
    }

    render() {
        const { index, count, title, description, url, photographId } = this.props;
        return (
            <div className="Content">
                <div className="picture" style={{backgroundImage: 'url(' + url + ')'}}></div>
                <div className="sidebar">
                    <Label
                        index={index}
                        count={count}
                        hasNext={photographId !== undefined}
                        title={title}>
                            <p>{description}</p>
                        </Label>
                    <Choice index={index} id={this.props.id} photographId={photographId} />
                </div>
            </div>
        );
    }
}

function select(store, props) {
    const index = parseInt(props.params.index, 10);
    const key = store.order[index - 1];
    const current = store.pictures[key];
    return {
        ...current,
        index,
        count: Object.keys(store.pictures).length,
    }
}

export default connect(select)(Picture);
