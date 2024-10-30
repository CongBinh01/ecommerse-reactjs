//tao ra 1 hook xu ly cong viec
//tao ra custom hook phai co `use...`
import { useEffect, useState, useRef } from 'react';

const useTranslateX = () => {
       //Luu gia tri up, down
       const [scrollDriction, setScrollDrection] = useState(null);

       //useRef luu vi tri truoc do de biet scroll len hay xuong
       const previousScrollPosition = useRef(0);
   
       const [translateXPosition, setTranslateXPosition] = useState(80);
   
       //Luu vi tri Scroll Position
       const [scrollPosition, setScrollPosition] = useState(0);
   
       const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };
   
    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

       //Khoi tao 1 lan khi component dc Mount
       useEffect(() => {
           //Them scroll de lang nghe va truyen ham scrollTracking vao de xu ly doan Logic do
           window.addEventListener('scroll', scrollTracking);
           //Cleanup function de don dep tai nguyen bo nho
           return () => window.removeEventListener('scroll', scrollTracking);
       }, []);

       useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);
    return {
        translateXPosition
    };
};
export default useTranslateX;