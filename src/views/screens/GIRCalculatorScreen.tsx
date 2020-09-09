import React, { useState } from "react";
import {
  Platform,
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
import {
  calculateIVFluidGIR,
  calculateFeedGIR,
  generateNumberList,
} from "@utilities/Calculations";

const kgWeights = generateNumberList(1, 20);

export default function GIRCalculatorScreen() {
  const theme = useTheme();

  const [weight, setWeight] = useState<number>(0);
  const [dextrose, setDextrose] = useState<number>(0);
  const [ml, setMl] = useState<number>(0);

  const [polyCal, setPolyCal] = useState<number>(0);
  const [milk, setMilk] = useState<number>(0);
  const [ssc20, setSsc20] = useState<number>(0);
  const [ssc40, setSsc40] = useState<number>(0);
  const [ebmSingle, setEbmSingle] = useState<number>(0);
  const [ebmDouble, setEbmDouble] = useState<number>(0);
  const [ebmNeoSure, setEbmNeosure] = useState<number>(0);

  const feedGIR = calculateFeedGIR(
    weight,
    polyCal,
    milk,
    ssc20,
    ssc40,
    ebmSingle,
    ebmDouble,
    ebmNeoSure
  );

  const ivFluidGIR = calculateIVFluidGIR(weight, dextrose, ml);

  const totalGIR = feedGIR + ivFluidGIR;

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
        behavior={Platform.OS === "ios" ? "padding" : undefined}
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
              {ivFluidGIR.toFixed(2)}
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

          <Spacer />
          <FormLabel>Enteral nutrition-feeds</FormLabel>
          <NumberInput
            onChange={(v) => {
              setMilk(v);
            }}
            length={2}
            ending="Breast Milk / Similac Advance, ml/hr"
          />

          <NumberInput
            onChange={(v) => {
              setSsc20(v);
            }}
            length={2}
            ending="SSC 20, ml/hr"
          />

          <NumberInput
            onChange={(v) => {
              setSsc40(v);
            }}
            length={2}
            ending="SSC 40, ml/hr"
          />

          <NumberInput
            onChange={(v) => {
              setEbmSingle(v);
            }}
            length={2}
            ending="EBM + HMF 1:50 (single fortified), ml/hr"
          />
          <NumberInput
            onChange={(v) => {
              setEbmDouble(v);
            }}
            length={2}
            ending="EBM + HMF 1:25 (double fortified), ml/hr"
          />
          <NumberInput
            onChange={(v) => {
              setEbmNeosure(v);
            }}
            length={2}
            ending="EBM + HMF 1:25 (double fortified) + Neosure, ml/hr"
          />

          <Spacer />
          <FormLabel>Feed GIR</FormLabel>
          <View style={styles.ivGIRContainer}>
            <Text style={styles.ivGIR} numberOfLines={1} adjustsFontSizeToFit>
              {feedGIR.toFixed(2)}
              <Text style={styles.ivGIRMeasurement}> mg/kg/min</Text>
            </Text>
          </View>
          <Spacer />
          <Spacer />
          <FormLabel>Total GIR</FormLabel>
          <View style={styles.ivGIRContainer}>
            <Text style={styles.ivGIR} numberOfLines={1} adjustsFontSizeToFit>
              {totalGIR.toFixed(2)}
              <Text style={styles.ivGIRMeasurement}> mg/kg/min</Text>
            </Text>
          </View>
          <Spacer />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export { GIRCalculatorScreen };
