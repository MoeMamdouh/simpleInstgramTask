import React from 'react'
import {
	StyleSheet,
	Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../../config/'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.WHITE
	},

	image: {
		width: 200,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},
})