export function AddQuizModal() {
  return (
    <>
      <div
        id="exampleModalPopovers"
        className="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalPopoversLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalPopoversLabel"
              >
                Quiz Ekle
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Quiz Adı</label
                >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="input-1"
                    placeholder="Quiz Adı"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Quiz Açıklaması</label
                >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="input-1"
                    placeholder="Quiz Açıklaması"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Süre</label
                >
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="input-1"
                    placeholder="Süre"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Başlangıç Tarihi<sub
                >(Opsiyonel)</sub
                  ></label
                >
                <div className="col-sm-6">
                  <input
                    type="date"
                    className="form-control"
                    id="input-1"
                    placeholder="Başlangıç Tarihi"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Bitiş Tarihi<sub>(Opsiyonel)</sub></label
                >
                <div className="col-sm-6">
                  <input
                    type="date"
                    className="form-control"
                    id="input-1"
                    placeholder="Bitiş Tarihi"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="input-1"
                  className="col-sm-6 col-form-label"
                >Ders</label
                >
                <div className="col-sm-6">
                  <select className="form-control">
                    <option value="volvo">Matematik</option>
                    <option value="saab">Fizik</option>
                    <option value="opel">Kimya</option>
                    <option value="audi">Biyoloji</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Kapat
              </button>
              <button type="button" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalPopovers"
      >
        Quiz Ekle
      </button>
    </>
  )
}
