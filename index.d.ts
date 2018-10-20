interface SafeAreaInset {
    top: number,
    left: number,
    bottom: number,
    right: number,
}

export function isIphoneX(): boolean;
export function ifIphoneX<T, U>(iphoneXVal: T, regularVal: U): T | U;
export function getStatusBarHeight(safe?: boolean): number;
export function getSafeAreaInset(isLandscape?: boolean): SafeAreaInset;