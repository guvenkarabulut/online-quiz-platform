
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import DefaultLayout from "../../../layouts/DefaultLayout";
import { useParams } from "react-router-dom";

export function StudentQuizIndex() {
  var { quizId } = useParams();

  return (
    <DefaultLayout props={{ name: "Ogrenci" }}>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <Breadcrumb props={{ childs: ["Quizler", quizId] }} />
          <div>
            <Card props={{ name: "Quizim" }}>
              <div class="card-body">
                <h5 class="card-title">Quiz Uyarisi</h5>
                <p class="card-text">
                  <ul>
                    <li>Quizinizin suresi 30 dakikadir. Sure bitiminde quiz otomatik olarak kapanacaktir.</li>
                    <li>Kaydedilmemis cevaplariniz kaybolacak ve puanlama yapilmayacaktir.</li>
                    <li>Quizinizde 10 soru bulunmaktadir.</li>
                    <li>Sorular arasi gecis yapilamiyor.</li>
                  </ul>
                </p>
                <form>
                  <div class="form-group">
                    <button type="button" class="btn btn-success mr-2" onclick="kabulEt()">Baslat</button>
                    <button type="button" class="btn btn-danger" onclick="reddet()">Baslatma</button>
                  </div>
                </form>
              </div>
            </Card>
          </div >
        </div >
      </div >
    </DefaultLayout >
  )
}

