import { useGSAP } from "@gsap/react";

const Feature = () => {

    useGSAP(()=>{

    },[])

  return (
    <section className="common-padding h-full bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 className="section-heading" id="features_title">
            Explore the full story.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Feature;
