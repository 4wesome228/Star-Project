import React from "react";
import { SwapiServiceConsumer } from "../starwars-components/swapi-service-context";

export const swapiServiceHOC = (Wrapped, mapMethodsToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
