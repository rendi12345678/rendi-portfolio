import React, { Suspense, lazy } from "react";
import useMaps from "../../hooks/useMaps";
import useNavigatorOnLine from "../../hooks/useNavigatorOnline";

function CoolImage() {
return (
<div className="maps reveal">
  <img className="cool-image" src="/images/rendi.jpeg" alt="Cool Image" />
</div>
);
}

export default CoolImage;
