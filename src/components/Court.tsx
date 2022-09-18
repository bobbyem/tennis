import React, { useEffect, useRef } from "react";
import { Surface } from "../types/types";

type Props = {
  surface: Surface;
  setSurface: React.Dispatch<React.SetStateAction<Surface>>;
};

function Court(props: Props) {
  const { surface, setSurface } = props;
  const courtRef = useRef<HTMLDivElement>(null); //For getting the width of the court for animation

  useEffect(() => {
    //Get the current width and height of the court
    const width = courtRef.current?.offsetWidth;
    const height = courtRef.current?.offsetHeight;
    //Update the CSS variables
    updateCSSVar(`${width}px`, `${height}px`);
  }, []);

  //Cycles thru the list of surfaces
  function handleChange(): void {
    //Check for end
    if (surface === Surface.__LENGTH - 1) {
      setSurface(0);
      return;
    }
    //Next surface
    setSurface(surface + 1);
  }

  //Updates the CSS varible --court-width
  function updateCSSVar(width: string, height: string): void {
    document.documentElement.style.setProperty("--court-width", width);
    document.documentElement.style.setProperty("--court-height", height);
  }

  return (
    <>
      <div
        className={`court ${Surface[surface]}`}
        onClick={handleChange}
        ref={courtRef}
      >
        <div className="court__grid">
          <div className="court__cell court__alley--top-left"></div>
          <div className="court__cell court__alley--top-right"></div>
          <div className="court__cell court__nml--left"></div>
          <div className="court__cell court__ad--left"></div>
          <div className="court__cell court__ad--right"></div>
          <div className="court__cell court__dc--left"></div>
          <div className="court__cell court__dc--right"></div>
          <div className="court__cell court__nml--right"></div>
          <div className="court__cell court__alley--bottom-left"></div>
          <div className="court__cell court__alley--bottom-right"></div>
        </div>
      </div>
    </>
  );
}

export default Court;
