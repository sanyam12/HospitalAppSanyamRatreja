import React, {ReactElement, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {
  GoogleSignin, GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

function App(): ReactElement | null {
  // const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '324894335225-93mecedhphmisaeg16u4kpiik4isje4b.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      console.warn(usrInfo.user.email);
    } catch (error) {
      // @ts-ignore
      console.log(error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
