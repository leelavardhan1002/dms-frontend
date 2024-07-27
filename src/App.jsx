import "./App.css";
import CustomButton from "./components/atoms/button";

function App() {
  return (
    <>
      <CustomButton
        text={"Button"}
        btnColor={"bg-white"}
        textColor={"text-black"}
      />
      <CustomButton
        text={"Close"}
        btnColor={"bg-grey"}
        textColor={"text-black"}
      />
      <CustomButton
        text={"Tejaswi"}
        btnColor={"bg-yellow-500"}
        textColor={"text-black font-bold"}
      />
    </>
  );
}

export default App;
