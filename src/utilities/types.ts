export interface NavigationProp {
  goBack: () => void;
  push: (routeName: string, params?: any) => void;
  getParam: (paramName: string, defaultValue?: any) => any;
  navigate: (routeName: string, params?: any) => void;
  replace: (routeName: string, params?: any) => void;
  pop: any;
  dispatch: any;
  state: {
    routeName: string;
    key: string;
    params: any;
  };
}

export const navigationObj: NavigationProp = {
  goBack: () => null,
  push: () => null,
  getParam: () => null,
  navigate: () => null,
  replace: () => null,
  pop: () => null,
  dispatch: () => null,
  state: {
    routeName: '',
    key: '',
    params: '',
  },
};

export type StopLoadingType = () => void;

export interface ScreenProp {
  navigation: NavigationProp;
  route?: any;
}

export type InputErrorType = Map<string, boolean>;
