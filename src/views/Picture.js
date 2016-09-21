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
    Photo,
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
        dispatch(next(index, count));
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
        const { index, count, hasNext, src, } = this.props;

        const next =this.next;

        const header = (<Header next={next} back={this.back}>
                            <h2>{index} <span className="subtle">/ {count}</span></h2>
                        </Header>);
        const metadata = hasNext ? <Metadata {...this.props} /> : null;

        return (
            <div className="Layout">
                {header}
                <div className="Content">
                    <Photo src={src} />
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
    let index, key;
    if (props.params.index) {
        index = parseInt(props.params.index, 10);
        key = store.order[index - 1];
    } else {
        key = props.params.key;
        index = store.order.indexOf(key) + 1;
    }

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
