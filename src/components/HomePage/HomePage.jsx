import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';


function HomePage() {
    const { container } = styles
    return (
        <div>
           <div className={ container }>
                <MyHeader /> 
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts />
           </div>
        </div>
    );
}
  
export default HomePage