import React from "react";

class Board extends React.Component {

    render() {
        return (
            <div>My table
                <table>
                    <th>
                        <tr>
                            <Square x={1} y={6} /><Square x={2} y={6} /><Square x={3} y={6} /><Square x={4} y={6} /><Square x={5} y={6} /><Square x={6} y={6} /><Square x={7} y={6} />
                        </tr>
                        <tr>
                            <Square x={1} y={5} /><Square x={2} y={5} /><Square x={3} y={5} /><Square x={4} y={5} /><Square x={5} y={5} /><Square x={6} y={5} /><Square x={7} y={5} />
                        </tr>
                        <tr>
                            <Square x={1} y={4} /><Square x={2} y={4} /><Square x={3} y={4} /><Square x={4} y={4} /><Square x={5} y={4} /><Square x={6} y={4} /><Square x={7} y={4} />
                        </tr>
                        <tr>
                            <Square x={1} y={3} /><Square x={2} y={3} /><Square x={3} y={3} /><Square x={4} y={3} /><Square x={5} y={3} /><Square x={6} y={3} /><Square x={7} y={3} />
                        </tr>
                        <tr>
                            <Square x={1} y={2} /><Square x={2} y={2} /><Square x={3} y={2} /><Square x={4} y={2} /><Square x={5} y={2} /><Square x={6} y={2} /><Square x={7} y={2} />
                        </tr>
                        <tr>
                            <Square x={1} y={1} /><Square x={2} y={1} /><Square x={3} y={1} /><Square x={4} y={1} /><Square x={5} y={1} /><Square x={6} y={1} /><Square x={7} y={1} />
                        </tr>
                    </th>
                </table>
            </div>
        )
    }
}




var Square = (props) => (
    <td ></td>
);





export default Board;