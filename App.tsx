import { StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import './global.css'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-white dark:bg-gray-900"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-900">
        <Text className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Assistive Tech
        </Text>
      </View>

      <View className="flex-1 px-6 py-8">
        <Text className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
          Welcome to Assistive Communication
        </Text>
        <Text className="text-base leading-6 text-gray-600 dark:text-gray-400">
          Your companion for accessible and effective communication. This app
          helps you express yourself clearly and connect with others.
        </Text>
      </View>
    </View>
  );
}

export default App;
