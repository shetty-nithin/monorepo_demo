import * as React from "react";

export function Header({text}: {text:string}): JSX.Element {
    return (
        <h1>{text}</h1>
    )
}