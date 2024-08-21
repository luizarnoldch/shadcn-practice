import exampleCreate from "@/actions/form-basic/example-create-zod"
import { db } from "@/lib/db"

import BoardDelete from "./(components)/board-delete"

type Props = {}

const page = async (props: Props) => {

    const boards = await db.board.findMany()

    return (
        <div className="w-full flex flex-col gap-8 h-screen mt-16">
            <div className="w-full h-full">
                <form action={exampleCreate} className="w-3/5 mx-auto flex flex-col gap-4">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border-white border-2 rounded-md p-2"
                        placeholder="Enter a board title"
                        required
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
                <div className="space-y-2 mx-auto w-3/5">
                    {
                        boards.map((board) => (
                            <BoardDelete key={board.id} title={board.title} id={board.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page