import botas from '../../images/logo/logo.png'
import botas1 from '../../images/images/products/botas1.avif';
import botas2 from '../../images/images/products/botas2.avif';
import botas3 from '../../images/images/products/botas3.avif';
import botas4 from '../../images/images/products/botas4.avif';
import botas5 from '../../images/images/products/botas5.avif';
import botas6 from '../../images/images/products/botas6.avif';
import botas7 from '../../images/images/products/botas7.avif';
import botas8 from '../../images/images/products/botas8.avif';
import botas9 from '../../images/images/products/botas9.avif';

import hush from '../../images/images/products/hush.avif';
import hush1 from '../../images/images/products/hush2.avif';
import hush2 from '../../images/images/products/hush2.avif';
import hush3 from '../../images/images/products/hush3.avif';
import hush4 from '../../images/images/products/hush4.avif';
import hush5 from '../../images/images/products/hush5.avif';
import hush6 from '../../images/images/products/hush6.avif';
import hush7 from '../../images/images/products/hush7.avif';
import hush8 from '../../images/images/products/hush8.avif';
import hush9 from '../../images/images/products/hush9.avif';

import timberland from '../../images/images/products/timberland.avif';
import timberland1 from '../../images/images/products/timberland.avif';
import timberland2 from '../../images/images/products/timberland2.avif';
import timberland3 from '../../images/images/products/timberland3.avif';
import timberland4 from '../../images/images/products/timberland4.avif';
import timberland5 from '../../images/images/products/timberland5.avif';
import timberland6 from '../../images/images/products/timberland6.avif';
import timberland7 from '../../images/images/products/timberland7.avif';
import timberland8 from '../../images/images/products/timberland8.avif';
import timberland9 from '../../images/images/products/timberland9.avif';


import useScrollAnimation from '../hooks/useScrollAnimation';
import './Products.css';

function Products() {
    useScrollAnimation();
  return (
    <section id="products" className="products fade-in">
    <h2>Nuestros productos</h2>
    <div className="carrousel-container">
     
        <img className="logo" src={botas} alt="Logo cat"/>
        <div className="slides-container">
            <div className="slide">
                <div className="slide-image">
                    <img src={botas1} alt="Bota 1"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas2} alt="Bota 2"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas3} alt="Bota 3"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas4} alt="Bota 4"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas5} alt="Bota 5"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas6} alt="Bota 6"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas7} alt="Bota 7"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas8} alt="Bota 8"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={botas9} alt="Bota 9"/>
                </div>
            </div>
        </div>
    </div>
    <div className="carrousel-container">
     
        <img className="logo" src={hush} alt="Logo hushpuppies"/>
        <div className="slides-container">
            <div className="slide">
                <div className="slide-image">
                    <img src={hush1} alt="Bota 1"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush2} alt="Bota 2"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush3} alt="Bota 3"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush4} alt="Bota 4"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush5} alt="Bota 5"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush6} alt="Bota 6"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush7} alt="Bota 7"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush8} alt="Bota 8"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={hush9} alt="Bota 9"/>
                </div>
            </div>
        </div>
    </div>
    <div className="carrousel-container">
     
        <img className="logo" src={timberland} alt="Logo Monster"/>
        <div className="slides-container">
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland1} alt="Bota 1"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland2} alt="Bota 2"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland3} alt="Bota 3"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland4} alt="Bota 4"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland5} alt="Bota 5"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland6} alt="Bota 6"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland7} alt="Bota 7"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland8} alt="Bota 8"/>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src={timberland9} alt="Bota 9"/>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Products;
