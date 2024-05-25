import DefaultLayout from "../../layouts/DefaultLayout";

export function TeacherStudents() {
  return (
    <DefaultLayout>
      <div class="pcoded-main-container">
        <div class="pcoded-content">
          <div class="page-header">
            <div class="page-block">
              <div class="row align-items-center">
                <div class="col-md-12">
                  <div class="page-header-title">
                    <h5 class="m-b-10">Öğrenciler</h5>
                  </div>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-user"></i></a>
                    </li>
                    <li class="breadcrumb-item"><a href="#!">Öğrencilerim</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="col-xl-12">
              <div class="card">
                <div class="card-header">
                  <h5>Öğrencilerim</h5>
                </div>
                <div class="card-body table-border-style">
                  <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover zero-configuration">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>İsim Soyisim</th>
                          <th>Kullanıcı Adı</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Yahya Başakçi</td>
                          <td>yahyabasakci</td>
                          <td>
                            <button type="button" class="btn btn-danger btn-with-icon"><i
                              class="feather icon-trash"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Nazar Arik</td>
                          <td>nazararik</td>
                          <td>
                            <button type="button" class="btn btn-danger btn-with-icon"><i
                              class="feather icon-trash"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Mustafa Akil</td>
                          <td>mustafaakil</td>
                          <td>
                            <button type="button" class="btn btn-danger btn-with-icon"><i
                              class="feather icon-trash"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Güven Karabulut</td>
                          <td>guvenkarabulut</td>
                          <td>
                            <button type="button" class="btn btn-danger btn-with-icon"><i
                              class="feather icon-trash"></i></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DefaultLayout>
  )
}
