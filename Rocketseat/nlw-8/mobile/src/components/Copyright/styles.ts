import { theme } from '../../theme/index';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: theme.colors.text_secondary,
        fontFamily: theme.fonts.medium
    }
});