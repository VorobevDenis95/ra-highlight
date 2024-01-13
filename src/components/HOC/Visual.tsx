import React from "react";
import { JSX } from "react/jsx-runtime";
import Popular from "../Popular";
import New from "../New";

const withVisualCard = (Component: JSX.IntrinsicAttributes) => {
    const HOCComponent = (props: JSX.IntrinsicAttributes) => {
        const { views } = props;
        if (views < 100) {
          return (
            <New>
              <Component { ...props }/>
            </New>
          );
        } else if (views > 1000) {
          return (
            <Popular>
              <Component { ...props }/>
            </Popular>
          );
        }
    
        return <Component { ...props }/>
      }
    
      return HOCComponent;
    
    }


export default withVisualCard;
