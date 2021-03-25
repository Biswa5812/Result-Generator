import React from "react";
import AdminAccess from "./AdminAccess";

const Admin = () =>
{

    // const [isAdmin, setIsAdmin] = useState(false);

    return(
        <div>
            {/* <h1 className="main_text">Admin Login</h1> */}
            {
                (false) ? (
                    <h1>Component to be inserted</h1>
                ):(
                    <AdminAccess/>
                    // <Container fluid className="details">
                    //     <Form>
                    //         <FormGroup>
                    //             <Label>Enter Admin Mail ID</Label>
                    //             <Input type="email" placeholder="Mail ID"/>
                    //         </FormGroup>
                    //         <FormGroup>
                    //             <Label>Password</Label>
                    //             <Input type="password" placeholder="Password"/>
                    //         </FormGroup>
                    //         <Button className="btn" color="success">Login</Button>
                    //     </Form>
                    // </Container>
                )
            }
        </div>
    );
};

export default Admin;