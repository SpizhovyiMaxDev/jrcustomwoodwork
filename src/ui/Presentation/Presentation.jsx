import { PresentationProvider } from "../../contexts/PresentationProvider";
import ModalSlider from "./ModalSlider";
import Slider from "./Slider";

function Presentation({ imgsSrcSets, mediaSizes, customStyles }) {
  return (
    <PresentationProvider
      imgsSrcSets={imgsSrcSets}
      mediaSizes={mediaSizes}
      customStyles={customStyles}
    >
      <Slider />
      <ModalSlider />
    </PresentationProvider>
  );
}

export default Presentation;
