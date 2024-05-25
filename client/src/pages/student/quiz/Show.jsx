import { Card } from "../../../components/Card";

import CountdownTimer from "../../../components/CountdownTimer";
import { TestComponent } from "../../../components/quiz/TestComponent";
import { ClassicComponent } from "../../../components/quiz/ClassicComponent";
import { FilltheblankComponent } from "../../../components/quiz/FilltheblankComponent";
import { TrueFalseComponent } from "../../../components/quiz/TrueFalseComponent";
export function StudentQuizShow() {

  return (
    <div className="container">
      <div className="pcoded-content">
        <div>
          <Card props={{ name: "Quizim" }}>
            <div className="d-flex justify-content-end">
              <CountdownTimer durationInMinutes={60} />
            </div>
            <div class="container mt-sm-5 my-1">
              <TestComponent />
              <ClassicComponent />
              <FilltheblankComponent />
              <TrueFalseComponent />
              <div class="d-flex align-items-center pt-3">
                <div class="ml-auto mr-sm-5">
                  <button class="btn btn-success">Sonraki</button>
                </div>
              </div>
            </div>
          </Card>
        </div >
      </div >
    </div >
  )
}

