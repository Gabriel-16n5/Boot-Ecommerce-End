import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerMain, Divtop, Divmenu, Button,Register } from "./styled"
import axios from "axios";

export default function LoginPage() {
    const navigate = useNavigate();
    const [data, setData] = useState({email:"",password:""})
    
    function register(e) {
        e.preventDefault();
        const url = "http://localhost:5000"
        const promessa = axios.post(`${url}/signIn`,data);
        
        promessa.then((res) => {
            alert("Login efetuado com sucesso!");
            navigate("/");
            console.log(res.data)
            const token = `Bearer ${res.data.token}`
            localStorage.setItem("token",token)
            localStorage.setItem("name",res.data.name)
        });
        promessa.catch(err => {
            alert(`Erro: ${err.response.status}, ${err.response.data}`)
        });
    }
    return (
        <ContainerMain>
        <Divtop>
            <h1>CARRINHO</h1>
            <h1>Barra de progresso</h1>
            <h1>SEUS DADOS</h1>
        </Divtop>
        <Divmenu>
            <h2>Já tem uma conta?</h2>
            <p>Informe os seus dados abaixo para acessá-la.</p>
            <form>
                
                <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="E-mail" type="email" />
                <input value={data.password} onChange={e => setData({ ...data, password: e.target.value })} placeholder="Senha" type="password" />
                
                <div>
                    <input type="checkbox" />
                    <p>Lembrar meus dados</p>
                </div>
                
            </form>
            <Button onClick={e => register(e)}>ACESSAR CONTA</Button>
            <a onClick={() => navigate("/")}>Esqueci minha senha</a>
        </Divmenu>
        <Divmenu>
        <h2>Novo Cliente</h2>
        <p>Criar uma conta é fácil! Informe seus dados e uma senha para aproveitar todos os beneficios de ter uma conta.</p>
        <Register onClick={e => navigate("/register")}>CADASTRE-SE</Register>
        </Divmenu>
    </ContainerMain>
    )
}