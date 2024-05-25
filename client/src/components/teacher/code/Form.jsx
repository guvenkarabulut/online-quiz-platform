import { Editor } from 'primereact/editor';
import { useState } from "react";

export function TeacherCodeForm({ props }) {

  const [text, setText] = useState('');
  return (
    <form>
      <div classname="mb-3">
        <label for="inputEmail4">Soru</label>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '160px' }} />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Ders</label>
          <select className="form-control" aria-label="Default select example">
            <option>Ders Sec</option>
            <option value="1">Ders 1</option>
            <option value="1">Ders 2</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <div className="form-group d-flex justify-content-between align-items-center">
            <label for="inputEmail4">Testler</label>
            <button type="button" className="btn btn-primary">Test Ekle</button>
          </div>
          <div className="form-group d-flex justify-content-between align-items-center">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Giris</label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Beklenen Cikis</label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Kaydet</button>
    </form >
  )
}
