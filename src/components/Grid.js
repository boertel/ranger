import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';

import './Grid.css';

import Thumbnail from './Thumbnail';
import { rank } from '../actions';


class Grid extends Component {

    favorite(id) {
        this.props.dispatch(rank(id, 1));
    }

    renderPictures() {
        return this.props.pictures.map((picture) => {
            return (
                <Thumbnail
                    onClick={this.favorite.bind(this, picture.id)}
                    key={picture.id}
                    {...picture} />
            );
        });
    }

    render() {
        return (
            <div className="Grid">{this.renderPictures()}</div>
        );
    }
};

function select(store) {
    return {
        pictures: _.chain(store.pictures).pick(store.order).values().value(),
    }
}

export default connect(select)(Grid);
