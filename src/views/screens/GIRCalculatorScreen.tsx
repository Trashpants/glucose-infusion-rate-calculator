import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import Constants from "expo-constants";
import SegmentedControl from "@react-native-community/segmented-control";
import {
  HorizontalCardPicker,
  FormLabel,
  Spacer,
  NumberInput,
} from "@components/index";
import { useTheme } from "@react-navigation/native";
import { calculateIVFluidGIR } from "@utilities/Calculations";

const kgWeights = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GIRCalculatorScreen() {
  const theme = useTheme();

  const [weight, setWeight] = useState<number>(0);
  const [dextrose, setDextrose] = useState<number>(0);
  const [ml, setMl] = useState<number>(0);
  const [polyCal, setPolyCal] = useState<number>(0);

  const styles = StyleSheet.create({
    container: { flex: 1 },
    ivGIRContainer: {
      marginTop: 6,
      margin: 12,
      borderColor: theme.colors.text,
      borderTopWidth: 2,
      flexDirection: "row",
      alignItems: "baseline",
    },
    ivGIR: {
      paddingHorizontal: 12,
      color: theme.colors.text,
      fontSize: 96,
      fontWeight: "200",
    },
    ivGIRMeasurement: {
      marginLeft: 6,
      color: theme.colors.text,
      fontSize: 36,
      fontWeight: "600",
      borderColor: theme.colors.text,
      paddingBottom: 0,
    },
    polyCalSegments: {
      margin: 12,
    },
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Constants.statusBarHeight + 36}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Spacer />
          <FormLabel>Childs Weight</FormLabel>
          <HorizontalCardPicker
            items={kgWeights}
            measurement="KG"
            onPress={(weightVal) => {
              setWeight(weightVal);
            }}
          />

          <Spacer />
          <FormLabel>IV fluids/TPN</FormLabel>
          <NumberInput
            onChange={(dex) => {
              setDextrose(dex);
            }}
            length={2}
            ending="Dextrose %"
          />

          <Spacer />
          <NumberInput
            onChange={(m) => {
              setMl(m);
            }}
            length={2}
            ending="ml/hr"
          />
          <Spacer />
          <FormLabel>IV fluid GIR</FormLabel>
          <View style={styles.ivGIRContainer}>
            <Text style={styles.ivGIR} numberOfLines={1} adjustsFontSizeToFit>
              {calculateIVFluidGIR(weight, dextrose, ml)}
              <Text style={styles.ivGIRMeasurement}> mg/kg/min</Text>
            </Text>
          </View>

          <Spacer />
          <FormLabel>PolyCal</FormLabel>
          <SegmentedControl
            style={styles.polyCalSegments}
            values={["None", "1/4 tsp", "1/2 tsp", "3/4 tsp", "1 tsp"]}
            selectedIndex={polyCal}
            onChange={(event) => {
              setPolyCal(event.nativeEvent.selectedSegmentIndex);
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export { GIRCalculatorScreen };
