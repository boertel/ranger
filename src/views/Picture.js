import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { next, back } from '../actions';

import {
    Choices,
    Header,
    Message,
    Metadata,
    Next,
} from '../components';

import './Picture.css';


class Picture extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeydown);
        this.notFound();
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeydown);
    }

    onKeydown(evt) {
        if (evt.key === 'k' || evt.key === 'ArrowRight') {
            this.next();
        }
        if (evt.key === 'j' || evt.key === 'ArrowLeft') {
            this.back();
        }
    }

    next() {
        const { dispatch, index, count, hasNext } = this.props;
        if (hasNext) {
            dispatch(next(index, count));
        }
    }

    back() {
        const { dispatch, index } = this.props;
        dispatch(back(index));
    }

    notFound(props) {
        props = props || this.props;
        const { dispatch, index, count } = props;
        if (index > count) {
            dispatch(push('/404'));
        }
    }

    componentWillReceiveProps(nextProps) {
        this.notFound(nextProps);
    }

    render() {
        const { index, count, hasNext, url, } = this.props;

        const next = hasNext ? this.next : undefined

        const header = (<Header next={next} back={this.back}>
                            <h2>{index} <span className="subtle">/ {count}</span></h2>
                        </Header>);
        const metadata = hasNext ? <Metadata {...this.props} /> : null;

        return (
            <div className="Layout">
                {header}
                <div className="Content">
                    <div className="Picture" style={{backgroundImage: 'url(' + url + ')'}}></div>
                    <div className="Sidebar">
                        <div className="Aside">
                            <div>
                                {header}
                                <div>{metadata}</div>
                            </div>
                            <Choices {...this.props} />
                        </div>
                        <Message {...this.props} />
                        <Next onClick={this.next} show={hasNext} />
                    </div>
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
        photograph: store.photographs[current.photographId],
        hasNext: current.predictionId !== undefined,
        index,
        count: Object.keys(store.pictures).length,
    }
}

export default connect(select)(Picture);
