var a = Object.defineProperty;
var l = (e, r, s) =>
  r in e
    ? a(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[r] = s);
var o = (e, r, s) => (l(e, typeof r != "symbol" ? r + "" : r, s), s);
import "./theme-b118ffc1.js";
class h {
  constructor() {
    o(this, "validateEmail", (r) => /\S+@\S+\.\S+/.test(r));
    var r, s, i, t;
    (this.form = document.querySelector("[data-x-form]")),
      (this.email =
        (r = this.form) == null
          ? void 0
          : r.querySelector("[data-x-field='email']")),
      (this.emailError =
        (s = this.form) == null
          ? void 0
          : s.querySelector("[data-x-field-error='email']")),
      (this.password =
        (i = this.form) == null
          ? void 0
          : i.querySelector("[data-x-field='password']")),
      (this.passwordError =
        (t = this.form) == null
          ? void 0
          : t.querySelector("[data-x-field-error='password']")),
      (this.errors = {}),
      (this.dummyUser = { email: "user@demo.com", password: "password" });
  }
  initEventListener() {
    this.form.addEventListener("submit", (r) => {
      r.preventDefault();
      const s = this.email.value,
        i = this.password.value;
      s.length === 0
        ? (this.errors.email = "Please enter a email address")
        : this.validateEmail(s)
        ? s !== this.dummyUser.email &&
          (this.errors.email = "This user is not registered yet")
        : (this.errors.email = "Please enter a proper email"),
        i.length === 0 && (this.errors.password = "Please enter a password"),
        s === this.dummyUser.email &&
          i !== this.dummyUser.password &&
          (this.errors.password = "Invalid credentials"),
        Object.keys(this.errors).length === 0
          ? this.goToNext()
          : this.showErrors();
    });
  }
  goToNext() {
    const r = this.form.getAttribute("data-x-form-to");
    console.info(r), r && (window.location.href = r);
  }
  clearErrors() {
    this.emailError && (this.emailError.innerHTML = ""),
      this.passwordError && (this.passwordError.innerHTML = "");
  }
  showErrors() {
    this.clearErrors(),
      this.errors.email &&
        this.emailError &&
        (this.emailError.innerHTML = this.errors.email),
      this.errors.password &&
        this.passwordError &&
        (this.passwordError.innerHTML = this.errors.password),
      (this.errors = {});
  }
  init() {
    this.email && this.password && this.initEventListener();
  }
}
new h().init();

