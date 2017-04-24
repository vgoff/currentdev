import React, { PropTypes } from 'react';
import Loaded from '../Loaded';
import Sidebar from '../Sidebar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.jobs}>
            <Loaded event={this.props.event} />
          </div>
          <Sidebar event={this.props.event} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
