import { PresentationProvider } from "../../contexts/PresentationProvider";
import ModalSlider from "./ModalSlider";
import Slider from "./Slider";

function Presentation({
  imgsSrcSet = [],
  mediaQueries = [],
  wrapperStyles = "",
}) {
  return (
    <PresentationProvider
      imgsSrcSet={imgsSrcSet}
      mediaQueries={mediaQueries}
      wrapperStyles={wrapperStyles}
    >
      <Slider />
      <ModalSlider />
    </PresentationProvider>
  );
}

export default Presentation;
