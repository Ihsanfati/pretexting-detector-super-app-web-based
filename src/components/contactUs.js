import './contactUs.css';
import React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextBox from './textField';
import NavBar from "./navBar";
import swal from 'sweetalert';
import axios from 'axios';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let success = '';

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const results = {
            name: name,
            email: email,
            message: message
        };
        console.log(results);
        axios.post('http://localhost/reactProject/insert.php', results)
            .then((res) => {
                success = res.data;
                console.log(success);
                swal({
                    title: "Registrasi Berhasil!",
                    text: "Selamat, anda telah terdaftar",
                    icon: "success",
                    button: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error.response);
                swal({
                    title: "Registrasi Gagal!",
                    text: "Isi formulir registrasi dengan benar yah",
                    icon: "error",
                    button: false,
                    timer: 2500
                });
            })
        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div className="navbar" style={{padding: '8px'}}>
            <NavBar/>
            <div className='card'>
                <Card className='cardStyle'>
                    <CardContent>
                        <div className='signupText'>Send Your Messages</div>
                        <h7 className='information'>Name: </h7>
                        <TextBox label="name" 
                            value = {name}
                            onChange={onChangeName}
                        />
                        <h7 className='information'>Email: </h7>
                        <TextBox label="email"
                            value = {email}
                            onChange={onChangeEmail}
                        />
                        <h7 className='information'>Your messages: </h7>
                        <TextBox label="message"
                            value = {message}
                            onChange={onChangeMessage}
                        />
                    </CardContent>
                    <CardActions className='CardActions'>
                        <Button 
                            style={{
                                background: 'RoyalBlue', color: 'white'
                            }}
                            onClick={onSubmit}>Submit
                        </Button>
                        <Button 
                            style={{
                                background: 'RoyalBlue', color: 'white'
                            }}
                            href="/">Cancel
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default ContactUs;