import React from 'react';

import rectangelimage from './capture_decran_20240313_a_16271.png'
import rectangelimage2 from './rectangle_1871.png'

function LeftContainer() {
    return (
        <div className="leftcontainer d-flex flex-column progress-bar bg-white rounded-end" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
            <div className="leftsearchbox">
                <div className="container-fluid d-flex align-items-center statuscontainer">
                    <h6 className="calendar-headerh6 mr-2">Status</h6>
                    <div className="selectboxcontainer input-group input-group-search">
                        <input type="text" className="form-control form-control-search" placeholder="" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Draft X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Under review X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Open Event X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Family Attendance Confirmed X</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="input-group mb-3">
                                <label htmlFor="searchInput" className="input-group-text" >Search</label>
                                <input type="text" className="form-control" id="searchInput" placeholder="Type a keyword &#x1F50E;" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group mb-3">
                                <label htmlFor="dateInput" className="input-group-text">Date</label>
                                <input type="date" className="form-control" id="dateInput" placeholder="Date &#x1F4C5;" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">Sort By</label>
                                <select className="form-select" aria-label="Sort By">
                                    <option selected>Newest</option>
                                    <option value="older">Older</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listitems">



            <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


            <div className="card-group">
  <div className="card rounded m-2">
    <img className="card-img-top-custom card-img-top" src={rectangelimage}   alt="Card image cap" />
    <div className="card-body">
      <h5>
                    Lunch&amp;Learn at Royal Canin’s St Charles site
                    </h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card rounded m-2">
    <img className="card-img-top-custom card-img-top" src={rectangelimage2} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card rounded m-2">
    <img className="card-img-top-custom card-img-top" src={rectangelimage} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>




 
            </div>
            <div className="paging align-items-center">
                <span className="centered-text">1-1 OF 1 ELEMENTS</span>
            </div>
        </div>
    );
}

export default LeftContainer;
