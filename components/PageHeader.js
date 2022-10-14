import React from "react";
import { Card } from "react-bootstrap"

const PageHeader = (prop) => {
    return (
        <>
            <Card className="bg-light">
                <Card.Body>
                    {prop.text}
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default PageHeader