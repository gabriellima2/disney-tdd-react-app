import { BrowserRouter } from "react-router-dom";

export const WithBrowserRouter = (props) => (
  <BrowserRouter>
    {props.children}
  </BrowserRouter>
);
