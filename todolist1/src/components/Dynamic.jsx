import React from "react";
import { TypeAnimation } from "react-type-animation";



function Dynamic(){
return (
        <div id="getstart" className="Dynamic ">
            <p className="display-1">Just
            <TypeAnimation className="Dynamic1"
  sequence={[' Do It.',1000,'',1000,]}
  speed={75}
  repeat={Infinity}
/>
</p>
        </div>
    );
}

export default Dynamic;