import React, { Component } from 'react';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import './Thanks.css';


export default class Thanks extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="Overlay">
                <div className="Thanks">
                    <div>
                        <p><FormattedMessage id="thanks" /></p>
                        <p>
                            <img src="https://farm9.staticflickr.com/8304/29575930825_9ebba710a9_o.gif" alt="Merci" />
                        </p>
                        <p className="signature"><FormattedMessage id="signature" /></p>
                        <p><a onClick={this.props.close}><FormattedMessage id="backToPhotos" /></a></p>
                    </div>
                    <div className="credits">
                        <p><FormattedHTMLMessage id="credits" /></p>
                    </div>
                </div>
            </div>
        );
    }
}
