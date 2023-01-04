import { memo } from "react"

export const ShowIncrement = memo(({ increment }) => {
    console.log("Me volvi a generar :( ");

    return (
        <>
            <button
                onClick={() => {
                    increment(5)
                }}
            >
                Increment
            </button>
        </>
    )
})
