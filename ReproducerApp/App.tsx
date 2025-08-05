import React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { ScreenStack, ScreenStackItem } from 'react-native-screens';

export function BasicBareScreens() {
  const [secondShown, setSecondShown] = useState(false);

  return (
    <ScreenStack style={{ flex: 1 }}>
      <ScreenStackItem screenId="1" activityState={2}>
        <Button title="Go to screen 2" onPress={() => setSecondShown(true)} />
      </ScreenStackItem>
      {secondShown && (
        <ScreenStackItem screenId="2" activityState={2}>
          <Button title="Go back" onPress={() => setSecondShown(false)} />
        </ScreenStackItem>
      )}
    </ScreenStack>
  );
}

function App() {
  return (
    <BasicBareScreens />
  );
}

export default App;
