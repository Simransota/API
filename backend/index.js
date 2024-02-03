import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 200,
            img: 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 250,
            img: 'https://images.unsplash.com/photo-1706650079705-160f2c07c913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            img: 'https://images.unsplash.com/photo-1682685795579-37e731bfefab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
    }
    
    res.send(products);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
