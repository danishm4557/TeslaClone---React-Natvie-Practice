import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButton'

const CarItem = () => {
  return (
	<View style={styles.carContainer}>
        
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.headline}>Model X</Text>
          <Text style={styles.subheading}>Starting at $69,420</Text>
        </View>

        <StyledButton 
          type='primary' 
          content={"Custom Order"} 
          onPress={() => {
            console.warn("Customer Order was pressed")
          }
        }/>

        <StyledButton 
          type='secondary' 
          content={"Existing Inventory"} 
          onPress={() => {
            console.warn("Existing Inventory was pressed")
          }
        }/>
        
      </View>
  )
}

export default CarItem