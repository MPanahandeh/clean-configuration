import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div>
            <h1>Hello Mehrdad!</h1>
            <p>We are coocking!</p>
        </div>;
    }
}