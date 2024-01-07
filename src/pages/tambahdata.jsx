import Swal from "sweetalert2";

function Tambahdata() {
    const cekusername = localStorage.getItem('username');
    const cekpassword = localStorage.getItem('password');
    if(cekusername == null && cekpassword == null){
        window.location.replace('/');
        setTimeout(() => {
            Swal.fire({
                title: 'Bukan admin',
                text: 'Silakan pengecekan admin terlebih dahulu',
                icon: 'error',
                confirmButtonText:'woke'
            });
        }, 0);
    }
    return (
        <>
            <h1 className="my-56 text-2xl font-bold text-center"> cek admin terlebih dahulu jika ingin menambahkan data</h1>
        </>
    )
}

export default Tambahdata