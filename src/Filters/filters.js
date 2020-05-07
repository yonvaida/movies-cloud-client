import React, { PureComponent } from 'react';

class Filters extends PureComponent {
  render() {
    return (
      <div id="filters">
        <div className="md-form mt-0">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="action" />
          <label className="form-check-label" htmlFor="action">Action</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="comedy" />
          <label className="form-check-label" htmlFor="comedy">Comedy</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="drama" />
          <label className="form-check-label" htmlFor="drama">Drama</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="thriller" />
          <label className="form-check-label" htmlFor="thriller">Thriller</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="scifi" />
          <label className="form-check-label" htmlFor="scifi">Science Fiction</label>
        </div>
        <button>Search</button>
      </div>
    );
  }
}

export default Filters;
