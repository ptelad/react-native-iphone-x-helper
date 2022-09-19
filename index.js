/** @format */

import { Dimensions, Platform, StatusBar } from "react-native"

export function isIphoneX() {
    return (
        Platform.OS === "ios" &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (checkDemension(780) ||
            checkDemension(812) ||
            checkDemension(844) ||
            checkDemension(896) ||
            checkDemension(926) ||
            checkDemension(852) ||
            checkDemension(932))
    )
}

export function isDynamicIsland() {
    return Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS && _isStatusBarHeight59()
}

const checkDemension = (size) => {
    // window is not correct sometimes when screen is correct
    const window = Dimensions.get("window")
    const windowRes = window.width == size || window.height == size
    const screen = Dimensions.get("screen")
    const screenRes = screen.width == size || screen.height == size
    return windowRes || screenRes
}

const checkDimensions = (portraitWidth, portraitHeight) => {
    const window = Dimensions.get("window")
    const windowRes =
        (window.height === portraitHeight && window.width === portraitWidth) ||
        (window.width === portraitHeight && window.height === portraitWidth)

    const screen = Dimensions.get("screen")
    const screenRes =
        (screen.height === portraitHeight && screen.width === portraitWidth) ||
        (screen.width === portraitHeight && screen.height === portraitWidth)

    return windowRes || screenRes
}

// 12, 12 Pro, 13, 13 Pro and 12 Pro Max, 13 Pro Max
const _isStatusBarHeight47 = () => {
    return checkDimensions(390, 844) || checkDimensions(428, 926)
}

// 11, xr
const _isStatusBarHeight48 = () => {
    // FIXME: cannot distinguish 11/xr between 11/11 pro max by their resolution
    // if (!checkDimensions(414, 896)) {
    //     return false
    // }
    return false
}

// 12 Mini, 13 Mini
const _isStatusBarHeight50 = () => {
    return checkDimensions(360, 780)
}
// 14 Pro, 14 Pro Max
const _isStatusBarHeight59 = () => {
    return checkDimensions(393, 852) || checkDimensions(430, 932)
}

const _getIphoneStatusBarHeight = () => {
    if (isIphoneX()) {
        if (_isStatusBarHeight47()) {
            return 47
        }
        if (_isStatusBarHeight48()) {
            return 48
        }
        if (_isStatusBarHeight50()) {
            return 50
        }
        if (_isStatusBarHeight59()) {
            return 59
        }
        return 44
    }

    return 20
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle
    }
    return regularStyle
}

export function getStatusBarHeight() {
    return Platform.select({
        ios: _getIphoneStatusBarHeight(),
        android: StatusBar.currentHeight,
        default: 0,
    })
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0
}
