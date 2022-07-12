import imagethumb from "./images/imagethumb.png";

function App() {
  return (
    <div className="bg-backgroundwhite flex w-screen h-screen">
      <div className=" m-auto border-2 bg-white border-white w-[500px] h-[425px] rounded-lg drop-shadow-xl">
        <h1 className="text-3xl pt-12 pb-4 text-center font-medium text-headingcolor">
          Upload your Image
        </h1>
        <h5 className="text-center text-headingcolor font-thin pb-8">
          File type should be jpg, png...
        </h5>
        <div className="w-[338px] h-[219px] m-auto border-2 border-dashed border-blue-200 rounded-lg bg-somesortgray hover:border-dotted">
          <img
            className="w-[125px] h-[125px] m-auto"
            src={imagethumb}
            alt="placeholder"
          />
          <h3 className="text-center">
            Drag & Drop your image here or click here to browse
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
