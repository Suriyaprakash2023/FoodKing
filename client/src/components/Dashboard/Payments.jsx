import React from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardSideNav from "./DashboardSideNav";
import DashboardHeader from "./DashboardHeader";
import './footer.css'
const Payments = () => {
  return (
    <>
      <DashboardSideNav />
      <main className="main-content">
        <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center pb-0 border-0">
                  <div className="header-title">
                    <h4 className="card-title">Payments</h4>
                  </div>

                  <div className="ml-auto"> {/* Added a wrapper with margin-left auto */}
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Search"
                      aria-controls="datatable"
                    />
                  </div>
                </div>

                <div className="card-body">
                  
                  <div className="table-responsive">
                    <table
                      id="datatable"
                      className="table table-striped"
                      data-toggle="data-table"
                    >
                      <thead>
                        <tr>
                          <th className="text-primary">User</th>
                          <th className="text-primary">Amount</th>
                          <th className="text-primary">Order Id</th>
                          <th className="text-primary">Payment at</th>
                          <th className="text-primary">Payment Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Suriya</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                       
                       
                      </tbody>
                      <tfoot>
                        <tr>
                        <th className="text-primary">User</th>
                          <th className="text-primary">Amount</th>
                          <th className="text-primary">Order Id</th>
                          <th className="text-primary">Payment at</th>
                          <th className="text-primary">Payment Status</th>
                        </tr>
                      </tfoot>
                    </table>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                           <li className="page-item disabled">
                              <a className="page-link" href="#" tabIndex="-1">Previous</a>
                           </li>
                           <li className="page-item"><a className="page-link" href="#">1</a></li>
                           <li className="page-item"><a className="page-link" href="#">2</a></li>
                           <li className="page-item"><a className="page-link" href="#">3</a></li>
                           <li className="page-item">
                              <a className="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="footer d-sm-block"  style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <div className="footer-body">
          <ul className="left-panel list-inline mb-0 p-0">
            <li className="list-inline-item">
              <a >Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a >Terms of Use</a>
            </li>
          </ul>
          <div className="right-panel">
            ©
            2024
            Suriya, Made with
            <span className="text-danger">
             💕
            </span>
            by <a href="">FoodKing Design</a>.
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default Payments;
