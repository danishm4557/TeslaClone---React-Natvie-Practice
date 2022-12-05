import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButton'

const CarItem = (props) => {

  const { name , tagline , image, taglineCTA } = props.car


  return (
	<View style={styles.carContainer}>
        
        <ImageBackground source={image} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.headline}>{name}</Text>
          <Text style={styles.subheading}>
            {tagline}
            {' '}
            <Text style={styles.subheadingCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
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
        
      </View>
  )
}

export default CarItem