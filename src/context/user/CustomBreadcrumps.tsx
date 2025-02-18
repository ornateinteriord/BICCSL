import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

interface breadcrumbsProp {
  path : string
  breadcrumb : string
}
const routes : breadcrumbsProp[] [
  { path: "/admin/members", breadcrumb: "Members" },
  { path: "/admin/members/update-member", breadcrumb: "Update Member" },
];
const CustomBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes,{ excludePaths: ["/admin", "/"] });

  return (
    <Breadcrumbs separator=">>" aria-label="breadcrumb" sx={{ marginBottom: "1rem", color: "black" }}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        index !== breadcrumbs.length - 1 ? (
          <Link key={match.pathname} to={match.pathname} style={{ textDecoration: "none", color: "text.primary" }}>
            {breadcrumb}
          </Link>
        ) : (
          <Typography key={match.pathname} color="text.primary">
            {breadcrumb}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
