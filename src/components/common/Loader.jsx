import React from 'react';

const Loader = () => (
  <div className="d-flex flex-center py-4">
    <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
