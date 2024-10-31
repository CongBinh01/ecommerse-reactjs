import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './components/Blog/Blog';
import routers from '@/routers/routers';
import { Suspense } from 'react';

function App() {
  return ( 
    //Higher Component boc tat ca Component vao ben trong
   <BrowserRouter>
      <Suspense fallback={ <div>Loading...</div>}>
        <Routes>
        {
          routers.map((item, index) => {
              return <Route key={index} 
              path={item.path} 
              //Khi component dang duoc goi trong trang thai loading
              //Them de xu ly UI loading
              element={<item.component /> } />
          })
        }
        </Routes>
      </Suspense>


   </BrowserRouter>
  );
}

export default App
