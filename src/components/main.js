import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextBox from "./textField";
import NavBar from "./navBar";
import axios from 'axios';
import swal from 'sweetalert';
import './main.css';

function Main(){
    const [prediction, setPrediction] = useState('');

    const onChangePrediction = (e) => {
        setPrediction(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const result = {
            prediction: prediction
        }
        console.log(result)
        axios.post('/predict', result)
            .then((res) => {
                console.log(res.data);
                if(res.data === "Pretexting") {
                    swal({
                        title: "Pretexting!",
                        text: "Kalimat yang Anda masukkan merupakan " + res.data + " !!",
                        icon: "error",
                        button: false,
                        timer: 4000
                    });
                    setPrediction('');
                } else {
                    swal({
                        title: "Not Pretexting!",
                        text: "Kalimat yang Anda masukkan bukan Pretexting",
                        icon: "success",
                        button: false,
                        timer: 4000
                    });
                    setPrediction('');
                }
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    return(
        <div className="navbar" style={{padding: '8px'}}>
            <NavBar/>
            <div className='card'>
                <Card className='cardStyle'>
                    <CardContent>
                        <div className='pretexting-detector' style={{marginBottom: 20}}>Pretexting Detector Super App</div>
                        <TextBox label="Masukkan teks"
                            value = {prediction}
                            onChange={onChangePrediction}
                        />
                    </CardContent>
                    <CardActions className='CardActions'>
                        <Button 
                            style={{
                                background: 'RoyalBlue', color: 'white', marginBottom: 10
                            }}
                            onClick={onSubmit}>Check !!</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Main;