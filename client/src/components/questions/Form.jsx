import { useState } from "react"
import { useCreateChoiceMutation } from "../../features/choices/choicesApiSlice"
import { useCreateQuestionMutation } from "../../features/questions/questionsApiSlice"

export function QuestionsForm({ props }) {
  const [questionType, setQuestionType] = useState('')

  const [question, setQuestion] = useState({
    text: '',
    point: 0,
    type: 0,
    quiz_id: props.quizId,
  })
  const setQuestionState = () => {
    const questionType = document.getElementById('exampleFormControlSelect1').value
    setQuestionType(questionType)

    setQuestion({
      ...question,
      type: questionType
    })

    console.log(question)
    setChoices([])
  }


  const handleQuestionChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    })

    console.log(question)
  }

  const [choices, setChoices] = useState([])


  const handleChoiceChange = (e) => {
    setChoices({
      ...choices,
      [e.target.name]: e.target.value
    })
  }

  const [createQuestion] = useCreateQuestionMutation();
  const [createChoice] = useCreateChoiceMutation();

  const handleSubmit = async () => {
    try {
      const response = await createQuestion({
        text: question.text,
        point: parseInt(question.point),
        type: parseInt(question.type),
        quiz_id: parseInt(question.quiz_id),
      }).unwrap()

      if (response) {
        const choicesArray = Object.values(choices);
        await Promise.all(choicesArray.map(async (choice) => {
          await createChoice({
            text: choice,
            is_correct: false,
            question_id: response.ID
          });
        }));
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Soru</label>
          <input type="text" className="form-control"
            id="exampleFormControlInput1" name="text" onChange={handleQuestionChange} />
          <label for="exampleFormControlInput1">Puan</label>
          <input type="text" className="form-control"
            id="exampleFormControlInput1" name="point" onChange={handleQuestionChange} />
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
                <label for="exampleFormControlInput1">A) Secenek</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="a" onChange={handleChoiceChange} />
                <label for="exampleFormControlInput1">B) Secenek</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="b" onChange={handleChoiceChange} />
                <label for="exampleFormControlInput1">C) Secenek</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="c" onChange={handleChoiceChange} />
                <label for="exampleFormControlInput1">D) Secenek</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="d" onChange={handleChoiceChange} />
                <label for="exampleFormControlInput1">E) Secenek</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="e" onChange={handleChoiceChange} />
              </>
            )
          }
          {
            questionType === '2' && (
              <>
                <label for="exampleFormControlInput1">Cevap</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="choice" onChange={handleChoiceChange} />
              </>
            )
          }
          {
            questionType === '3' && (
              <>
                <label for="exampleFormControlInput1">Bosluk</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="choice" onChange={handleChoiceChange} />
              </>
            )
          }
          {
            questionType === '4' && (
              <>
                <label for="exampleFormControlInput1">D/Y</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1" name="choice" onChange={handleChoiceChange} />
              </>
            )
          }
        </div>
        <button type="submit" className="btn  btn-primary">
          Kaydet
        </button>
      </form>
    </>
  )
}
