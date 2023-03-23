import React from "react"
import axios from "axios"
import './App.css';

function App() {

    const deleteProductById = async () => {
        try {
            const url = 'http://localhost:8080/api/productos/6418a1caa122ea559a3da1d5'
            const response = await axios.delete(url)
            console.log(response)
        }

        catch (error) {
            console.log(error)
        }
    }

    const findProduct = async () => {
        try {
            const url = 'http://localhost:8080/api/productos/641330588225d741d920cfb7'
            const response = await axios.get(url)
            console.log(response)
        }

        catch (error) {
            console.log(error)
        }
    }

    const deleteProducts = async () => {
        try {
            const url = 'http://localhost:8080/api/productos'
            const response = await axios.delete(url)
            console.log(response)
        }

        catch (error) {
            console.log(error)
        }
    }

    const getProducts = async () => {
        try {
            const url = 'http://localhost:8080/api/productos'
            const response = await axios.get(url)
            console.log(response)
        }

        catch (error) {
            console.log(error)
        }
    }

    const createProduct = async () => {
        try {
            const url = 'http://localhost:8080/api/productos'
            const data = {
                title: "producto axios",
                price: 200,
                thumbnail: "dsfksffmksdf",
                description: "producto cargado por axios",
            }

            console.log(data)
            const response = await axios.post(url, data)
            console.log(response)
        }

        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <button onClick={createProduct}>create Products</button>
            <button onClick={getProducts}>get Products</button>
            <button onClick={deleteProducts}>Delete Products</button>
            <button onClick={findProduct}>serch Product</button>
            <button onClick={deleteProductById}>delete Product by id</button>
        </div>
        
    );
}

export default App;
