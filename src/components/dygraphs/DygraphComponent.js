import React, { useRef, useEffect } from "react";
import Dygraph from "dygraphs";

const DygraphComponent = ({ data, options, ...restProps }) => {
  const container = useRef();
  const graph = useRef();

  useEffect(() => {
    if (!graph.current) {
      graph.current = new Dygraph(container.current, data, options);
    }

    return () => graph.current.destroy();
  }, [data, options]);

  return <div ref={container} />;
};

export default DygraphComponent;
