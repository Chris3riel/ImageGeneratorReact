import { useEffect } from "react";
import Replicate from "replicate";


function ImageGenerator() {

  preloadModule("stability-ai/stable-diffusion", {crossOrigin: "anonymus"});

  useEffect(() => {
    const replicate = new Replicate({
      auth: "r8_9J7VD2BeWFxzo4OyHAG6IlutEmJaX9p2YewE8",
    });

    replicate
      .run(
        "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
        {
          input: {
            width: 768,
            height: 768,
            prompt: "an astronaut riding a horse on mars, hd, dramatic lighting",
            scheduler: "K_EULER",
            num_outputs: 1,
            guidance_scale: 7.5,
            num_inference_steps: 50,
          },
        }
      )
      .then((output) => {
        console.log(output);
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  }, []);

  return (
    <>
      <h1>hola</h1>
    </>
  );
}

export default ImageGenerator;
