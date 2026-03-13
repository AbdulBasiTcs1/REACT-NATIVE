import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Modal, 
  FlatList 
} from 'react-native';

export default function App() {
  // State variables for our application
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle original price input
  const handleOriginalPriceChange = (text) => {
    // Basic constraint: keep only numbers and decimal points
    const formattedText = text.replace(/[^0-9.]/g, '');
    setOriginalPrice(formattedText);
  };

  // Function to handle discount input
  const handleDiscountChange = (text) => {
    // Basic constraint: keep only numbers and decimal points
    let formattedText = text.replace(/[^0-9.]/g, '');
    
    // Constraint: Discount cannot be greater than 100
    if (parseFloat(formattedText) > 100) {
      formattedText = '100';
    }
    
    setDiscountPercentage(formattedText);
  };

  // Perform Calculations
  const price = parseFloat(originalPrice) || 0;
  const discount = parseFloat(discountPercentage) || 0;

  const savedAmount = price * (discount / 100);
  const finalPrice = price - savedAmount;

  // Function to save the calculation
  const saveCalculation = () => {
    // Only save if we have a valid price
    if (price > 0) {
      const newEntry = {
        id: Math.random().toString(), // Simple unique ID for the list
        original: price.toFixed(2),
        discountVal: `${discount}%`,
        final: finalPrice.toFixed(2)
      };
      
      // Update history array
      setHistory([...history, newEntry]);
      
      // Clear input fields
      setOriginalPrice('');
      setDiscountPercentage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Discount Calculator</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Original Price:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0.00"
          value={originalPrice}
          onChangeText={handleOriginalPriceChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Discount Percentage (%):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0 - 100"
          value={discountPercentage}
          onChangeText={handleDiscountChange}
        />
      </View>

      {/* Results */}
      <View style={styles.resultsContainer}>
        {/* Calculated amounts displayed with 2 decimal points */}
        <Text style={styles.resultText}>
          You Save: <Text style={styles.boldText}>{savedAmount.toFixed(2)}</Text>
        </Text>
        <Text style={styles.resultText}>
          Final Price: <Text style={styles.boldText}>{finalPrice.toFixed(2)}</Text>
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Save Calculation" color="#28a745" onPress={saveCalculation} />
        <View style={styles.spacing} />
        <Button title="View History" color="#007bff" onPress={() => setModalVisible(true)} />
      </View>

      {/* History Modal */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // required for Android physical back button
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Calculation History</Text>
          
          {/* History Header Row */}
          <View style={styles.historyRowHeader}>
            <Text style={styles.historyCell}>Original Price</Text>
            <Text style={styles.symbolCell}></Text>
            <Text style={styles.historyCell}>Discount</Text>
            <Text style={styles.symbolCell}></Text>
            <Text style={styles.historyCell}>Final Price</Text>
          </View>

          {/* History List */}
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.historyRow}>
                <Text style={styles.historyCell}>{item.original}</Text>
                <Text style={styles.symbolCell}>-</Text>
                <Text style={styles.historyCell}>{item.discountVal}</Text>
                <Text style={styles.symbolCell}>=</Text>
                <Text style={styles.historyCell}>{item.final}</Text>
              </View>
            )}
          />

          {/* Close Modal Button */}
          <View style={styles.closeModalButton}>
            <Button title="Close History" color="#dc3545" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styling for better look and feel
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#343a40',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#495057',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
  },
  resultsContainer: {
    marginVertical: 25,
    padding: 20,
    backgroundColor: '#e2e3e5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d6d8db',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#383d41',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#155724',
    fontSize: 22,
  },
  buttonContainer: {
    marginTop: 10,
  },
  spacing: {
    height: 15, // Simple way to add space between buttons
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#343a40',
  },
  historyRowHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#343a40',
    paddingBottom: 10,
    marginBottom: 10,
  },
  historyRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    paddingVertical: 15,
  },
  historyCell: {
    flex: 2,
    fontSize: 16,
    textAlign: 'center',
    color: '#495057',
  },
  symbolCell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
  },
  closeModalButton: {
    marginTop: 30,
    marginBottom: 20,
  }
});
