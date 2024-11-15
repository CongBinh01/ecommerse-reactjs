import styles from './styles.module.scss';
import reLoadIcon from "@icons/svgs/reLoadIcon.svg"
import heartIcon from "@icons/svgs/heart.svg"
import cartIcon from "@icons/svgs/cartIcon.svg"
import cls from 'classnames'
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';


function ProductItem({ src,
    prevSrc,
    name,
    price,
    isNotHomePage = false,
    details }) {

        const { isShowGrid } = useContext(OurShopContext)

        const {
            boxImg,
            showImgWhenHover,
            showFncWhenHover,
            boxIcon,
            title,
            priceCl,
            boxSize,
            size,
            textCenter,
            boxBtn,
            content,
            containerItem,
            leftBtn,
            largImg
        } = styles;

        const { size: sizes } = details;
    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, { [largImg]: !isShowGrid})}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {isNotHomePage && (
                    <div className={boxSize}>
                        {sizes.map((item, index) => {
                            return (
                                <div className={size} key={index}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className={cls(title, { [textCenter]: isNotHomePage })}>
                    {name}
                </div>
                <div className={cls(priceCl, { [textCenter]: isNotHomePage })}>
                    Brand 01
                </div>
                <div className={cls(priceCl, { [textCenter]: isNotHomePage })}>
                    ${price}
                </div>
                {isNotHomePage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
                </div>

        </div>
    );
}

export default ProductItem;