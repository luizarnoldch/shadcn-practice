"use client"

import { useFormStatus } from "react-dom"

type Props = {}

const BoardSubmmit = (props: Props) => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" className=" bg-blue-400 hover:bg-blue-500 p-2 rounded-md disabled:bg-yellow-200" disabled={pending}>
            Submit
        </button>
    )
}

export default BoardSubmmit