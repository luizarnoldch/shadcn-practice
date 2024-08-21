import { db } from "@/lib/db"

import BoardDelete from "./(components)/board-delete"
import BoardForm from "./(components)/board-form"

type Props = {}

const page = async (props: Props) => {

    const boards = await db.board.findMany()

    return (
        <div className="w-full flex flex-col gap-8 h-screen mt-16">
            <div className="w-full h-full">
                <BoardForm />
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