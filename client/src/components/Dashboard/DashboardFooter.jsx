import React from 'react';

const DashboardFooter = () => {
  return (
    <>
       <footer className="footer">
        <div className="footer-body">
          <ul className="left-panel list-inline mb-0 p-0">
            <li className="list-inline-item">
              <a href="extra/privacy-policy.html">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="extra/terms-of-service.html">Terms of Use</a>
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
    </>
  )
}

export default DashboardFooter
