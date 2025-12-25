import { Tabs } from 'expo-router';
import '../../global.css';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: 'bsssss', title: 'Home' }} />
      <Tabs.Screen name="about" options={{ headerTitle: 'About', title: 'Abooooout' }} />
    </Tabs>
  );
}
