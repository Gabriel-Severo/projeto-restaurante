import styles from '../styles/Inicio.module.css'
import Menu from '../components/Menu'
import Conteudo from '../components/Conteudo'
import Carrinho from '../components/Carrinho'
import { useEffect, useState } from 'react'

export default function Inicio() {

    const [produtosLista, setProdutosLista] = useState([])
    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [filtro, setFiltro] = useState(0)
    const [filtroTexto, setFiltroTexto] = useState('')
    const [ordenarMetodo, setOrdernarMetodo] = useState('Menor Preço')

    useEffect(() => {
        async function getProdutos() {
            const response = await fetch("http://localhost:1337/products")
            setProdutosLista(await response.json())
        }
        async function getCategorias() {
            const response = await fetch("http://localhost:1337/categories")
            setCategorias(await response.json())
        }
        getProdutos()
        getCategorias()
    }, [])

    function ordenarProdutos(valor) {
        if(valor === "Menor Preço") {
            produtosLista.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            setProdutosLista([...produtosLista])
        }else if(valor === "Maior Preço"){
            produtosLista.sort((a, b) => {
                return a.price < b.price ? 1 : -1
            })
            setProdutosLista([...produtosLista])
        }else if(valor === "Maior Quantidade"){
            produtosLista.sort((a, b) => {
                return a.amount < b.amount ? 1 : -1
            })
            setProdutosLista([...produtosLista])
        }else if(valor === "Menor Quantidade") {
            produtosLista.sort((a, b) => {
                return a.amount > b.amount ? 1 : -1
            })
            setProdutosLista([...produtosLista])
        }
        console.log(produtosLista)
    }

    useEffect(() => {
        ordenarProdutos(ordenarMetodo)
        setProdutos(produtosLista.filter((produto) => {
            if (produto.category.id === categorias[filtro].id &&
                 produto.name.toLowerCase().startsWith(filtroTexto.toLowerCase())){
                return true
            }
            return false
        }))
    }, [filtro, categorias, filtroTexto, ordenarMetodo])

    return (
        <div className={styles.container}>
            <Menu/>
            <Conteudo 
                produtos={produtos}
                setProdutos={setProdutos}
                categorias={categorias}
                filtro={filtro}
                setFiltro={setFiltro}
                filtroTexto={filtroTexto}
                setFiltroTexto={setFiltroTexto}
                ordenarMetodo={ordenarMetodo}
                setOrdernarMetodo={setOrdernarMetodo}
            />
            <Carrinho/>
        </div>
    )
}