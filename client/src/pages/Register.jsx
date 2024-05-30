import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApiSlice";
import { setRegister } from "../features/auth/authSlice";

export function Register() {
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  function handleFormChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await register({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      }).unwrap();

      if (userData.token !== null) {
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
      console.log(userData);
    } catch (err) {
      if (err.status === 500) {
        alert("Kullanici zaten var");
      }
    }
  };

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

          <form className="flex flex-col w-full mt-8" onSubmit={handleSubmit}>
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <h3 className="mb-4">Kayit Ol</h3>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Eposta" name="email" onChange={(e) => handleFormChange(e)} />
              </div>
              <div className="input-group mb-3">
                <input className="form-control" placeholder="Ad" name="firstname" onChange={(e) => handleFormChange(e)} />
              </div>
              <div className="input-group mb-3">
                <input className="form-control" placeholder="Soyad" name="lastname" onChange={(e) => handleFormChange(e)} />
              </div>
              <div className="input-group mb-4">
                <input type="password" className="form-control" placeholder="Sifre" name="password" onChange={(e) => handleFormChange(e)} />
              </div>
              <button className="btn btn-primary shadow-2 mb-4">Kayit Ol</button>
              <p className="mb-0 text-muted">Hesabiniz var mi? <a href="auth-signup.html">Giris Yap</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
