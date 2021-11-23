import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';

import Template from '../../../components/template'

import api from '../../../services/api'


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    table: {
        minWidth: 650,
    }
}));

export default function UsuariosListagem() {
    const classes = useStyles();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function loadUsuarios(){
            try {
                const response = await api.get('/api/usuarios')
                setUsuarios(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        loadUsuarios();
    },[])

    async function handleDelete(id){
        if(window.confirm("Deseja realmente excluir este usuario?")){
            try {
                var result = await api.delete('api/usuarios/'+id);

                if(result.status === 200){
                    window.location.href = '/admin/usuarios'
                }else{
                    alert('Ocorreu um erro. Por favor, tente novamente');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <Template nomeDaPagina="USUÁRIOS">
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Paper className={classes.paper}>
                        <h2>Listagem de Usuarios</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nome</TableCell>
                                                <TableCell>E-mail</TableCell>
                                                <TableCell>Tipo</TableCell>
                                                <TableCell>Data de Cadastro</TableCell>
                                                <TableCell>Opções</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {usuarios.map((usuario) => (
                                            <TableRow key={usuario._id}>
                                                <TableCell component="th" scope="row">
                                                    {usuario.nome_usuario}
                                                </TableCell>
                                                <TableCell>{usuario.email_usuario}</TableCell>
                                                <TableCell>{usuario.tipo_usuario === 1 ? <Chip label="Administrador" color="primary" /> : <Chip label="Paciente" color="secondary" />}</TableCell>
                                                <TableCell>{new Date(usuario.updatedAt).toLocaleString('pt-br')}</TableCell>
                                                <TableCell>
                                                <ButtonGroup aria-label="outlined primary button group">
                                                    <Button color="primary" href={'/admin/usuarios/editar/'+usuario._id}>Atualizar</Button>
                                                    <Button color="secondary" onClick={() => {handleDelete(usuario._id)}}>Excluir</Button>
                                                </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Template>
    )
}