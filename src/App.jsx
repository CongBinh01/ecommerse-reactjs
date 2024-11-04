import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/Sidebar/Sidebar';

function App() {
  return ( 
   <SideBarProvider>
    <SideBar />
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
   </SideBarProvider>
  );
}

export default App
