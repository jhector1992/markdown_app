import React from 'react';

function ItemDetails(props) {
  return (
    <div>

      <h1>{props.item.title} </h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header text-center">
              HTML
            </div>
            <div className="card-body">
              <pre>
                {props.item.code.html}
              </pre>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
            <div className="card">
            <div className="card-header text-center">
                MARKDOWN
            </div>
            <div className="card-body">
                <pre>
                {props.item.code.markdown}
                </pre>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;