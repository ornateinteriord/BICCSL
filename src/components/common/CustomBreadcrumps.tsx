import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export interface breadcrumbsProp {
  path: string;
  breadcrumb: string;
}

interface CustomBreadcrumbsProps {
  routes: breadcrumbsProp[];
  excludePaths?: string[];
}

const CustomBreadcrumbs = ({ routes, excludePaths = ["/admin", "/" , '/user']  }: CustomBreadcrumbsProps) => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <Breadcrumbs separator=">>" aria-label="breadcrumb" sx={{ marginBottom: "1rem", color: "black" }}>
      {breadcrumbs
        .filter(({ match }) => !excludePaths.includes(match.pathname))
        .map(({ match, breadcrumb }, index, arr) =>
          index !== arr.length - 1 ? (
            <Link key={match.pathname} to={match.pathname} style={{ textDecoration: "none", color: "inherit" }}>
              {breadcrumb}
            </Link>
          ) : (
            <Typography key={match.pathname} color="text.primary">
              {breadcrumb}
            </Typography>
          )
        )}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;

