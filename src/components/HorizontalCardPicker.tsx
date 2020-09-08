import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import colors from "@utilities/Colors";

interface HorizontalCardPickerProps {
  onPress: (value: number) => void;
  items: number[];
  measurement?: "KG" | "LBs";
}
const HorizontalCardPicker: FunctionComponent<HorizontalCardPickerProps> = ({
  onPress,
  items,
  measurement,
}) => {
  /**
   * As we know generally these will be used for a short list,
   * We can use array.map over a flatlist as performance hit is negligible
   */

  const [selectedValue, setSelectedValue] = useState<number>(-1);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {},
    horizontalPadder: {
      width: 6,
    },
    tapCard: {
      backgroundColor: theme.colors.card,
      marginHorizontal: 6,
      marginVertical: 6,
      height: 72,
      width: 72,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    selectedCard: {
      backgroundColor: colors.blue400,
    },
    valueText: {
      fontSize: 32,
      fontWeight: "300",
      color: theme.colors.text,
    },
    selectedValueText: {
      color: colors.grey050,
    },
    measurementText: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.colors.text,
    },
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.horizontalPadder} />
      {items.map((i, index) => {
        const isSelected = i === selectedValue;
        return (
          <TouchableHighlight
            testID="button"
            key={index}
            onPress={() => {
              setSelectedValue(i);
              onPress(i);
            }}
            style={[styles.tapCard, isSelected && styles.selectedCard]}
            underlayColor={theme.colors.border}
          >
            <>
              <Text
                style={[
                  styles.valueText,
                  isSelected && styles.selectedValueText,
                ]}
              >
                {i}
              </Text>
              <Text
                style={[
                  styles.measurementText,
                  isSelected && styles.selectedValueText,
                ]}
              >
                {measurement}
              </Text>
            </>
          </TouchableHighlight>
        );
      })}
      <View style={styles.horizontalPadder} />
    </ScrollView>
  );
};

export { HorizontalCardPicker };
