import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [value, setValue] = useState(0)

    function Increment () {
        setValue(value + 1)
    }

    function Decrement () {
        setValue(value - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                My card
            </div>
            <div className="card-body">
                <p>My body card</p>
                <Button className="btn btn-primary"
                        onClick={Increment}
                >
                    Increment
                </Button>
                <Button className="btn btn-danger"
                        onClick={Decrement}
                >
                    Decrement
                </Button>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card;