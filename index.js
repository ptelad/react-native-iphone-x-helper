import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight
    });
}

export function getSafeAreaInset(isLandscape = false, isTranslucent = false) {
    const inset = (top, left, bottom, right) => ({top, left, bottom, right});
    if (isIphoneX()) {
        return isLandscape ? inset(0, 44, 21, 44) : inset(44, 0, 34, 0);
    } else {
        const top = Platform.OS === 'ios' || isTranslucent ? getStatusBarHeight() : 0;
        return inset(top, 0, 0, 0);
    }
}
