import React from 'react'

export default function ReportCards() {
    return (
      <>
        <div className="card">

        <div className="card-content">

          <div className="box-icon bg-card-three">
            <i className="fas fa-chart-line"></i>
          </div>

          <div className="text__card">
            <p>View Analitycs</p>
            <p>1</p>
          </div>

          <i id="less" className="fas fa-angle-left"></i>

        </div>
      </div>

      <div className="card">
          <div className="card-content">
            <div className="box-icon bg-card-one">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="text__card">
              <p>Succesifuly Send</p>
              <p>120</p>
            </div>
            <i id="less" className="fas fa-angle-left"></i>
          </div>
      </div>

      <div className="card">
          <div className="card-content">
            <div className="box-icon bg-card-two">
              <i className="fas fa-dollar-sign"></i>
          </div>   
          <div className="text__card">
            <p>Earn month</p>
            <p>$30000</p>
            </div>
            <i id="less" className="fas fa-angle-left"></i>
          </div>
      </div>
      </>
    )
}
