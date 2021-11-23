import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api'


import Template from '../../../components/template'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    formControl: {
        width: '100%',
    }
}));

export default function UsuariosCadastrar() {
    const classes = useStyles();

    //Usando Hook useState
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(){
        const data = {
            nome_usuario:nome, 
            email_usuario:email, 
            tipo_usuario:tipo, 
            senha_usuario:senha
        }

        try {
            const response = await api.post('/api/usuarios', data);

            if(response.status === 200){
                window.location.href = '/admin/usuarios'
            } else {
                console.error(response.status)
            }
        } catch (error) {
            alert('Erro ao cadastrar o usuario!');
            console.error(error)
        }
    }

    return (
        <Template nomeDaPagina="USUÁRIOS">
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Paper className={classes.paper}>
                        <h2>Formulário de Cadastro</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="nome"
                                    name="nome"
                                    label="Nome Completo"
                                    fullWidth
                                    autoComplete="given-name"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="E-mail"
                                    fullWidth
                                    autoComplete="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="labelTipo">Tipo do Usuario</InputLabel>
                                    <Select
                                    labelId="labelTipo"
                                    id="tipo"
                                    value={tipo}
                                    onChange={e => setTipo(e.target.value)}
                                    >
                                        <MenuItem value={1}>Administrador</MenuItem>
                                        <MenuItem value={2}>Paciente</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    type="password"
                                    required
                                    id="senha"
                                    name="senha"
                                    label="Senha"
                                    fullWidth
                                    autoComplete="senha"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sn={12}>
                                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                                    Salvar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Template>
    )
}