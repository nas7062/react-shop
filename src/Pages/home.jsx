import Main from '../Components/main/main';
import SlickSlider from '../Components/slider/slickslider';

function Home({products,setproducts})
{
    return (
        <>
    <SlickSlider products={products} setproducts ={setproducts}/>,
    <Main products ={products} setproducts ={setproducts} />
    </>
    );
};

export default Home;