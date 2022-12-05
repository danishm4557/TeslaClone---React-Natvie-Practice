import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const CarItem = () => {
  return (
	<View style={styles.carContainer}>
        
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.headline}>Model X</Text>
          <Text style={styles.subheading}>Starting at $69,420</Text>
        </View>

      </View>
  )
}

export default CarItem