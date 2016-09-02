import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

import Thumbnail from '../components/Thumbnail';
import Row from '../components/Row';
import Face from '../components/Face';


class End extends Component {
    renderPictures() {
        return this.props.pictures.map((picture) => {
            const correct = picture.photographId === picture.predictionId;
            const style = {
                backgroundColor: correct ? 'rgba(0, 255, 0, 0.3' : 'rgba(255, 0, 0, 0.3)',
            };
            return (
                <Thumbnail
                    key={picture.id}
                    {...picture}>
                    <div className="overlay" style={style} />
                    <Face id={picture.photographId} />
                </Thumbnail>
            );
        });
    }

    render() {
        return (
            <div className="Content">
                <div className="picture">
                    <Row>{this.renderPictures()}</Row>
                </div>
                <div className="sidebar">
                    <h2>Presque fini, une dernière étape!</h2>
                    <div>
                        <h3>{this.props.correct}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

function select(store) {
    const pictures = _.values(store.pictures);
    return {
        pictures: _.chain(store.pictures).pick(store.order).values().value(),
        correct: pictures.filter(picture => picture.photographId === picture.predictionId).length
    }
}

export default connect(select)(End);
