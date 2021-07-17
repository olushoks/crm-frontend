import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/*===================================*
        END OF IMPORTS
*===================================*/

export const BreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
