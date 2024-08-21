import { deleteBoard } from "@/actions/form-basic/example-delete"
import BoardDeleteButton from "./board-detele-button"

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
            <BoardDeleteButton />
        </form>
    )
}

export default DeleteBoard