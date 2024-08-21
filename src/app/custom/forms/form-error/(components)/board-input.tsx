"use client"

import { useFormStatus } from "react-dom"

type Props = {
    errors?: {
        title?: string[]
    }
}

const BoardInput = ({ errors }: Props) => {
    const { pending } = useFormStatus()

    return (
        <div className="flex flex-col space-y-2 w-full">
            <input
                type="text"
                id="title"
                name="title"
                className="border-white border-2 rounded-md p-2 w-full disabled:bg-yellow-200"
                placeholder="Enter a board title"
                required
                disabled={pending}
            />
            {
                errors?.title && (
                    <div>
                        {
                            errors?.title.map((error: string) => (
                                <p key={error} className="text-rose-500">
                                    {error}
                                </p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default BoardInput