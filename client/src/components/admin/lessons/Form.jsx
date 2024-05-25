export function AdminLessonsForm() {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders Adi</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder="Ders Adi" />
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders Kodu</label>
          <input type="text" className="form-control" id="inputEmail4" placeholder="Ders Kodu" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ogretmen</label>
          <select className="form-control" aria-label="Default select example">
            <option>Ogretmen Sec</option>
            <option value="1">Ogretmen 1</option>
            <option value="1">Ogretmen 2</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Ders Tanimi</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Kaydet</button>
    </form>
  )
}
