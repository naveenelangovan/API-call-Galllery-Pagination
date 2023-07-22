import GridGallery from "./GridGallery";
import Imggal from "./Imggal";
import Main from "./Main";
import Todos from "./Todos";
import Weather from "./Weather";


function App() {
    return(
        <>
       {/* <Todos /> */}
       {/* <Weather  />
       <Weather  location={'Chennai'} climate={'hot'} />
       <Weather  location={'Mumbai'} climate={'rainy'}/>
       <Weather  location={'Bangalore'} climate={'snow'}/>
       <Weather  location={'Delhi'} climate={'cold'}/> */}
       <Imggal/>
       <GridGallery />
        </>
    )
}

export default App