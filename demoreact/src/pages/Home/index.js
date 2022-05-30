import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Navbar from '../../components/navbar'
import Iklan from '../../components/ads'
import ProductCard from '../../components/productCard'
import getProductService from '../../service/getProduct'
import { useSelector } from 'react-redux'
import filterProductFunc from '../../helpers/filterProduct'

export default function Home() {
    const counterState = useSelector((state) => state.counter)
    const [products, setProducts] = useState([])
    const getProduct = async () => {
        const allProduct = await getProductService()
        console.log(allProduct);
        setProducts(allProduct)
    }

    const onFilter = () => {
        const filteredData = filterProductFunc({array:products, minValue: 50 })
        setProducts(filteredData)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img
                    className={styles.header_background}
                    src={require('../../assets/background.png')}
                />
                <Navbar />
                <div className={styles.header_desc}>
                    Fullfilling dreams with strings attached
                </div>
                <div className={styles.header_desc}>{counterState.number}</div>
            </div>
            <Iklan />

            <div onClick={() => onFilter()} className={styles.button_filter}>{'filter > 50'}</div>
            <div className={styles.products}>
                {products.map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))}
            </div>
        </div>
    )
}
