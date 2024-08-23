import { Text, View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function MyCustomText(a: number, b: number): any {
  return (
    <View>
      <Text>{a * b}</Text>
    </View>
  );
}
