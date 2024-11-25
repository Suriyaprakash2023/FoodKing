import React, { useEffect, useState } from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardSideNav from "./DashboardSideNav";
import DashboardHeader from "./DashboardHeader";
import "./footer.css";
import axios from "axios";
import { API_BASE_URL } from "../context/data";

const Payments = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set to 10 items per page

  const [searchQuery, setSearchQuery] = useState("");

  // Calculate total pages
  const totalPages = Math.ceil(
    orders.filter((order) =>
      `${order.user.name}${order.unique_id}${order.status}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ).length / itemsPerPage
  );

  // Filtered orders based on search query
  const filteredOrders = orders.filter((order) =>
    `${order.user.name}${order.unique_id}${order.status}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/payments/`);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders.</p>;

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
                  <div className="ml-auto">
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Search"
                      aria-controls="datatable"
                      onChange={handleSearch}
                      value={searchQuery}
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
                          <th className="text-primary">Order Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((order) => (
                          <tr key={order.unique_id}>
                            <td>{order.user.name}</td>
                            <td>₹{order.total_price}</td>
                            <td>
                              #
                              <span className="text-success">
                                {order.unique_id}
                              </span>
                            </td>
                            <td>{new Date(order.order_at).toLocaleString()}</td>
                            <td>
                              {order.status === "Delivered" && (
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm rounded"
                                >
                                  Delivered
                                </button>
                              )}
                              {order.status === "Shipped" && (
                                <button
                                  type="button"
                                  className="btn btn-info btn-sm text-white rounded"
                                >
                                  Shipped
                                </button>
                              )}
                              {order.status === "Pending" && (
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm rounded"
                                >
                                  Pending
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="text-primary">User</th>
                          <th className="text-primary">Amount</th>
                          <th className="text-primary">Order Id</th>
                          <th className="text-primary">Payment at</th>
                          <th className="text-primary">Order Status</th>
                        </tr>
                      </tfoot>
                    </table>

                    {filteredOrders.length > itemsPerPage && (
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                          <li
                            className={`page-item ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                          >
                            <a
                              className="page-link"
                              href="#"
                              tabIndex="-1"
                              onClick={() => handlePageChange(currentPage - 1)}
                            >
                              Previous
                            </a>
                          </li>
                          {Array.from({ length: totalPages }, (_, index) => (
                            <li
                              key={index + 1}
                              className={`page-item ${
                                currentPage === index + 1 ? "active" : ""
                              }`}
                            >
                              <a
                                className="page-link"
                                href="#"
                                onClick={() => handlePageChange(index + 1)}
                              >
                                {index + 1}
                              </a>
                            </li>
                          ))}
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                          >
                            <a
                              className="page-link"
                              href="#"
                              onClick={() => handlePageChange(currentPage + 1)}
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="footer d-sm-block"
          style={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <div className="footer-body">
            <ul className="left-panel list-inline mb-0 p-0">
              <li className="list-inline-item">
                <a>Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a>Terms of Use</a>
              </li>
            </ul>
            <div className="right-panel">
              © 2024 Suriya, Made with
              <span className="text-danger"> 💕 </span> by{" "}
              <a href="">FoodKing Design</a>.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Payments;
