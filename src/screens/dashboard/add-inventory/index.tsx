import React, {useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';
import Button from 'src/components/button';
import Header from 'src/components/header';
import Input from 'src/components/input';
import {InputErrorType, ScreenProp} from 'src/utilities/types';
import styles from './styles';
import {useInventory} from 'src/context/inventory';
import {moneyToNumber} from 'src/utilities/formatter';

export function AddInventory({navigation}: ScreenProp) {
  const {addItem} = useInventory();
  const [name, setName] = useState('');
  const [totalStock, setTotalStock] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<InputErrorType>(new Map());

  const handleSubmit = useCallback(async () => {
    const newError: InputErrorType = new Map();

    if (!name.length) {
      newError.set('name', true);
    }

    if (!totalStock.length) {
      newError.set('totalStock', true);
    }

    if (!price.length) {
      newError.set('price', true);
    }

    if (
      !description.length ||
      description.trim().replace(/\s\s+/g, ' ').split(' ').length < 3
    ) {
      newError.set('description', true);
    }

    if (newError.size) {
      setError(newError);
      return;
    }

    const data = {
      name,
      price: moneyToNumber(price).toString(),
      totalStock,
      description,
    };

    try {
      const res = await addItem(data);

      showMessage({
        message: 'Success',
        description: res,
        type: 'success',
      });

      setName('');
      setPrice('');
      setTotalStock('');
      setDescription('');
    } catch (err) {
      showMessage({
        message: 'Error',
        description: err as string,
        type: 'danger',
      });
    }
  }, [name, totalStock, description, price, addItem]);

  return (
    <SafeAreaView style={styles.container}>
      <Header back onBackPress={navigation.goBack} title="Add Inventory" />
      <KeyboardAwareScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            autoCompleteType="name"
            autoCorrect={false}
            label="Name"
            placeholder="John"
            value={name}
            onChangeText={text => {
              setName(text);
              setError(state => {
                if (!state.get('name')) {
                  return state;
                }
                const newState = new Map(state);
                newState.delete('name');
                return newState;
              });
            }}
            error={error.get('name')}
          />
          <View style={styles.formTop}>
            <Input
              label="Total Stock"
              placeholder="0.00"
              autoCorrect={false}
              keyboardType="numeric"
              value={totalStock}
              onChangeText={text => {
                setTotalStock(text);
                setError(state => {
                  if (!state.get('totalStock')) {
                    return state;
                  }
                  const newState = new Map(state);
                  newState.delete('totalStock');
                  return newState;
                });
              }}
              error={error.get('totalStock')}
            />
          </View>
          <View style={styles.formTop}>
            <Input
              money
              label="Price"
              placeholder="0.00"
              autoCorrect={false}
              keyboardType="numeric"
              value={price}
              onChangeText={text => {
                setPrice(text);
                setError(state => {
                  if (!state.get('price')) {
                    return state;
                  }
                  const newState = new Map(state);
                  newState.delete('price');
                  return newState;
                });
              }}
              error={error.get('price')}
            />
          </View>
          <View style={styles.formTop}>
            <Input
              multiline
              label="Decription"
              numberOfLines={4}
              placeholder="Your description"
              value={description}
              onChangeText={text => {
                setDescription(text);
                setError(state => {
                  if (!state.get('description')) {
                    return state;
                  }
                  const newState = new Map(state);
                  newState.delete('description');
                  return newState;
                });
              }}
              error={error.get('description')}
              message={description ? 'Must be at least three words' : undefined}
            />
          </View>
          <Button text="Add" onPress={handleSubmit} style={styles.formTop} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default AddInventory;
