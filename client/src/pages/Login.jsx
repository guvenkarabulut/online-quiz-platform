import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../features/auth/authApiSlice";

export function Login() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      window.location.href = "/";
    }
  }, [token]);

  const [login] = useLoginMutation();
  const [data, setData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(data).unwrap();
      Cookies.set('token', response);
      setToken(response);
    } catch (error) {
      console.log(error);
    }
  }

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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <h3 className="mb-4">Giris Yap</h3>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Eposta" name="email" onChange={handleChange} />
              </div>
              <div className="input-group mb-4">
                <input type="password" className="form-control" placeholder="Sifre" name="password" onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary shadow-2 mb-4">Giris Yap</button>
            </form>
            <p className="mb-0 text-muted">Hesabiniz yok mu? <a href="/register">Kayit Ol</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
