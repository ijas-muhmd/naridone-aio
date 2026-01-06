import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import { AppProvider, Frame } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

export default function AppLayout() {
  // Custom Link component for Polaris to use React Router
  const Link = ({ children, url, ...rest }: any) => {
    return (
      <ReactRouterLink to={url} {...rest}>
        {children}
      </ReactRouterLink>
    );
  };

  return (
    <AppProvider i18n={translations} linkComponent={Link}>
      <Frame>
        <Outlet />
      </Frame>
    </AppProvider>
  );
}
