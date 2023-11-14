import * as React from "react";

export function Button(): JSX.Element {
    return (
        <button onClick={() => alert("alert from ui/button")} type="button">Click</button>
    )
}