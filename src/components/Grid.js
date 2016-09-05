import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import './Grid.css';

import Thumbnail from './Thumbnail';
import Row from './Row';
import Face from './Face';
import { rank, unrank } from '../actions';


class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rank: 0,
        };
    }

    favorite(picture) {
        if (!picture.ranking && this.state.rank < 3) {
            this.setState({
                rank: this.state.rank + 1,
            }, () => {
                this.props.dispatch(rank(picture.id, this.state.rank));
            });
        } else if (picture.ranking) {
            this.setState({
                rank: this.state.rank - 1,
            }, () => {
                this.props.dispatch(unrank(picture.id, this.state.rank));
            });
        }
    }

    renderThumbnails(pictures) {
        return pictures.map((picture) => {
            const star = picture.ranking ? <span>&#9733;</span> : <span>&#9734;</span>;
            const photograph = this.props.photographs[picture.photographId];
            return (
                <Thumbnail
                    key={picture.id}
                    onClick={this.favorite.bind(this, picture)}
                    {...picture}>
                    <a className="Favorite">{star}</a>
                    <Face correct={picture.correct} {...photograph} />
                </Thumbnail>
            );
        });
    }

    render() {
        let row = []
        let rows = [];
        let key = 0;
        this.props.pictures.forEach((picture, i) => {
            row.push(picture);
            if (i % 3 === 2) {
                key += 1;
                rows.push(<Row key={key}>{this.renderThumbnails(row)}</Row>);
                row = [];
            }
        });
        return (
            <div className="Grid">{rows}</div>
        );
    }
};

function select(store) {
    return {
        photographs: store.photographs,
        pictures: _.chain(store.pictures).pick(store.order).values().value(),
    }
}

export default connect(select)(Grid);
