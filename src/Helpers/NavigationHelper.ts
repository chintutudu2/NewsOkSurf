import {
  DrawerActions,
  RouteProp,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function pop() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.pop());
    }
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  }
}

export function push(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
}

export function replace(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}

export function openDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
}

export function toggleDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.toggleDrawer());
  }
}

export function closeDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
}

export function drawerJumpTo(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.jumpTo(name, params));
  }
}

export const getRoute = (state: any): RouteProp<any, any> => {
  const route = state.routes[state.index];
  return route.state ? getRoute(route.state) : route;
};

export const getActiveRoute = () => {
  if (navigationRef.isReady()) {
    return getRoute(navigationRef.current?.getRootState());
  }
};

export const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
};

export const useNavigation = () => navigationRef;
