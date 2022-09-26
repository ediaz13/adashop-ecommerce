import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bienvenido a AdaShop',
  description: 'Vendemos los productos electronicos bien baratos',
  keywords: 'Productos eectronicos, compra productoselectronicos, productos electronicos barata',
}

export default Meta
