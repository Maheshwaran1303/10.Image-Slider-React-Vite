import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700 mt-10">Image Slider</h1>
      <ImageSlider />
    </div>
  );
}

export default App;
