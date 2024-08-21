"use client"

// import create from "@/actions/form-error/create-board"


import { useFormState } from "react-dom"
import BoardInput from "./board-input"
import BoardSubmmit from "./board-submmit"
import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/form-safe"

type Props = {}

// const BoardForm = (props: Props) => {

//   const initialState = { message: "", errors: {} }
//   const [state, dispatch] = useFormState(create, initialState)

//   return (
//     <form action={dispatch} className="w-3/5 mx-auto flex flex-col gap-4 mb-8">
//       <BoardInput errors={state?.errors} />
//       <BoardSubmmit />
//     </form>
//   )
// }

// export default BoardForm

const BoardForm = (props: Props) => {

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!")
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string

    execute({ title })
  }


  return (
    <form action={onSubmit} className="w-3/5 mx-auto flex flex-col gap-4 mb-8">
      <BoardInput errors={fieldErrors} />
      <BoardSubmmit />
    </form>
  )
}

export default BoardForm