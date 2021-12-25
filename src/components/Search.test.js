import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";

expect.extend(toHaveNoViolations);

test('should not have any accessibility violations', async () => {
  const { container } = render(<Router><Search searchQuery='' /></Router>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
})