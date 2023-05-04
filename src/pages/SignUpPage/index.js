import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerMain, Divtop, Divmenu, Button,User } from "./styled"
import { HiUserAdd } from "react-icons/hi";
import axios from 'axios'
import Footer from "../Footer/index"
import Navbar from "../Navbar/index"

export default function SignUpPage() {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "" })
    const [confirm, setConfirm] = useState("")
    function register(e) {
        const URL = process.env.REACT_APP_API_URL
        e.preventDefault();
        if (data.password !== confirm) return alert("As senhas devem ser iguais")
        const promessa = axios.post(`${URL}/signup`, data);

        promessa.then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/login");
            
        });
        promessa.catch(err => {
            alert(`Erro: ${err.response.status}, ${err.response.data}`)
        });

    }
    return (
        <ContainerMain>
            <Navbar/>
            <Divtop>
                <h1>CARRINHO</h1>
                <h1>Barra de progresso</h1>
                <h1>SEUS DADOS</h1>
            </Divtop>
            <Divmenu>
               <User><HiUserAdd /></User> 
                <h2>Criar minha conta</h2>
                <p>Informe seus dados abaixo para criar conta</p>
                <form>
                    <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Nome" type="text" />
                    <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="E-mail" type="email" />
                    <input value={data.password} onChange={e => setData({ ...data, password: e.target.value })} placeholder="Senha" type="password" />
                    <input value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirme a senha" type="password" />
                    <div>
                        <input type="checkbox" />
                        <p>Aceito receber marketing da "nome" por e-mail</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>Estou ciente e CONCORDO com os termos de aceite e políticas de privacidade da "nome"</p>
                    </div>
                </form>
                <Button onClick={e => register(e)}>CRIAR CONTA</Button>
                <a onClick={e => navigate("/login")}>Voltar para o login</a>
            </Divmenu>
            <Footer/>
        </ContainerMain>
    )
}
