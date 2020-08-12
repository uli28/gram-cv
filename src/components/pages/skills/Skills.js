import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content" >
          <h6>
            <strong>KENNTNISSE UND FÄHIGKEITEN</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>Java</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '89%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>React</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>HTML und CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>React Native</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Python</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>C++</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate brown lighten-2"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
