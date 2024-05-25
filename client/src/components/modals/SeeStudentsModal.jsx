import { Table } from "../Table";
import { TableRow } from "../TableRow";

export function SeeStudentsModal() {
  return (
    <>
      <div id="ogrenciEkle" className="modal fade" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalPopoversLabel">
                Ders Ekle</h5>
              <button type="button" className="close" data-dismiss="modal"
                aria-label="Close"><span
                  aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label
                  for="exampleFormControlInput1">Öğrenciler</label>
                <select className="form-control"
                  id="exampleFormControlSelect1">
                  <option>Öğrenci 1</option>
                  <option>Öğrenci 2</option>
                  <option>Öğrenci 3</option>
                  <option>Öğrenci 4</option>
                  <option>Öğrenci 5</option>
                </select>
              </div>
              <button type="button"
                className="btn  btn-primary">Kaydet</button>
            </div>
            <div className="table-responsive">
              <Table columns={["#", "İsim Soyisim", "Kullanıcı Adı", "İşlemler"]}>
                <TableRow rows={["1", "Yahya Başakçi", "yahyabasakci"]}>
                  <button type="button"
                    className="btn btn-danger btn-with-icon" > <i
                      className="feather icon-trash"></i></button>
                </TableRow>
              </Table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn  btn-secondary"
                data-dismiss="modal">Kapat</button>
              <button type="button"
                className="btn  btn-primary">Kaydet</button>
            </div>
          </div>
        </div>
      </div >
      <button type="button" className="btn btn-success btn-with-icon-text"
        data-toggle="modal" data-target="#ogrenciEkle">Öğrencileri
        Görüntüle</button>
    </>
  )
}
