import { Link as MuiLink } from "@material-ui/core";
import { Link as DomLink } from "react-router-dom";
import React from "react";

export default function Link(props) {
  return <MuiLink {...props} />;
}

Link.defaultProps = {
  component: DomLink,
};
