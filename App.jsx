import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/routes';

// function cacheImages(images) {
//   return images.map(images => {
//     if (typeof image === 'string') {
//       return Image.prefetchj(image)
//     } else {
//       return Asset.fromModule(image).downloadAsync()
//     }
//   })
// }

export default function App() {
  // const [isReady, setIsReady] = useState(false)

  // async function _loadAssetsAsync() {
  //   const imageAssets = cacheImages([required('./assets/images/bg.jpg')])

  //   console.log(imageAssets, 'ready')
  //   await Promise.all([...imageAssets])
  // }

  return (
    <>
      {/* {!false ? (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      ) : ( */}
        <SafeAreaProvider>
          <Router />
          <StatusBar style='light' backgroundColor='transparent' translucent hidden={false} />
        </SafeAreaProvider>
      {/* )} */}
    </>
  )
}
