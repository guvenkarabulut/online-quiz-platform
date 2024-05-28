import { useState } from "react"
import { useCreateChoiceMutation } from "../../features/choices/choicesApiSlice"
import { useCreateQuestionMutation, useUpdateQuestionMutation } from "../../features/questions/questionsApiSlice"

export function QuestionsUpdateForm({ props }) {

  const [question, setQuestion] = useState({
    id: props.question.id,
    text: props.question.text,
    point: props.question.point,
    type: props.question.type,
  })

  const handleQuestionChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    })
  }

  const [updateQuestion] = useUpdateQuestionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await updateQuestion({
        id: question.id,
        text: question.text,
        point: parseInt(question.point),
        type: parseInt(question.type),
      }).unwrap()
      if (response) {
        setQuestion({
          text: "",
          point: "",
          type: "",
          quiz_id: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Soru</label>
          <input type="text" className="form-control"
            value={question.text} id="exampleFormControlInput1" name="text" onChange={handleQuestionChange} />
          <label for="exampleFormControlInput1">Puan</label>
          <input type="text" className="form-control" value={question.point}
            id="exampleFormControlInput1" name="point" onChange={handleQuestionChange} />
        </div>
        <button type="submit" className="btn  btn-primary">
          Kaydet
        </button>
      </form>
    </>
  )
}
