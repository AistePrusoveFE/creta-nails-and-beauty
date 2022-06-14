import background from './assets/background.jpeg'
import IMAGES from './images';

function App() {
  return (
    <div className="pb-20">
       <div className="mb-12">
            <img src={background} alt="leaves and name" className="h-52 md:h-96 lg:h-screen w-full object-cover"/>
       </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-10">
           {IMAGES.map((image, index) => {
               return (
                   <div className="place-self-center">
                       <img key={index} src={image} alt="nails design" className="w-full h-full object-cover"/>
                   </div>
               )
           })}
       </div>
    </div>
  );
}

export default App;
