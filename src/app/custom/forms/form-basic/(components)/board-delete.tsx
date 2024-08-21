import { deleteBoard } from "@/actions/form-basic/example-delete"

type Props = {
    title: string
    id: string
}

const DeleteBoard = ({
    title,
    id
}: Props) => {

    const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
        <p>
            Board name: {title}
        </p>
        <button type="submit" className=" bg-red-400 hover:bg-red-500 p-4 rounded-md">
            Delete
        </button>
    </form>
  )
}

export default DeleteBoard