import './App.css';
import Carousel from './components/carousel/Carousel';

function App() {
  const images = [
    {
      url: "https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000",
      slide: 1
    },
    {
      url: "https://img.freepik.com/free-vector/stylish-abstract-web-banner-with-text-space_1017-39039.jpg?w=2000",
      slide: 2
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      slide: 2
    }
  ];


  return (
    <div>
      <Carousel items={images} />
    </div>
  );
}

export default App;
