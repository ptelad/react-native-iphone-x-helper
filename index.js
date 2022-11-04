import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 780 || dimen.width === 780)
            || (dimen.height === 812 || dimen.width === 812)
            || (dimen.height === 844 || dimen.width === 844)
            || (dimen.height === 896 || dimen.width === 896)
            || (dimen.height === 926 || dimen.width === 926))
    );
}

const checkDimensions = (portraitWidth, portraitHeight) => {
    const dimen = Dimensions.get('window');

    return (dimen.height === portraitHeight && dimen.width === portraitWidth)
        || (dimen.width === portraitHeight && dimen.height === portraitWidth)
}

// 5.4: 12 Mini, 13 Mini
const isIphoneScreen54 = () => checkDimensions(375, 812)
// 6.1: 12, 12 Pro, 13, 13 Pro
const isIphoneScreen61 = () => checkDimensions(390, 844)
// 6.7: 12 Pro Max, 13 Pro Max
const isIphoneScreen67 = () => checkDimensions(428, 926)

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

function getIphoneStatusBarHeight(safe) {
    if (isIphoneX()) {
        if (!safe) {
            return 30
        }
        if (isIphoneScreen54()) {
            return 50
        }
        if (isIphoneScreen61() || isIphoneScreen67()) {
            return 47
        }

        return 44
    }

    return 20
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: getIphoneStatusBarHeight(safe),
        android: StatusBar.currentHeight,
        default: 0
    });
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}
