import React,{useState} from "react";
import firebase from "../firebase";
import {
    Form,
    FormGroup,
    Input,
    Button,
    Container,
} from "reactstrap";
// import { render } from "@testing-library/react";

const Admin_access = () =>
{
    const [file,setFile] = useState([]);
    const onUpload = (e) =>
    {
        setFile(e.target.files);
        // console.log(e.target.files);

    } 
    const onSubmit = (e) =>
    {
        e.preventDefault();
        // 'file' comes from the Blob or File API
        // var store = storage.ref('pdf/'+file.name);
        // store.put(file).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        // });
        // console.log("hello");
        for (var i = 0; i < file.length; i++) 
        {
            // console.log("enter");
            var imageFile = file[i];
            uploadImageAsPromise(imageFile);
        }
        alert("Upload Finished!!!");
    }


    function uploadImageAsPromise (imageFile) 
    {

        return new Promise(function (resolve, reject) 
        {
            var storageRef = firebase.storage().ref("pdf/"+imageFile.name);
    
            //Upload file
            var task = storageRef.put(imageFile);
    
            //Update progress bar
            task.on('state_changed',
                function progress(snapshot){
                // var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    // uploader.value = percentage;
                    // console.log(percentage);
                },
                function error(err){
    
                },
                function complete(){
                    // var downloadURL = task.snapshot.downloadURL;
                    // console.log("success");
                    // f = 1;
                }
            );
        });
    }

    return(
        <div>
            <h1 className="main_text">Upload File</h1>
            <Container fluid className="details">
                <Form>
                    <FormGroup>
                        <Input className="file_upload" type="file" placeholder="Upload" multiple="multiple" onChange={onUpload}/>
                    </FormGroup>
                    <Button type="submit" className="btn" color="success" style={{marginTop:"60px"}} onClick ={onSubmit}>Submit File</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Admin_access;