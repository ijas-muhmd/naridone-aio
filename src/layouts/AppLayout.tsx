import { useState, useCallback } from "react";
import { Outlet, useLocation, Link as ReactRouterLink } from "react-router-dom";
import { AppProvider, Frame, Navigation, TopBar } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import {
  HomeIcon,
  SearchIcon,
  ArrowUpIcon,
  LinkIcon,
} from "@shopify/polaris-icons";

export default function AppLayout() {
  const location = useLocation();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((active) => !active),
    [],
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    url: "/app",
    accessibilityLabel: "Naridon",
  };

  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            label: "Overview",
            icon: HomeIcon,
            url: "/app",
            selected: location.pathname === "/app",
          },
          {
            label: "Monitor",
            icon: SearchIcon,
            url: "/app/monitor",
            selected: location.pathname.startsWith("/app/monitor"),
          },
          {
            label: "Improve",
            icon: ArrowUpIcon,
            url: "/app/optimization",
            selected: location.pathname.startsWith("/app/optimization"),
          },
        ]}
      />
    </Navigation>
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

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
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
      >
        <Outlet />
      </Frame>
    </AppProvider>
  );
}
