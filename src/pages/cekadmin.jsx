import ConfigApi from "../private/configApi";
import axios from "axios";
import Swal from "sweetalert2";

function Cekadmin() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        CekDataAdmin();  
    };

    function CekDataAdmin(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const urlgetadmin = `${ConfigApi.Api_cekadmin}`;
        axios.get(urlgetadmin).then((Response) => {
            const data = Response.data;
            console.log(data);
            const getusername = data.username;
            const getpassword = data.password;

            if (username == getusername && password == getpassword){
                window.location.replace('/admin/tambahdata');
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                window.location.replace('/');
                setTimeout(() => {
                    Swal.fire({
                        title: 'Anda Bukan Admin',
                        text: 'silakan masukan username dan password yang benar',
                        icon: 'error',
                        confirmButtonText:'woke'
                    });
                }, 0);
            }
        }); 
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />
                
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Cekadmin;
