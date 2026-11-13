module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-gesture-handler|react-native-reanimated|react-native-safe-area-context|react-native-screens|react-native-vector-icons|react-native-responsive-dimensions)/)',
  ],
};
