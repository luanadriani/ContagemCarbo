import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutosEditar from './pages/admin/produtos/produtos.editar';
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

// IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutosDetails from './pages/client/produtos/produtos.details';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                <Route path="/" element={<Home />} />
                <Route path="/produtos/:idProduto" element={<ProdutosDetails />} />

                {/* Rota Admin */}
                <Route path="/admin" element={<Dashboard />} />

                <Route path="/admin/produtos" element={<Produtos />} />
                <Route path="/admin/produtos/cadastrar" element={<ProdutosCadastrar />} />
                <Route path="/admin/produtos/editar/:idProduto" element={<ProdutosEditar />} />

                <Route path="/admin/usuarios" element={<Usuarios />} />
                <Route path="/admin/usuarios/cadastrar" element={<UsuariosCadastrar />} />
                <Route path="/admin/usuarios/editar/:idUsuario" element={<UsuariosEditar />} />
            </Routes>
        </BrowserRouter>
    )
}