// import { Button } from "bootstrap";
import React,{useState} from "react";
import {storage} from "../firebase";
import logo from "../kv_pic.png";
import {
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap";


const Homes = () =>
{

    const [roll,setRoll] = useState('');

    const onSub = (e) => 
    {
        e.preventDefault();
        // console.log(roll);

        var store = storage.ref('pdf/'+roll+'.pdf');

        store.getDownloadURL()
        .then((url) => {
            // console.log(url);
            window.open(url,"_blank")
        })
        .catch((error) => {
            // Handle any errors
        });
    }

    

    return(
        <div className="home    ">
            <img className="image" src={logo} height="100" alt="Unable to load"></img>
            <h1 className="temp">Student Result Portal</h1>
        <Container fluid className="details">
            <Form >
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter your name"/>
                </FormGroup>
                <FormGroup>
                    <Label>Roll Number</Label>
                    <Input type="number" placeholder="Enter your roll no" value={roll} onChange={(e)=>{
                        setRoll(e.target.value);
                        // console.log(e.target.value);
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label>Select Class</Label>
                    <Input type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Select Section</Label>
                    <Input type="select">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>Science</option>
                        <option>Commerce</option>
                    </Input>
                </FormGroup>
                <Button className="btn" type="submit" color="success" onClick={onSub}>Submit</Button>
            </Form>
        </Container>
        </div>
    );
};

export default Homes;