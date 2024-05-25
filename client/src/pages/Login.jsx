export function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div>
          <span className="r" />
          <span className="r s" />
          <span className="r s" />
          <span className="r" />
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="mb-4">
              <i className="feather icon-unlock auth-icon" />
            </div>
            <h3 className="mb-4">Kayit Ol</h3>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Eposta" />
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Ad" />
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Soyad" />
            </div>
            <div className="input-group mb-4">
              <input type="password" className="form-control" placeholder="Sifre" />
            </div>
            <button className="btn btn-primary shadow-2 mb-4">Kayit Ol</button>
            <p className="mb-0 text-muted">Hesabiniz var mi? <a href="auth-signup.html">Giris Yap</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
