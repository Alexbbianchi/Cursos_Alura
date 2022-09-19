import React from 'react';
import { 
    SafeAreaView, 
    StatusBar, 
    KeyboardAvoidingView,
    Platform 
} from 'react-native';

import globalStyles, { cores } from '../../general-styles';
import defaultViewStyles from './default-view-style';

export default function DefaultView({ children }) {
    return (
        <>
            <SafeAreaView style={defaultViewStyles.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo} />
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"} 
                    style={globalStyles.preencher} 
                >
                {children}
                </KeyboardAvoidingView>
            </SafeAreaView>

            <SafeAreaView style={defaultViewStyles.ajusteTelaBaixo} />
        </>
    );
}