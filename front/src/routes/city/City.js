import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Render from '../../components/City/Render';
import s from './City.css';

class City extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render city={this.props.city} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(City);
