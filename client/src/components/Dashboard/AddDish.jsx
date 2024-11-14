import DashboardSideNav from './DashboardSideNav';
import DashboardHeader from './DashboardHeader';
import DashboardFooter from './DashboardFooter';

const AddDish = () => {
  return (
    <>
     <DashboardSideNav />
      <main className="main-content">
        <DashboardHeader />

        <div className="content-inner mt-5 py-0">
      <div className=''>
         <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-lg-6">
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title"> Add New Dish</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                     <form>
                        <div className="row">
                           <div className="col-md-6 mb-3">
                              <label className="form-label" htmlFor="validationDefault01">First name</label>
                              <input type="text" className="form-control" id="validationDefault01" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label" htmlFor="validationDefault02">Last name</label>
                              <input type="text" className="form-control" id="validationDefault02" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                              <div className="form-group input-group">
                                 <span className="input-group-text" id="basic-addon1">@</span>
                                 <input type="text" className="form-control" id="validationCustomUsername" aria-label="Username" aria-describedby="basic-addon1" required/>
                              </div>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label" htmlFor="validationDefault03">City</label>
                              <input type="text" className="form-control" id="validationDefault03" required/>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label" htmlFor="validationDefault04">State</label>
                              <select className="form-select" id="validationDefault04" required>
                                 <option selected disabled value="">Choose...</option>
                                 <option>...</option>
                              </select>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label" htmlFor="validationDefault05">Zip</label>
                              <input type="text" className="form-control" id="validationDefault05" required/>
                           </div>
                        </div>
                        <div className="form-group">
                           <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                              <label className="form-check-label" htmlFor="invalidCheck2">
                              Agree to terms and conditions
                              </label>
                           </div>
                        </div>
                        <div className="form-group">
                           <button className="btn btn-primary rounded" type="submit">Submit form</button>
                        </div>
                     </form>
                  </div>
               </div>
               
            </div>
            
         </div>
      </div>
      </div>
        <DashboardFooter/>
      </main>
    </>
  )
}

export default AddDish
