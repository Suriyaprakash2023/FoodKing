import "./theme-b118ffc1.js";
import { A as o } from "./apexcharts.common-f89256c1.js";
var r = ["#ffbc00"],
  e = document.getElementById("new_order").dataset.colors,
  t = {
    chart: { type: "bar", height: 80, sparkline: { enabled: !0 } },
    plotOptions: { bar: { columnWidth: "90%", borderRadius: 7 } },
    colors: e ? e.split(",") : r,
    series: [{ data: [45, 80] }],
    labels: [1, 2],
    xaxis: { crosshairs: { width: 4 } },
    tooltip: {
      theme: "dark",
      fixed: { enabled: !1 },
      x: { show: !1 },
      y: {
        title: {
          formatter: function (s) {
            return "";
          },
        },
      },
      marker: { show: !1 },
    },
  },
  a = new o(document.querySelector("#new_order"), t);
a.render();
var r = ["#ffbc00"],
  e = document.getElementById("cancelled_order").dataset.colors,
  t = {
    chart: { type: "bar", height: 80, sparkline: { enabled: !0 } },
    plotOptions: { bar: { columnWidth: "90%", borderRadius: 7 } },
    colors: e ? e.split(",") : r,
    series: [{ data: [45, 80] }],
    labels: [1, 2],
    xaxis: { crosshairs: { width: 4 } },
    tooltip: {
      theme: "dark",
      fixed: { enabled: !1 },
      x: { show: !1 },
      y: {
        title: {
          formatter: function (s) {
            return "";
          },
        },
      },
      marker: { show: !1 },
    },
  },
  a = new o(document.querySelector("#cancelled_order"), t);
a.render();
