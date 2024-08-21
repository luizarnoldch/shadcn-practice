"use client"

import { useFormStatus } from "react-dom"

type Props = {}

const BoardDeleteButton = (props: Props) => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className=" bg-red-400 hover:bg-red-500 p-4 rounded-md disabled:bg-yellow-200" disabled={pending}>
            Delete
        </button>
    )
}

export default BoardDeleteButton