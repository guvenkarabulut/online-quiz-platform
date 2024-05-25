import { useState } from "react"

export function SeeQuizQuestionsModal() {
  const [questionType, setQuestionType] = useState('')

  const setQuestionState = () => {
    const questionType = document.getElementById('exampleFormControlSelect1').value
    setQuestionType(questionType)
  }
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
                <label for="exampleFormControlInput1">Soru Tipi</label>
                <select className="form-control"
                  id="exampleFormControlSelect1" onChange={setQuestionState}>

                  <option>Tip Seciniz</option>
                  <option value="1">Test</option>
                  <option value="2">Klasik</option>
                  <option value="3">Bosluk Doldurma</option>
                  <option value="4">Dogru/Yanlis</option>
                </select>
                {
                  questionType === '1' && (
                    <>
                      <label for="exampleFormControlInput1">Soru</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">A) Secenek</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">B) Secenek</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">C) Secenek</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">D) Secenek</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">E) Secenek</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">Dogru Cevap</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                    </>
                  )
                }
                {
                  questionType === '2' && (
                    <>
                      <label for="exampleFormControlInput1">Soru</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">Cevap</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                    </>
                  )
                }
                {
                  questionType === '3' && (
                    <>
                      <label for="exampleFormControlInput1">Soru</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">Bosluk</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                    </>
                  )
                }
                {
                  questionType === '4' && (
                    <>
                      <label for="exampleFormControlInput1">Soru</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                      <label for="exampleFormControlInput1">D/Y</label>
                      <input type="text" className="form-control"
                        id="exampleFormControlInput1" />
                    </>
                  )
                }
              </div>
              <button type="button" className="btn  btn-primary">
                Kaydet
              </button>
              <div>

              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn  btn-secondary"
                data-dismiss="modal">Kapat</button>
              <button type="button"
                className="btn  btn-primary">Kaydet</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-with-icon-text"
        data-toggle="modal" data-target="#ogrenciEkle">Sorulari
        Görüntüle</button>
    </>
  )
}
