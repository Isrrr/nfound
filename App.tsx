import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const hide = async () => await BootSplash.hide({fade: false});

    hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.base} edges={['top']}>
        <StatusBar hidden />
        <WebView
          style={styles.webView}
          source={{uri: 'https://nfound.org/'}}
          mediaPlaybackRequiresUserAction
          startInLoadingState
          renderLoading={() => (
            <ActivityIndicator
              size="large"
              color="black"
              style={styles.indicator}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#EC6807',
  },
  webView: {
    flex: 1,
    backgroundColor: '#EC6807',
  },
  indicator: {
    position: 'absolute',
    backgroundColor: '#EC6807',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
