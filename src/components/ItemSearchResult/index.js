import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { colors, common } from '../../assets/styles';

class ItemSearchResult extends Component {
    constructor(props){
        super(props)
    }

  render() {

    return (
        <View style={[styles.container]}>
            <View style={styles.rowContent}>
                <View style={styles.avatarWrap}>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={{width: 80, height: 80}} />
                </View>
                <View style={styles.content}>
                    <View style={styles.mainContent}>
                        <View>
                            <Text style={styles.title}>Abul Kreem</Text>
                            <View style={common.flexRowStart}>
                                <Icon
                                    type='font-awesome'
                                    name='star'
                                    size={14}
                                    color={colors.Orange}
                                    containerStyle={{marginHorizontal:1}}
                                />
                                <Icon
                                    type='font-awesome'
                                    name='star'
                                    size={14}
                                    color={colors.Orange}
                                    containerStyle={{marginHorizontal:1}}
                                />
                                <Icon
                                    type='font-awesome'
                                    name='star'
                                    size={14}
                                    color={colors.Orange}
                                    containerStyle={{marginHorizontal:1}}
                                />
                                <Icon
                                    type='font-awesome'
                                    name='star'
                                    size={14}
                                    color={colors.Orange}
                                    containerStyle={{marginHorizontal:1}}
                                />
                                <Icon
                                    type='font-awesome'
                                    name='star'
                                    size={14}
                                    containerStyle={{marginHorizontal:1}}
                                />

                            </View>
                        </View>
                        <View style={styles.boxContentLeft}>
                            <Text style={[common.textCenter, {color: colors.textDefault}]}>SR 93</Text>
                            <Text style={[common.textCenter, {color: colors.textDefault}]}>per hour</Text>
                        </View>

                    </View>
                    <View style={styles.rowGraduted}>
                        <Text style={{color: colors.textDefault}}>Bachelor Student - qualification</Text>
                        <Icon
                            name='graduation-cap'
                            type='font-awesome'
                            size={14}
                            color={colors.Dimgray}
                            containerStyle={{marginRight: 5}}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.rowTag}>
                <View style={styles.tagWrap}>
                    <Text style={styles.textTag}>English</Text>
                </View>
                <View style={styles.tagWrap}>
                    <Text style={styles.textTag}>Math 101</Text>
                </View>
                <View style={styles.tagWrap}>
                    <Text style={styles.textTag}>Trader</Text>
                </View>
                <View style={styles.tagWrap}>
                    <Text style={styles.textTag}>English</Text>
                </View>
                
            </View>
            <View>
                <Icon
                    name='angle-down'
                    type='font-awesome'
                    color={colors.Darkgray}
                />
            </View>
        </View>
        
    )
  }
}

export default ItemSearchResult

